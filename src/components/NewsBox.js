import React from 'react'
import News from './News'

function NewsBox(props) {

    let errMsg = () => {
        if (props.news.length === 0 && props.loading === false) {
            return <h1 style={{ textAlign: 'center' }}>No News Found</h1>
        }
        if (props.news.length === 0 && props.loading === true) {
            return <h1 style={{ textAlign: 'center' }}><span className='loader'></span>Loading</h1>
        }
    }

    return (
        <div className='news-box'>
            {errMsg()}
            {props.news.filter(news => (news.title || news.comment_text)).map((news,index) => {
                return <News key={index} news={news} />
            })}
        </div>
    )
}

export default NewsBox
