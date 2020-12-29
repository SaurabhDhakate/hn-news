import React from 'react'
import date from 'datetime-converter-nodejs'
import hd from 'humanize-duration'

function News(props) {

    // Duration of News
    let seconds = date.timeDiff(new Date(), date.dateString(props.news.created_at));
    let time = hd(1000 * seconds).split(',')[0]

    // Url of news
    let url = props.news.url
    const renderUrl = () => {
        if (url) {
            return (
                <h5 className='news-url'><a href={url}>{url}</a></h5>
            )
        }
    }

    // Story of News
    let story = props.news.story_text
    const renderStory = () => {
        if (story != null) {
            return (
                <div className='news-story'
                    dangerouslySetInnerHTML={{
                        __html: story
                    }}></div>
            )
        }
    }

    // Comments on News
    let comment = props.news.comment_text
    const renderComment = () => {
        return (
            <div className='news-story'
                dangerouslySetInnerHTML={{
                    __html: comment
                }}></div>
        )

    }
    return (
        <div className='news'>
            <div className='news-title'>
                <h5>{props.news.title}</h5>
                {renderUrl()}</div>
            <br></br>
            <h6>{props.news.points} | {props.news.author} | {props.news.num_comments} comments | {time} ago</h6><br></br>
            {renderStory()}
            {renderComment()}
        </div>
    )
}


export default News
