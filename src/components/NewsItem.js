import React from 'react'

const NewsItem =(props)=> {

    
        let {title,description , imageUrl,newsUrl,source,author,date} =props;
        return (
            <div className="my-3">
                <div className="card" >
                    <div style={{display:'flex',
                justifyContent:'flex-end',
                Position : 'absolute',
                right:0}}>
                    <span className="badge rounded-pill bg-dark" >{source}</span>
                    </div>
                    <img src={!imageUrl ? 'https://images.hindustantimes.com/img/2021/10/05/1600x900/BREAKING_NEWS_1633476699120_1633476704192.jpg': imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">by {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
    
}

export default NewsItem
