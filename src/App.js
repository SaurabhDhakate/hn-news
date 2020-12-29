import React, { Component } from 'react'
import Header from './components/Header';
import NewsBox from './components/NewsBox';
import FilterBox from './components/FilterBox';
import Pagination from './components/Pagination';
import { BrowserRouter, Route } from "react-router-dom";
import Setting from './components/Setting';
import axios from 'axios';
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

  updateFilter(tags) {
    this.setState({
      tags: tags,
    }, () => this.updateNews())
  }

  updateQuery(query) {
    this.setState({
      query: query,
    })
  }

  updateSort(sort) {
    this.setState({
      sort: sort
    }, () => this.updateNews())
  }

  updatePage(page) {
    this.setState({
      page: page
    }, () => this.updateNews())
  }

  updateRange(range) {
    this.setState({
      range: range,
      sort: 'search_by_date'
    }, () => this.updateNews())
  }

  updateNews() {
    let sort = this.state.sort
    let query = this.state.query
    let tag = this.state.tags
    let range = this.state.range
    let page = this.state.page
    this.setState({ loading: true }, () => {
      axios.get(`https://hn.algolia.com/api/v1/${sort}?query=${query}&tags=${tag}&numericFilters=${range}&page=${page}`)
        .then(response => {
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
    })

  }
  componentDidMount() {
    this.updateNews()
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
