import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Setting extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header className="header">
                    <Link to='./'>
                        <img src="https://hn.algolia.com/packs/media/images/logo-hn-search-a822432b.png" height="85%" alt='' ></img>
                    </Link>
                    <div><h3>Search </h3><h3>Hacker News</h3></div>

                    <Link to='./' style={{
                        marginLeft: 'auto',
                        textDecoration: 'none',
                        color: 'black',
                        height: '50%'
                    }}>
                        <div className='setting home' style={{ height: '100%' }}>
                            <img src='https://www.flaticon.com/svg/static/icons/svg/271/271220.svg' height='10px' alt='' ></img>
                        </div>
                    </Link>
                </header>
                <div>
                    <h3 style={{ marginLeft: '10px', marginTop:'10px'}}>Settings</h3>
                    <h5 style={{ marginLeft: '10px', marginBottom: '0px' }}>Display Options</h5>
                    <hr />
                    <div className="setting-row">
                        <label htmlFor="style">Style</label>
                        <div className="settings-input">
                            <select id="style">
                                <option value="all">Default</option>
                                <option value="story">Experimental</option>
                            </select>
                        </div>
                    </div>
                    <div className="setting-row">
                        <label htmlFor="hits">Hits Per Page</label>
                        <div className="settings-input">
                            <select id="hits">
                                <option value="all">20</option>
                                <option value="story">30</option>
                                <option value="comment">50</option>
                            </select>
                        </div>
                    </div>
                    <h5 style={{ marginLeft: '10px', marginBottom: '0px' }}>Ranking Options</h5>
                    <hr />
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className="setting-row">
                            <label htmlFor="style">Default type</label>
                            <div className="settings-input">
                                <select id="style">
                                    <option value="all">All</option>
                                    <option value="story">Stories</option>
                                    <option value="comment">Comments</option>
                                </select>
                            </div>
                        </div>
                        <div className="setting-row">
                            <label htmlFor="style">Default type</label>
                            <div className="settings-input">
                                <select id="style">
                                    <option value="all">Most recent firtst</option>
                                    <option value="story">Most popular firtst</option>
                                </select>
                            </div>
                        </div>
                        <div className="setting-row">
                            <label htmlFor="style">Default Date Range</label>
                            <div className="settings-input">
                                <select id="style">
                                    <option value="all">Forever</option>
                                    <option value="story">Last Day</option>
                                    <option value="comment">Last week</option>
                                    <option value="comment">Last month</option>
                                    <option value="comment">Last year</option>
                                </select>
                            </div>
                        </div>
                        <div className="setting-row">
                            <label htmlFor="style">Use story text for search</label>
                            <div className="settings-input">
                                <input type="checkbox" name="" id="" />
                            </div>
                        </div>
                        <div className="setting-row">
                            <label htmlFor="style">Use the author's username for search</label>
                            <div className="settings-input">
                                <input type="checkbox" name="" id="" />
                            </div>
                        </div>
                        <div className="setting-row">
                            <label htmlFor="style">Typo-tolerance</label>
                            <div className="settings-input">
                                <input type="checkbox" name="" id="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{
                    width: '90%',
                    textAlign: 'end',
                    padding: '0 5%'
                }}>
                    <button style={{
                        padding: '10px',
                        backgroundColor: '#ff742b',
                        border: 'none',
                        color: 'white',
                        borderRadius: '5px',
                        outline: 'none'
                    }}>Apply</button>
                </div>
            </div>
        )
    }
}

export default Setting
