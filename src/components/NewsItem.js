import React, { Component } from "react";

export default class NewsItem extends Component {
  
  render() {
    let {title,description,urlImage,urlNews,author,date}=this.props
    return (
      <>    
            <div className="card" style={{ width: "18rem" }}>
              <img src={(!urlImage)?'https://images.moneycontrol.com/static-mcnews/2020/11/Aviation-770x433.jpg':urlImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{title.slice(0,30)}...</h5>
                <p className="card-text">{description!==null?description.slice(0,90):''}...</p>
                <p className="card-text"><small className="text-muted">By {!author?'unknown':author} {new Date(date).toGMTString()}</small></p>
                <a href={urlNews}  target="_blank" className="btn btn-sm btn-primary">
                  Read full news 
                </a>
                <h4></h4>
              </div>
            </div>
           
            </>

    );
  }
}
