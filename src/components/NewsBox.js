import React from 'react'
import News from './News'
import {  useSelector } from 'react-redux';

function NewsBox(props) {
    let news = useSelector(state => state.news)
    let query = useSelector(state=>state.query)

    let errMsg = () => {
        if (news.length === 0 && query === '') {
            return <h1 style={{ textAlign: 'center' }}><span className='loader'></span>Loading</h1>
        }
        
        if (news.length === 0) {
            return <h1 style={{ textAlign: 'center' }}>No News Found for '{query}'</h1>
        }

    }

    return (
        <div className='news-box'>
            {errMsg()}
            {(news.filter(news => (news.title || news.comment_text)).map((news, index) =>
                <News key={index} news={news} />
            ))}
        </div>
    )
}

export default NewsBox
