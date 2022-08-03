import React from 'react'
import CategoryNotes from '../Components/CategoryNotes'
import CategoryPicture from '../Components/CategoryPicture'
import MainLink from '../Components/MainLink'

const Home = () => {
  return (
    <div className="container">
        <MainLink url="/allnotes" title="All Notes" count="Total 115 notes"/>
        <CategoryNotes />
        <MainLink url="/" title="All saved pictures" count="Total 15 pictures"/>
        <CategoryPicture />
    </div>
  )
}

export default Home
