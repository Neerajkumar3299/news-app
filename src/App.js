import { useState } from 'react';
import './App.css';
import React from 'react';
import Navbar from "./components/Navbar.js"
import News from "./components/News.js"
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";
function App(){
  const [pageSize,setPageSize]=useState(10);
  // apikey=process.env.NEWS_API_KEY
  const [state,setState]=useState({progress:0})

  const setProgressState=(progress)=>{
    setState({progress})
  }
    return(
      <>
      <div>
        
      </div>
      <Router>
      <LoadingBar
        color='#f11946'
        progress={state.progress}
      />
      
      <Navbar/>
        <Routes>
        <Route   path="/" exact  element={<News setProgressBar={setProgressState}  key="general" pageSize={pageSize} category="general"/>}/>
        <Route    exact  path="/entertainment" element={<News setProgressBar={setProgressState} key="enytertainment" pageSize={pageSize}category="entertainment"/>}/>
        <Route  path="/business" exact element={<News setProgressBar={setProgressState} key="business" pageSize={pageSize} category="business"/>}/>
        <Route  path="/health" exact  element={<News setProgressBar={setProgressState} key="genhealtheral" pageSize={pageSize} category="health"/>}/>
        <Route path="/science" exact element={<News setProgressBar={setProgressState} key="sciences" pageSize={pageSize} category="science"/>}/>
        <Route  path="/sports" exact element={<News setProgressBar={setProgressState} key="sports" pageSize={pageSize} category="sports"/>}/>
        <Route path="/technology" exact element={<News setProgressBar={setProgressState}  key="technology" pageSize={pageSize} category="technology"/>}/>

        </Routes>

        </Router>
      </>
    )
}
export default App