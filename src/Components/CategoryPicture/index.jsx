import React from 'react'
import CategoryItem from '../CategoryItem'

const index = () => {
  return (
    <div className="flex-category">
      <CategoryItem 
        imgUrl="img/bmw_avtomobil_bamper_191131_240x320.jpg"
        link="" 
        title="Car picture" 
        count="10 picture"/>
      <CategoryItem 
        imgUrl="img/bmw_avtomobil_bamper_191131_240x320.jpg"
        link="" 
        title="Design picture" 
        count="7 picture"/>
      <CategoryItem 
        imgUrl="img/bmw_avtomobil_bamper_191131_240x320.jpg"
        link="" 
        title="Other picture" 
        count="9 picture"/>
    </div>
  )
}

export default index
