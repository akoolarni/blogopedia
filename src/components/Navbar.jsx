import React, {useState} from 'react';
import{blog, menu, close} from '../assets';

const Navbar = () => {
    const [toggle,setToggle]=useState(false);
    const handleClick = ()=>setToggle(!toggle)


  return (
    <div className='w-full h-[60px] z-10 bg-[#5f9ea0] fixed drop-shadow-xl relative'>
        <div className='flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto'>

                <div className='flex items-center'>
                    <img src={blog} alt="blog" className='sm:ml-10 ss:ml-10 md:ml-3 opacity-[100%] w-full h-[100px] drop-shadow-xl' />
                </div>
          

                <div className='flex items-center'>
                    <ul className='hidden md:flex'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Support</li>
                        {/* <li>Platform</li> */}
                        {/* <li>Pricing</li> */}
                    </ul>
                </div>



                <div className='hidden md:flex sm:mr-10 md:mr-10'>
                    <button className='border-none bg-transparent text-black mr-4'>Login</button>
                    <button className='px-8 py-3'>Sign Up</button>

                </div>

                <div className='md:hidden' onClick={handleClick}>
                    <img src={!toggle?menu:close} alt="menu" className='w-[28px] h-[28px] object-contain mr-10 drop-shadow-xl' />
                </div>

                

        </div>
        <ul className={toggle?'absolute bg-[#adbabb] w-full px-8 md:hidden':'hidden'}>
                        <li>Home</li>
                        <li>About</li>
                        <li>Support</li>
                   
                        <div className='flex flex-col my-4'>
                            <button className='bg-transparent text-black mb-4 py-3 px-8'>Login</button>
                            <button className='px-8 py-3'>Sign Up</button>
                        </div>
        </ul>

    </div>
  )
}

export default Navbar