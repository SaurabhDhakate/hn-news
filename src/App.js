import './App.css';
import React, { Component } from 'react'
import Header from './components/Header';
import NewsBox from './components/NewsBox';
import FilterBox from './components/FilterBox';
import Pagination from './components/Pagination';

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
      nbTime:null,
      sort: 'search',
      tags: '',
      query: '',
      range: '',
      page: 0
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
    fetch(`https://hn.algolia.com/api/v1/${sort}?query=${query}&tags=${tag}&numericFilters=${range}&page=${page}`)
      .then(data => data.json())
      .then(data => {
        console.log(data, `https://hn.algolia.com/api/v1/${sort}?query=${query}&tags=${tag}&numericFilters=${range}&page=${page}`)
        this.setState({
          news: data.hits,
          nbHits: data.nbHits,
          nbTime:data.processingTimeMS
        })
      })
  }

  componentDidMount() {
    this.updateNews('', '', 'search', '', 0)
  }

  render() {
    return (
      <div>
        <Header query={this.updateQuery} />
        <FilterBox tags={this.updateFilter}
          sort={this.updateSort}
          range={this.updateRange}
          nbHits={this.state.nbHits}
          nbTime={this.state.nbTime} />
        <NewsBox news={this.state.news} />
        <Pagination page={this.updatePage} />
      </div>
    )
  }
}

export default App;
