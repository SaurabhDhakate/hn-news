import './App.css';
import React, { Component } from 'react'
import Header from './components/Header';
import NewsBox from './components/NewsBox';
import FilterBox from './components/FilterBox';

export class App extends Component {
  constructor(props) {
    super(props)
    this.updateFilter = this.updateFilter.bind(this)
    this.updateQuery = this.updateQuery.bind(this)
    this.updateSort = this.updateSort.bind(this)
    this.state = {
      news: [],
      sort: 'search',
      tags: '',
      query: ''
    }
  }

  updateFilter(tag) {
    this.setState({
      tags: tag,
    })
    this.updateNews(tag, this.state.query,this.state.sort)
  }

  updateQuery(query) {
    this.setState({
      query: query,
    })
    this.updateNews(this.state.tags, query,this.state.sort)
  }

  updateSort(sort){
    this.setState({
      sort:sort
    })
    this.updateNews(this.state.tags, this.state.query,sort)
  }

  updateNews(tag, query,sort) {
    fetch(`https://hn.algolia.com/api/v1/${sort}?query=${query}&tags=${tag}`)
      .then(data => data.json())
      .then(data => {
        console.log(data)
        this.setState({
          news: data.hits
        })
      })
  }

  componentDidMount() {
    this.updateNews('', '','search')
  }

  render() {
    return (
      <div>
        <Header query={this.updateQuery} />
        <FilterBox tags={this.updateFilter} sort={this.updateSort}/>
        <NewsBox news={this.state.news} />
      </div>
    )
  }
}

export default App;
