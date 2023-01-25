import './App.css';
import React,{Component} from 'react';
import Navbar from "./components/Navbar.js"
import News from "./components/News.js"
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";
export default class App extends Component{
  pageSize=10;
  // apikey=process.env.NEWS_API_KEY
  state={
    progress:0
  }
  setProgressState=(progress)=>{
    this.setState({progress:progress})
  }
  render(){
    return(
      <>
      <div>
        
      </div>
      <Router>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
       
      />
      
      <Navbar/>
        <Routes>
        <Route   path="/" exact  element={<News setProgressBar={this.setProgressState}  key="general" pageSize={this.pageSize} category="general"/>}/>
        <Route    exact  path="/entertainment" element={<News setProgressBar={this.setProgressState} key="enytertainment" pageSize={this.pageSize}category="entertainment"/>}/>
        <Route  path="/business" exact element={<News setProgressBar={this.setProgressState} key="business" pageSize={this.pageSize} category="business"/>}/>
        <Route  path="/health" exact  element={<News setProgressBar={this.setProgressState} key="genhealtheral" pageSize={this.pageSize} category="health"/>}/>
        <Route path="/science" exact element={<News setProgressBar={this.setProgressState} key="sciences" pageSize={this.pageSize} category="science"/>}/>
        <Route  path="/sports" exact element={<News setProgressBar={this.setProgressState} key="sports" pageSize={this.pageSize} category="sports"/>}/>
        <Route path="/technology" exact element={<News setProgressBar={this.setProgressState}  key="technology" pageSize={this.pageSize} category="technology"/>}/>

        </Routes>

        </Router>
      </>
    )
  }
}