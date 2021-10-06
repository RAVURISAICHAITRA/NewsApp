import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let {title,description , imageUrl,newsUrl} = this.props;
        return (
            <div className="my-3">
                <div className="card" style = {{width : "18rem"}}>
                    <img src={!imageUrl ? 'https://images.hindustantimes.com/img/2021/10/05/1600x900/BREAKING_NEWS_1633476699120_1633476704192.jpg': imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                        <a href={newsUrl} className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
