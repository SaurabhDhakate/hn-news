import React, { Component } from 'react'

export class FilterBox extends Component {
    render() {
        return (
            <div className='filter-box'>
                <label for='search'>Search</label>
                <select name="search" id="search" onChange={event => this.props.tags(event.target.value)}>
                    <option value="">All</option>
                    <option value="story">Stories</option>
                    <option value="comment">Comments</option>
                </select>
                <label for='by'> By</label>
                <select name="by" id="by" onChange={event => this.props.sort(event.target.value)}>
                    <option value="search">Popularity</option>
                    <option value="search_by_date">Date</option>
                </select>
                <label for='for'> for</label>
                <select name="for" id="for">
                    <option value="All time">All time</option>
                    <option value="Last 24 hr">Last 24 hr</option>
                    <option value="Past Week">Past Week</option>
                    <option value="Past Month">Past Month</option>
                    <option value="Past Year">Past Year</option>
                    <option value="Custom Range">Custom Range</option>
                </select>
            </div>
        )
    }
}

export default FilterBox
