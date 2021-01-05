import React from 'react'
import commaNumber from "comma-number";
import { useDispatch, useSelector } from 'react-redux';


function FilterBox(props) {
    const dispatch = useDispatch()
    let nbHits = useSelector(state=>state.nbHits)
    let nbTime = useSelector(state=>state.nbTime)
    return (
        <div className='filter-box'>
            <label htmlFor='search'>Search</label>
            <select name="search" id="search" onChange={event => {
                dispatch({
                    payload: event.target.value,
                    type: 'update/tags'
                })
            }}>
                <option value="">All</option>
                <option value="story">Stories</option>
                <option value="comment">Comments</option>
            </select>
            <label htmlFor='by'> By</label>
            <select name="by" id="by" onChange={event => {
                dispatch({
                    payload: event.target.value,
                    type: 'update/sort'
                })
            }}>
                <option value="search">Popularity</option>
                <option value="search_by_date">Date</option>
            </select>
            <label htmlFor='for'> for</label>
            <select name="for" id="for" onChange={event => {
                dispatch({
                    payload: event.target.value,
                    type: 'update/range'
                })
            }}>
                <option value="">All time</option>
                <option value={'created_at_i%3E' + 24 * 60 * 60}>Last 24 hr</option>
                <option value={'created_at_i%3E' + 7 * 24 * 60 * 60}>Past Week</option>
                <option value={'created_at_i%3E' + 30 * 24 * 60 * 60}>Past Month</option>
                <option value={'created_at_i%3E' + 365 * 24 * 60 * 60}>Past Year</option>
                <option value="">Custom Range</option>
            </select>
            <h6 style={{ float: 'right' }}>{commaNumber(nbHits)} results {nbTime / 1000} secs</h6>
        </div>
    )
}



export default FilterBox
