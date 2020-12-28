import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <header className="header">
                <a href='./'>
                    <img src="https://hn.algolia.com/packs/media/images/logo-hn-search-a822432b.png" height="85%" alt='' ></img>
                </a>
                <div><h3>Search </h3><h3>Hacker News</h3></div>
                <div className="searchBox">
                    <div><img src="https://www.flaticon.com/svg/static/icons/svg/49/49116.svg" height="20px" alt=''></img></div>
                    <input type="text" placeholder='Search stories by title, url or author' onChange={event => (this.props.query(event.target.value))}></input>
                    <div className='searchBy'>Search by <img src='https://hn.algolia.com/packs/media/images/logo-algolia-blue-35c461b6.svg'></img></div>
                </div>
                <a href='./setting' style={{
                    marginLeft: 'auto',
                    textDecoration: 'none',
                    color: 'black',
                    height: '50%'
                }}>
                    <div className='setting' style={{ height: '100%' }}>
                        <img src='https://www.flaticon.com/svg/static/icons/svg/2099/2099058.svg' height='20px' alt='' ></img>
                    </div>
                </a>
            </header>
        )
    }
}

export default Header
