import React from 'react'

function Pagination(props) {
    let createoptions = (n) => {
        let options = []
        for (let i = 0; i < n; i++) {
            options.push(<option key={i}>{i + 1}</option>)
        }
        return options
    }
    let pagination = () => {
        if (props.totalPage) {
            return (
                <div style={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'center',
                    margin: '10px 0'
                }}>
                    <label htmlFor='page' style={{ marginRight: '10px' }}>Page</label>
                    <select name="page" id="page" onChange={event => props.page(event.target.value)}>
                        {createoptions(props.totalPage).map(opt => opt)}
                    </select>
                </div>
            )
        }
    }
    return (<div>{pagination()}</div>)

}


export default Pagination
