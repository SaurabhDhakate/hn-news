import React, { Component } from 'react'
import date from 'datetime-converter-nodejs'
import hd from 'humanize-duration'

export class News extends Component {
    render() {
        // Duration of News
        let seconds = date.timeDiff(new Date(),date.dateString(this.props.news.created_at));
        let time = hd(1000*seconds).split(',')[0]

        // Url of news
        let url = this.props.news.url
        const renderUrl = () => {
            if (url) {
                return (
                    <h5 className='news-url'><a href={url}>{url}</a></h5>
                )
            }
        }

        // Story of News
        let story = this.props.news.story_text
        const renderStory = () => {
            if (story != null) {
                return (
                    <div className='news-story'
                        dangerouslySetInnerHTML={{
                            __html: this.props.news.story_text
                        }}></div>
                )
            }
        }

        // Comments on News
        let comment = this.props.news.comment_text
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
                    <h5>{this.props.news.title}</h5>
                    {renderUrl()}</div>
                <br></br>
                <h6>{this.props.news.points} | {this.props.news.author} | {this.props.news.num_comments} comments | {time} ago</h6><br></br>
                {renderStory()}
                {renderComment()}
            </div>
        )
    }
}

export default News
