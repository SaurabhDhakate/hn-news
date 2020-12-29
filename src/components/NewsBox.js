import React from 'react'
import News from './News'

function NewsBox(props) {
    let errMsg = () => {
        if (props.news.length === 0 && props.loading === false) {
            return (<h1 style={{ textAlign: 'center' }}>No News Found</h1>)
        }
        if (props.news.length === 0 && props.loading === true) {
            return (<h1 style={{ textAlign: 'center' }}><span className='loader'></span>Loading</h1>)
        }
    }
    return (
        <div className='news-box'>
            {errMsg()}
            {props.news.map(news => {
                if (news.title) {
                    return (
                        <News key={news.id} news={news} />
                    )
                }
                if (news.comment_text) {
                    return (
                        <News key={news.id} news={news} />
                    )
                }

            })}
        </div>
    )
}

export default NewsBox
