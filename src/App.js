import React, { Component } from 'react'
import Header from './components/Header';
import NewsBox from './components/NewsBox';
import FilterBox from './components/FilterBox';
import Pagination from './components/Pagination';
import { BrowserRouter, Route } from "react-router-dom";
import Setting from './components/Setting';
import Axios from 'axios';
import './App.css';


export class App extends Component {
  constructor(props) {
    super(props)
    this.updateFilter = this.updateFilter.bind(this)
    this.updateQuery = this.updateQuery.bind(this)
    this.updateSort = this.updateSort.bind(this)
    this.updateRange = this.updateRange.bind(this)
    this.updatePage = this.updatePage.bind(this)
    this.state = {
      news: [],
      nbHits: '',
      nbTime: null,
      sort: 'search',
      tags: '',
      query: '',
      range: '',
      page: 0,
      totalPage: null,
      loading: false,
    }
  }

  updateFilter(tag) {
    this.setState({
      tags: tag,
    })
    this.updateNews(tag, this.state.query, this.state.sort, this.state.range, this.state.page)
  }

  updateQuery(query) {
    this.setState({
      query: query,
    })
    this.updateNews(this.state.tags, query, this.state.sort, this.state.range, this.state.page)
  }

  updateSort(sort) {
    this.setState({
      sort: sort
    })
    this.updateNews(this.state.tags, this.state.query, sort, this.state.range, this.state.page)
  }

  updateRange(range) {
    this.setState({
      range: range,
      sort: 'search_by_date'
    })
    this.updateNews(this.state.tags, this.state.query, 'search_by_date', range, this.state.page)
  }

  updatePage(page) {
    console.log(page, "page")
    this.updateNews(this.state.tags, this.state.query, this.state.sort, this.state.range, page)
  }

  updateNews(tag, query, sort, range, page) {
    this.setState({
      loading: true
    })
    Axios.get(`https://hn.algolia.com/api/v1/${sort}?query=${query}&tags=${tag}&numericFilters=${range}&page=${page}`)
      .then(response => {
        console.log(response, `https://hn.algolia.com/api/v1/${sort}?query=${query}&tags=${tag}&numericFilters=${range}&page=${page}`)
        this.setState({
          news: response.data.hits,
          nbHits: response.data.nbHits,
          nbTime: response.data.processingTimeMS,
          totalPage: response.data.nbPages,
          loading: false
        })
      })
      .catch((err) => {
        console.log(err)
        this.setState({
          news: [],
          totalPage: false,
          loading: false
        })
      })
  }

  componentDidMount() {
    this.updateNews('', '', 'search', '', 0)
  }

  render() {
    return (
      <BrowserRouter>

        <Route path='/' exact>
          <div>
            <Header query={this.updateQuery} />
            <FilterBox tags={this.updateFilter}
              sort={this.updateSort}
              range={this.updateRange}
              nbHits={this.state.nbHits}
              nbTime={this.state.nbTime} />
            <NewsBox news={this.state.news} loading={this.state.loading} />
            <Pagination page={this.updatePage} totalPage={this.state.totalPage} />
          </div>
        </Route>

        <Route path='/setting' exact>
          <Setting />
        </Route>

      </BrowserRouter>
    )
  }
}

export default App;
