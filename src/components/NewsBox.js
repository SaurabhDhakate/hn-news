import React, { Component } from 'react'
import News from './News'

export class NewsBox extends Component {
    render() {
        return (
            <div className='news-box'>
                {this.props.news.map(news => {
                    if (news.title) {
                        return (
                            <News key={news.id} news={news} />
                        )
                    }
                    if (news.comment_text){
                        return (
                            <News key={news.id} news={news} />
                        )
                    }
                })}
            </div>
        )
    }
}

export default NewsBox
