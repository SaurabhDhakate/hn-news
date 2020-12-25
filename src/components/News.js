import React, { Component } from 'react'

export class News extends Component {
    render() {
        let url = this.props.news.url
        const renderUrl = () => {
            if (url) {
                return (
                    <h5 className='news-url'><a href={url}>{url}</a></h5>
                )
            }
        }
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
                <h6>{this.props.news.points} | {this.props.news.author} | {this.props.news.num_comments} comments</h6><br></br>
                {renderStory()}
                {renderComment()}
            </div>
        )
    }
}

export default News
