import React from 'react'
import { useParams } from 'react-router-dom'

const BlogContent = () => {
  //  console.log("Blogs Content Page")
   // console.log(blogs)
    const {id}=useParams()
    
   // let blogss={}
   // if(blog){
   //     let arr = blogs.data.filter(blog=> blog.id == id)
   //     blog=arr[0]
   // } 
   //else{
   //    blog={}
   // }
   // blog = blog[0]  
   // console.log("Blog Object")
   // console.log(blog)
       
    

  const blogs=[
        {
            "id":1,
            'title':'Journey as a web developer',
            'desc':'I started learning web development by learning the basics of HTML, CSS, and JavaScript. Once I had a good understanding of these fundamentals, I started learning ReactJS and Tailwind CSS. ReactJS is a JavaScript library that makes it easy to build user interfaces, and Tailwind CSS is a utility-first CSS framework that makes it easy to style websites.Learning ReactJS and Tailwind CSS has allowed me to build more complex and interactive websites. I am now able to create websites that are more responsive and user-friendly. I am also able to build websites that are more visually appealing.I am excited to continue learning and growing as a web developer. I am looking forward to learning new technologies and frameworks that will allow me to build even better websites.Here are some of the key takeaways from my journey:It is important to have a strong foundation in the basics of web development. HTML, CSS, and JavaScript are the building blocks of all websites. ReactJS and Tailwind CSS are powerful tools that can help you build more complex and interactive websites.It is important to be constantly learning and growing. The web development landscape is constantly changing, so it is important to stay up-to-date on the latest technologies and trends.',
            'coverImg':'https://miro.medium.com/v2/resize:fit:720/format:webp/1*y6C4nSvy2Woe0m7bWEn4BA.png',
           
            'authorname':'Arin Kulkarni',
            'authorimg':'https://sunshine.iith.ac.in/images/team-2022/UG_Buddies/IMG_20230106_124519_622%20-%20Arin%20Parag%20Kulkarni.jpg',
            'authordesc':'WEBD enthusiast'
        
        },
        {
            "id":2,
            'title':'Life at IIT',
            'desc':'Life at an IIT is a unique experience. It is a time of academic rigor, personal growth, and social exploration. IITs are some of the most prestigious institutions in India, and they attract some of the brightest minds from all over the country.The academic workload at an IIT can be demanding. Students are expected to take a rigorous course load and to perform well in their exams. However, the professors at IITs are also some of the best in the country, and they are committed to helping their students succeed.In addition to academics, life at an IIT is also full of opportunities for personal growth. Students are encouraged to participate in extracurricular activities, such as sports, clubs, and student government. These activities can help students develop their leadership skills, their teamwork skills, and their communication skills. IITs are also a great place to explore different cultures and ideas. Students come from all over India, and they bring their own unique perspectives to the table. This diversity of thought can be a great source of learning and growth. Of course, life at an IIT is not all work and no play. Students have plenty of opportunities to relax and have fun. There are many social events on campus, and there are also plenty of opportunities to explore the city or the surrounding area.Overall, life at an IIT is a challenging but rewarding experience. It is a time to learn, to grow, and to make lifelong friends. ',
            'coverImg':'https://upload.wikimedia.org/wikipedia/commons/6/6e/IIT_Hyderabad.png?20200812045805',

            'authorname':'Tanmay Vishwasrao',
            'authorimg':'https://sunshine.iith.ac.in/images/team-2022/UG_Buddies/IMG20221225173846%20-%20Tanmay%20Rajendra%20Vishwasrao.jpg',
            'authordesc':'FRESHER-ee dept'
        
            
        },
        {
            "id":3,
            'title':'Passion:Making it an integral part',
            'desc':'Filmmaking is a passion that can be lived every day. Whether youre shooting a short film, editing a documentary, or writing a screenplay, theres always something to do to further your craft. And the best part is, you can do it all from the comfort of your own home.If youre serious about filmmaking, there are a few things you can do to make sure youre living your passion every day. First, surround yourself with other filmmakers. Attend film festivals, join online forums, and connect with people who share your love of cinema. Second, never stop learning. There are endless resources available to help you improve your skills, from books and articles to online tutorials and workshops. And finally, dont be afraid to experiment. Try new things, take risks, and see what happens.The most important thing is to never give up on your passion. Filmmaking is a tough industry, but its also incredibly rewarding.If youre willing to put in the hard work, you can achieve your dreams. Here are some tips for following your passion for filmmaking: Set goals and deadlines for yourself. This will help you stay motivated and on track. Network with other filmmakers. This is a great way to learn from others and get your work seen.Dont be afraid to experiment. The best way to learn is by doing. Dont give up. The filmmaking industry is tough, but its also incredibly rewarding. If youre passionate about it, dont give up on your dreams.I hope this blog has inspired you to follow your passion for filmmaking. Remember, anything is possible if you set your mind to it.',
            'coverImg':'https://images.pexels.com/photos/3692641/pexels-photo-3692641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

            'authorname':'Snehil Singh',
            'authorimg':'   https://miro.medium.com/v2/resize:fit:720/format:webp/1*y6C4nSvy2Woe0m7bWEn4BA.png',
            'authordesc':'Filmmaker, BTL coordinator'
        
        },
        {
            "id":4,
            'title':'Blog 4',
            'desc':'DUMMY',
            'coverImg':'https://mir-s3-cdn-cf.behance.net/project_modules/fs/876c22100707927.5f0ec9851cb08.png',

            'authorname':'Aryan Bubna',
            'authorimg':'https://miro.medium.com/v2/resize:fit:720/format:webp/1*y6C4nSvy2Woe0m7bWEn4BA.png',
            'authordesc':'Sunshine '

        },
        {
            "id":5,
            'title':'GROWTH: The only constant in life',
            'desc':'IGrowth is the only constant in life. Whether its our physical bodies, our minds, or our careers, we are always growing and changing. This can be a scary thought for some people, but its important to embrace growth. Its what makes us who we are.There are many ways to grow. We can grow by learning new things, meeting new people, and trying new experiences. We can also grow by facing our fears and challenges head-on. When we step outside of our comfort zones, we open ourselves up to new possibilities.Growth doesnt always happen overnight. It takes time, effort, and dedication. But if were willing to put in the work, growth is a journey that can lead to great things.Here are a few tips for growing in life Set goals. What do you want to achieve? Having specific goals will give you something to work towards. Take action. Dont just sit around and wait for things to happen. Take steps to make your goals a reality. Be patient. Growth takes time. Dont get discouraged if you dont see results immediately.Surround yourself with positive people. The people you spend time with can have a big impact on your growth. Choose to surround yourself with people who are supportive and encouraging.Growth is a journey, not a destination. Its something that we should all strive for, no matter what stage of life were in. So dont be afraid to embrace growth. Its the only way to truly live life to the fullest.',
            'coverImg':'https://media.istockphoto.com/id/1305170107/photo/stock-market-and-finance-concept-yellow-up-arrow-symbol-glowing-amid-black-arrow-symbols-on.jpg?s=612x612&w=0&k=20&c=t_DtoM0HuMF-NJ1PMbvPCK4EYSpffvHFPHqPaE4IEjM=',
           
            'authorname':'Raunak Shah',
            'authorimg':'https://miro.medium.com/v2/resize:fit:720/format:webp/1*y6C4nSvy2Woe0m7bWEn4BA.png',
            'authordesc':'student-IITB'
        
        },

        
        {
            "id":6,
            'title':'Internet:BOON or BAIN',
            'desc':'The internet is a powerful tool that has the potential to be both a boon and a bane. On the one hand, it can be used for education, communication, and entertainment. It can also help us to connect with people from all over the world and learn about different cultures.On the other hand, the internet can also be a source of misinformation, addiction, and cyberbullying. It can also be used to spread hate speech and violence.Ultimately, the internet is a tool that can be used for good or bad. It is up to us to decide how we use it.Here are some tips for using the internet responsibly:Be critical of the information you find online. Not everything you read is true. Be mindful of your time online. Dont let it consume your life.Be respectful of others online. Dont spread hate speech or cyberbullying.The internet is a powerful tool, but it is only as good as the people who use it.',
            'coverImg':'https://p.kindpng.com/picc/s/52-526804_the-internet-economy-infographic-internet-hd-png-download.png',
           
            'authorname':'Atharva Toshniwal',
            'authorimg':'https://miro.medium.com/v2/resize:fit:720/format:webp/1*y6C4nSvy2Woe0m7bWEn4BA.png',
            'authordesc':'student-Bits Pilani'
        
        }

       
    ]

  let blog = blogs.filter(blog=> blog.id == id)
 blog = blog[0]   
   

  return (
    
   <div className='w-full pb-10 bg-[#f9f9f9] '>
        <div className='max-w-[1240px] mx-auto'>
            <div className='grid lg:grid-cols-3  sm:grid-cols-3 ss:grid-cols-1 gap-x-8 gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black'>
                <div className='col-span-2 gap-x-8 gap-y-8 '>
                   
                    <img className='h-56 w-full object-cover rounded-xl drop-shadow-xl border-x-black' src={blog.coverImg}/>
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
                <div className='items-center w-full bg-[#aed176] rounded-xl drop-shadow-xl py-5 max-h-[250px] hover:bg-[rgb(147,226,231)] duration-500 '>
                <div>
                        <img className='p-2 w-32 h-32 rounded-full mx-auto object-cover drop-shadow-xl' src={blog.authorimg} />
                        <h1 className='font-bold text-2xl text-center text-gray-900 pt-3'>{blog.authorname}</h1>
                        <p className='text-center text-[#332ab6] font-medium'>{blog.authordesc}</p>
                    </div>


                </div>

          </div>

       </div> 
        </div> 
  )
}

export default BlogContent

 {/* https://miro.medium.com/v2/resize:fit:720/format:webp/1*y6C4nSvy2Woe0m7bWEn4BA.png
    https://mir-s3-cdn-cf.behance.net/project_modules/fs/876c22100707927.5f0ec9851cb08.png */}
