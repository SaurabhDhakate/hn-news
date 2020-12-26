import React, { Component } from 'react'

export class Pagination extends Component {
    createoptions(n) {
        let options = []
        for (let i = 0; i < n; i++) {
            options.push(<option>{i}</option>)
        }
        return options
    }
    render() {
        return (
            <div style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center'
            }}>
                <label for='page' style={{marginRight:'10px'}}>Page</label>
                <select name="page" id="page" onChange={event => this.props.page(event.target.value)}>
                    {this.createoptions(35).map(opt=>opt)}
                </select>
            </div>
        )
    }
}

export default Pagination
