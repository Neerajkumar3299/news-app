import React from "react";
import { useState,useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner"
// import InfiniteScroll from 'react-infinite-scroller';
function News(props){
  const api_key=process.env.REACT_APP_NEWS_API_KEY
  const [newsState,setNewsState]=useState({
      articles: [],
      loading: true,
      page: 1,
      totalResults:0
    })
  
  const updateNews=async()=>{
    props.setProgressBar(10)
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${newsState.page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    props.setProgressBar(30)
      setNewsState({...newsState,loading:true})
   let parsedData = await data.json();
   props.setProgressBar(50)
      setNewsState({...newsState,
        articles: parsedData.articles,
        totalResults:parsedData.totalResults,
        loading:false
      });
      props.setProgressBar(100)
  }
  let handleNext = () => {
    if(!(newsState.page+1 > (Math.ceil(newsState.totalResults/props.pageSize)))){
      setNewsState({...newsState,page:newsState.page+1})
      console.log(newsState)
      updateNews()
    };
  }
  //method for click on previous button
  let handlePrevious =() => {
    setNewsState({
      ...newsState,
      page:newsState.page-1
    })
    updateNews()
  };
  useEffect(()=>{
    updateNews();
  },[])
    return (
      <>
        <div
          className="container my-3 text-center"  >
            <h1 style={{margin:"40px 0px"}}>MyDailyNews - find top headlines..</h1>
              { newsState.loading && <Spinner/>}

            { <div className="row">
            {newsState.articles && newsState.articles.map((element) => {
              return (

                <div className="col-md-4 my-3" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    urlImage={element.urlToImage}
                    urlNews={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>}    
        </div>
        {/* //-----------------------------------THIS IS FOR PREVIOUS AND NEXT FUNCTIONALITY ------------------------------- */}
        <div className="container d-flex justify-content-between" style={{marginBottom:"20px"}}>
          <button disabled={newsState.page===1} className="btn btn-dark btn-sm" type="button" onClick={handlePrevious} >
            &larr;Previous
          </button>
          <button disabled={newsState.page+1 > (Math.ceil(newsState.totalResults/props.pageSize))}
            className="btn btn-dark btn-sm"
            onClick={handleNext}
            type="button"
          >
            Next &rarr;
          </button>
        </div>
      </>
    );
}
export default News
