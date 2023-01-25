import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner"
// import InfiniteScroll from 'react-infinite-scroller';

export default class News extends Component {
  
  constructor() {
    super();
    // console.log("This is constructor..")
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults:0,


    };
  }
  async updateNews(){
    this.props.setProgressBar(10)
    let url =`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=e64161be81ff46aaa4921987c601c57a&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    console.log(url)
    let data = await fetch(url);
    this.props.setProgressBar(30)
      this.setState({
      loading:true
    })
   let parsedData = await data.json();
   this.props.setProgressBar(50)
      // console.log(parsedData)
      this.setState({
        articles: parsedData.articles,
        totalResults:parsedData.totalResults,
        loading:false
      });

      this.props.setProgressBar(100)
  }


  async componentDidMount() {
    this.updateNews()
    console.log(this.state.articles)
  }

  render() {
    // console.log("This is class..")

    // Method to handle for click on next button
    let handleNext = async () => {
      if(!(this.state.page+1 > (Math.ceil(this.state.totalResults/this.props.pageSize)))){
        this.setState({
          page:this.state.page+1
        })
      this.updateNews()
    };
    }

    //method for click on previous button
    let handlePrevious = async () => {
      this.setState({
        page:this.state.page-1
      })
      this.updateNews()

    
    };


  //   let loadFunction=async ()=>{
      
  //     let url =`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=e64161be81ff46aaa4921987c601c57a&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  //   let data = await fetch(url);
  //     this.setState({
  //     loading:true
  //   })
  //  let parsedData = await data.json();
        
  //     // console.log(parsedData)
  //     this.setState({
  //       articles: this.state.articles.concat(parsedData.articles),
  //       totalResults:parsedData.totalResults,
  //       loading:false
  //     });
  //   }


    return (
      <>
        <div
          className="container my-3 text-center"  >
            <h1 style={{margin:"40px 0px"}}>MyDailyNews - find top headlines..</h1>
              { this.state.loading && <Spinner/>}

              
              {/* <InfiniteScroll
                  key={0}
                  pageStart={this.state.page}
                  loadMore={loadFunction}
                  hasMore={this.state.articles.length != this.totalResults}
                  loader={<Spinner/>}
              > */}

                {/* // <-- This is the content you want to load */}
                  { <div className="row">
            {this.state.articles.map((element) => {
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
          
              {/* </InfiniteScroll> */}
{/* 
          <div className="row">
            {this.state.articles.map((element) => {
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
          </div> */}
        </div>




        {/* //-----------------------------------THIS IS FOR PREVIOUS AND NEXT FUNCTIONALITY ------------------------------- */}
        <div className="container d-flex justify-content-between" style={{marginBottom:"20px"}}>
          <button disabled={this.state.page===1} className="btn btn-dark btn-sm" type="button" onClick={handlePrevious} >
            &larr;Previous
          </button>
          <button disabled={this.state.page+1 > (Math.ceil(this.state.totalResults/this.props.pageSize))}
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
}
