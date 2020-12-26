import React, { Component } from 'react'

export class Pagination extends Component {
    createoptions(n) {
        let options = []
        for (let i = 0; i < n; i++) {
            options.push(<option key={i}>{i}</option>)
        }
        return options
    }
    render() {
        let pagination = () => {
            if (this.props.totalPage) {
                return (
                    <div style={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'center',
                        margin: '10px 0'
                    }}>
                        <label for='page' style={{ marginRight: '10px' }}>Page</label>
                        <select name="page" id="page" onChange={event => this.props.page(event.target.value)}>
                            {this.createoptions(this.props.totalPage).map(opt => opt)}
                        </select>
                    </div>
                )
            }
        }
        return (<div>{pagination()}</div>)

    }
}

export default Pagination
