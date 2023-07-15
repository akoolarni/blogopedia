import React from 'react'
import Navbar from '../components/Navbar'
import Blogs from '../components/Blogs'
import Foot from '../components/Foot'

const HomePage = ({blogs}) => {
 
 

  return (
    <div>
        <Navbar />
        <Blogs blogs={blogs}/>
        <Foot />
    </div>
  )
}

export default HomePage