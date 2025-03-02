import React, { useState } from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'
//sidebar is a prop sent from home.jsx which tells if sidebar is expanded or not
const Home = ({sidebar}) => {

  const [category,setCategory]=useState(0);
  return (
    <>
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/>{/*category is a var for videos category in home which can be changed by sidebar */}
      <div className={`container ${sidebar?"":'large-container'}`}>
        <Feed category={category}/>
      </div>
      
    </>
  )
}

export default Home
