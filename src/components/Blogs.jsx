import React from 'react'
import { Link } from 'react-router-dom'
{/* import { reacc } from '../assets' */}

const Blogs = ({blogs}) => {

    console.log("BlogC")
    console.log(blogs)

    
  
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

        },
        {
            "id":4,
            'title':'Blog 4',
            'desc':'DUMMY',
            'coverImg':'https://mir-s3-cdn-cf.behance.net/project_modules/fs/876c22100707927.5f0ec9851cb08.png',

            'authorname':'Arin Kulkarni',
            'authorimg':'https://mir-s3-cdn-cf.behance.net/project_modules/fs/876c22100707927.5f0ec9851cb08.png',
            'authordesc':'WEBD enthusiast'

        },
        {
            "id":5,
            'title':'GROWTH: The only constant in life',
            'desc':'IGrowth is the only constant in life. Whether its our physical bodies, our minds, or our careers, we are always growing and changing. This can be a scary thought for some people, but its important to embrace growth. Its what makes us who we are.There are many ways to grow. We can grow by learning new things, meeting new people, and trying new experiences. We can also grow by facing our fears and challenges head-on. When we step outside of our comfort zones, we open ourselves up to new possibilities.Growth doesnt always happen overnight. It takes time, effort, and dedication. But if were willing to put in the work, growth is a journey that can lead to great things.Here are a few tips for growing in life Set goals. What do you want to achieve? Having specific goals will give you something to work towards. Take action. Dont just sit around and wait for things to happen. Take steps to make your goals a reality. Be patient. Growth takes time. Dont get discouraged if you dont see results immediately.Surround yourself with positive people. The people you spend time with can have a big impact on your growth. Choose to surround yourself with people who are supportive and encouraging.Growth is a journey, not a destination. Its something that we should all strive for, no matter what stage of life were in. So dont be afraid to embrace growth. Its the only way to truly live life to the fullest.',
            'coverImg':'https://miro.medium.com/v2/resize:fit:720/format:webp/1*y6C4nSvy2Woe0m7bWEn4BA.png',
           
            'authorname':'Raunak Shah',
            'authorimg':'https://miro.medium.com/v2/resize:fit:720/format:webp/1*y6C4nSvy2Woe0m7bWEn4BA.png',
            'authordesc':'student-IITB'
        
        },

        {
            "id":6,
            'title':'Internet:BOON or BAIN',
            'desc':'The internet is a powerful tool that has the potential to be both a boon and a bane. On the one hand, it can be used for education, communication, and entertainment. It can also help us to connect with people from all over the world and learn about different cultures.On the other hand, the internet can also be a source of misinformation, addiction, and cyberbullying. It can also be used to spread hate speech and violence.Ultimately, the internet is a tool that can be used for good or bad. It is up to us to decide how we use it.Here are some tips for using the internet responsibly:Be critical of the information you find online. Not everything you read is true. Be mindful of your time online. Dont let it consume your life.Be respectful of others online. Dont spread hate speech or cyberbullying.The internet is a powerful tool, but it is only as good as the people who use it.',
            'coverImg':'https://miro.medium.com/v2/resize:fit:720/format:webp/1*y6C4nSvy2Woe0m7bWEn4BA.png',
           
            'authorname':'Atharva Toshniwal',
            'authorimg':'https://miro.medium.com/v2/resize:fit:720/format:webp/1*y6C4nSvy2Woe0m7bWEn4BA.png',
            'authordesc':'student-Bits Pilani'
        
        }

    ]
    
    return (
    <div className='w-full bg-[#127380] py-[50px]'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='grid lg-grid-cols-3 gap-8 px-4 text-black'>
                
                
                {blogs.data.map((blog)=>
                <Link key={blog.id} to={`/blog/${blog.id}`}>
                <div className='bg-white rounded-xl overflow-hidden drop-shadow-md hover:bg-[rgb(193,191,201)] duration-500'>
                    <img className='h-56 w-full object-cover opacity-1' src={`http://localhost:1337/uploads/blll_8d6dab5737.jpg`} />

                    <div className='p-8'>
                        <h3 className='font-bold text-2x1 my-1 text-[#223f8f]'>{blog.attributes.blogTitle}</h3>
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



