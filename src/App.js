import './App.css';
import React,{Component} from 'react';
import Navbar from "./components/Navbar.js"
import News from "./components/News.js"
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";
export default class App extends Component{
  pageSize=10;
  render(){
    return(
      <>
      <div>
        
      </div>
      <Router>
      <Navbar/>
        <Routes>
        <Route   path="/" exact  element={<News key="general" pageSize={this.pageSize} category="general"/>}/>
        <Route    exact  path="/entertainment" element={<News key="enytertainment" pageSize={this.pageSize}category="entertainment"/>}/>
        <Route  path="/business" exact element={<News key="business" pageSize={this.pageSize} category="business"/>}/>
        <Route  path="/health" exact  element={<News key="genhealtheral" pageSize={this.pageSize} category="health"/>}/>
        <Route path="/science" exact element={<News key="sciences" pageSize={this.pageSize} category="science"/>}/>
        <Route  path="/sports" exact element={<News key="sports" pageSize={this.pageSize} category="sports"/>}/>
        <Route path="/technology" exact element={<News  key="technology" pageSize={this.pageSize} category="technology"/>}/>

        </Routes>

        </Router>
      </>
    )
  }
}