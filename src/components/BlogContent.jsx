import React from 'react'
import { useParams } from 'react-router-dom'

const BlogContent = () => {
  //  console.log("Blogs Content Page")
   // console.log(blogs)
    const {id}=useParams()
    
   // let blog={}
    //if(blog){
    //    let arr = blogs.data.filter(blog=> blog.id == id)
  //      blog=arr[0]
  //  } 
  //  else{
  //      blog={}
  //  }
   // blog = blog[0]  
 //   console.log("Blog Object")
  //  console.log(blog)
       
    

  const blogs=[
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

  let blog = blogs.filter(blog=> blog.id == id)
 blog = blog[0]   
   

  return (
    
   <div className='w-full pb-10 bg-[#f9f9f9] '>
        <div className='max-w-[1240px] mx-auto'>
            <div className='grid lg:grid-cols-3  sm:grid-cols-3 ss:grid-cols-1 gap-x-8 gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black'>
                <div className='col-span-2 gap-x-8 gap-y-8 '>
                    <img className='h-56 w-full object-cover' src={blog.coverImg}/>
                    <h1 className='font-bold text-2x1 my-1 pt-5'>{blog.title}</h1> 
                    <div className='pt-5'>
                        <p className='mx-auto'>
                            {blog.desc}
                        </p>
                        <p>
                         {blog.content}
                        </p>

                    </div>
                </div>
                <div className='items-center w-full bg-white rounded-xl drop-shadow-md py-5 max-h-[250px]'>
                <div>
                        <img className='p-2 w-32 h-32 rounded-full mx-auto object-cover' src={blog.authorimg} />
                        <h1 className='font-bold text-2xl text-center text-gray-900 pt-3'>{blog.authorname}</h1>
                        <p className='text-center text-gray-900 font-medium'>{blog.authordesc}</p>
                    </div>


                </div>

          </div>

       </div> 
        </div> 
  )
}

export default BlogContent