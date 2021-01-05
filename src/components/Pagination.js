import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Pagination(props) {
    let totalPage = useSelector(state => state.totalPage)
    const dispatch = useDispatch()
    let createoptions = (n) => {
        let options = []
        for (let i = 0; i < n; i++) {
            options.push(<option key={i}>{i + 1}</option>)
        }
        return options
    }
    let pagination = () => {
        if (totalPage) {
            return (
                <div style={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'center',
                    margin: '10px 0'
                }}>
                    <label htmlFor='page' style={{ marginRight: '10px' }}>Page</label>
                    <select name="page" id="page" onChange={event => {
                        dispatch({
                            payload: event.target.value,
                            type: 'update/page'
                        })
                    }}>
                        {createoptions(totalPage).map(opt => opt)}
                    </select>
                </div>
            )
        }
    }
    return (<div>{pagination()}</div>)

}


export default Pagination
