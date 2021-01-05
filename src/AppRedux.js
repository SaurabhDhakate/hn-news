import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from "react-router-dom"
import Header from './components/Header'
import NewsBox from './components/NewsBox'
import FilterBox from './components/FilterBox'
import Pagination from './components/Pagination'
import Setting from './components/Setting'
import './App.css'


export class AppRedux extends Component {

    constructor() {
        super()
        this.timerId = undefined
    }

    makeApiCall = () => {

        let sort = this.props.state.sort
        let query = this.props.state.query
        let tag = this.props.state.tags
        let range = this.props.state.range
        let page = this.props.state.page

        fetch(`https://hn.algolia.com/api/v1/${sort}?query=${query}&tags=${tag}&numericFilters=${range}&page=${page}`)
            .then(response => response.json())
            .then(data => {
                this.props.updateNews(data)
            }).catch(()=>{
                this.props.updateNews({
                    hits:[],
                    processingTimeMS:null
                })
            })
    }

    debouncerFunction(func, delay) {
        clearTimeout(this.timerId)
        this.timerId = setTimeout(func, delay)
    }

    updateNews() {
        this.debouncerFunction(this.makeApiCall, 200)
    }

    componentDidMount() { this.makeApiCall() }

    shouldComponentUpdate(nextProps) {

        let oldSearchParams = `${this.props.state.sort + this.props.state.tags + this.props.state.range + this.props.state.query + this.props.state.page}`
        let newSearchParams = `${nextProps.state.sort + nextProps.state.tags + nextProps.state.range + nextProps.state.query + nextProps.state.page}`

        if (oldSearchParams === newSearchParams) {
            return false
        }
        else {
            return true
        }
    }
    componentDidUpdate() { this.updateNews() }

    render() {
        return (
            <div>
                <BrowserRouter>

                    <Route path='/' exact>
                        <Header />
                        <FilterBox />
                        <NewsBox />
                        <Pagination />
                    </Route>

                    <Route path='/setting' exact>
                        <Setting />
                    </Route>

                </BrowserRouter>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return ({
        state: state
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        updateNews: (data) => {
            dispatch(
                {
                    type: 'update/nbHits',
                    payload: data.nbHits
                }
            )
            dispatch(
                {
                    type: 'update/news',
                    payload: data.hits
                }
            )
            dispatch(
                {
                    type: 'update/nbTime',
                    payload: data.processingTimeMS
                }
            )
            dispatch(
                {
                    type: 'update/totalPage',
                    payload: data.nbPages
                }
            )
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(AppRedux)