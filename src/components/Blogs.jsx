import React from 'react'
import { Link } from 'react-router-dom'
{/* import { reacc } from '../assets' */}

const Blogs = ({blogs}) => {

    
  
    const blogs1=[
        {
            "id":1,
            'title':'Blog 1',
            'desc':'DUMMY',
            'coverImg':'https://mir-s3-cdn-cf.behance.net/project_modules/fs/876c22100707927.5f0ec9851cb08.png',
           
            'authorname':'Arin Kulkarni',
            'authorimg':'https://mir-s3-cdn-cf.behance.net/project_modules/fs/876c22100707927.5f0ec9851cb08.png',
            'authordesc':'WEBD enthusiast'
        
        },
        {
            "id":2,
            'title':'Blog 2',
            'desc':'DUMMY',
            'coverImg':'https://mir-s3-cdn-cf.behance.net/project_modules/fs/876c22100707927.5f0ec9851cb08.png',

            'authorname':'Arin Kulkarni',
            'authorimg':'https://mir-s3-cdn-cf.behance.net/project_modules/fs/876c22100707927.5f0ec9851cb08.png',
            'authordesc':'WEBD enthusiast'
        
            
        },
        {
            "id":3,
            'title':'Blog 3',
            'desc':'DUMMY',
            'coverImg':'https://mir-s3-cdn-cf.behance.net/project_modules/fs/876c22100707927.5f0ec9851cb08.png',

            'authorname':'Arin Kulkarni',
            'authorimg':'https://mir-s3-cdn-cf.behance.net/project_modules/fs/876c22100707927.5f0ec9851cb08.png',
            'authordesc':'WEBD enthusiast'

        }


    ]
    
    return (
    <div className='w-full bg-[#127380] py-[50px]'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='grid lg-grid-cols-3 gap-8 px-4 text-black'>
                
                
                {blogs.data.map((blog)=>
                <Link key={blog.id} to={`/blog/${blog.id}`}>
                <div className='bg-white rounded-xl overflow-hidden drop-shadow-md'>
                    <img className='h-56 w-full object-cover' src={blog.coverImg} />

                    <div className='p-8'>
                        <h3 className='font-bold text-2x1 my-1'>{blog.attributes.blogTitle}</h3>
                        <p className='text-gray-600 text-x1'>{blog.attributes.blogDesc}</p>
                    </div>

                </div>
                </Link>
       
       
            )}
            
            
            </div>

        </div>


    </div>
  )
}

export default Blogs



