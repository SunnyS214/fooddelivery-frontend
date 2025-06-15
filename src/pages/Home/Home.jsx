import React, { useState } from 'react'
import './Home.css'
import Header from '../../component/header/Header'
import ExploreMenu from '../../component/exploreMenu/ExploreMenu'
import FoodDisplay from '../../component/FoodDisplay/FoodDisplay'
import AppDownload from '../../component/AppDownload/AppDownload'


const Home = () => {
const [category, setcategory] = useState("All")

  return (
    
    <div>

     
      <Header/>
      <ExploreMenu category={category} setcategory={setcategory} />
      <FoodDisplay category={category} setcategory={setcategory} />
      <AppDownload/>
    </div>
  )
}

export default Home
