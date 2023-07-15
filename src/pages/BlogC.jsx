import React from 'react'
import Navbar from '../components/Navbar'
import BlogContent from '../components/BlogContent'
import Foot from '../components/Foot'

const BlogC = ({blogs}) => {


  return (
    <div>
        <Navbar />
        <BlogContent blogs={blogs} />
        <Foot />
    </div>
  )
}

export default BlogC