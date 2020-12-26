import React, { Component } from 'react'
import News from './News'

export class NewsBox extends Component {

    render() {
        let errMsg = () =>{
            if(this.props.news.length === 0 && this.props.loading === false){
                return(<h1 style={{textAlign:'center'}}>No News Found</h1>)
            }
            if(this.props.news.length === 0 && this.props.loading === true){
                return(<h1 style={{textAlign:'center'}}>Loading ... </h1>)
            }
        }
        return (
            <div className='news-box'>
                {errMsg()}
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
