import React from 'react'
import commaNumber from "comma-number";

function FilterBox(props) {
    return (
        <div className='filter-box'>
            <label htmlFor='search'>Search</label>
            <select name="search" id="search" onChange={event => props.tags(event.target.value)}>
                <option value="">All</option>
                <option value="story">Stories</option>
                <option value="comment">Comments</option>
            </select>
            <label htmlFor='by'> By</label>
            <select name="by" id="by" onChange={event => props.sort(event.target.value)}>
                <option value="search">Popularity</option>
                <option value="search_by_date">Date</option>
            </select>
            <label htmlFor='for'> for</label>
            <select name="for" id="for" onChange={event => props.range(event.target.value)}>
                <option value="">All time</option>
                <option value={'created_at_i%3E' + 24 * 60 * 60}>Last 24 hr</option>
                <option value={'created_at_i%3E' + 7 * 24 * 60 * 60}>Past Week</option>
                <option value={'created_at_i%3E' + 30 * 24 * 60 * 60}>Past Month</option>
                <option value={'created_at_i%3E' + 365 * 24 * 60 * 60}>Past Year</option>
                <option value="">Custom Range</option>
            </select>
            <h6 style={{ float: 'right' }}>{commaNumber(props.nbHits)} results {props.nbTime / 1000} secs</h6>
        </div>
    )
}

export default FilterBox
