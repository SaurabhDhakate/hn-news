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
    this.updateSearch = this.updateSearch.bind(this)
    this.updateRange = this.updateRange.bind(this)
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

    this.timerId = undefined
  }

  updateSearch(key, value) {
    this.setState({
      [key]: value,
    }, () => { this.updateNews() })
  }

  updateRange(range) {
    this.setState({
      range: range,
      sort: 'search_by_date'
    }, () => {
      this.updateNews()
      this.setState({
        sort: 'search'
      })
    })
  }

  makeApiCall = () => {

    let sort = this.state.sort
    let query = this.state.query
    let tag = this.state.tags
    let range = this.state.range
    let page = this.state.page

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
      .catch(() => {
        this.setState({
          news: [],
          totalPage: false,
          loading: false
        })
      })
  }

  debouncerFunction(func, delay) {
    clearTimeout(this.timerId)
    this.timerId = setTimeout(func, delay)
  }

  updateNews() {
    this.setState({ loading: true }, () => {
      this.debouncerFunction(this.makeApiCall, 200)
    })
  }

  componentDidMount() { this.updateNews() }

  render() {
    return (
      <BrowserRouter>

        <Route path='/' exact>
          <div>
            <Header query={this.updateSearch} />
            <FilterBox tags={this.updateSearch}
              sort={this.updateSearch}
              range={this.updateRange}
              nbHits={this.state.nbHits}
              nbTime={this.state.nbTime} />
            <NewsBox news={this.state.news} loading={this.state.loading} />
            <Pagination page={this.updateSearch} totalPage={this.state.totalPage} />
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
