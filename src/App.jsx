import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'

const App = () => {

  const[sidebar,setSidebar]=useState(true);



  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} />}/>
        <Route path='/video/:categoryId/:videoId' element={<Video />}/>{/*by using useParams() we are able to extract parameters of URL
        such as videoId,for this to work URL path should be properly written with USE OF ':' BEFORE EACH PARAMETER
        and exact same words as in the URL path should be used in useParams to get the parameter of URL, here these parameters are extracted
        from URL to know which video did the user click to see and it is shown after the videoId is extracted from the url */}
      </Routes>
    </div>
  )
}

export default App
