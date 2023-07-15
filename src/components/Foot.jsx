import React from 'react'
import {FaFacebook, FaGithub, FaInstagram, FaTwitter} from 'react-icons/fa'

const Foot = () => {
  return (
    <div className='w-full bg-black text-[#3c2475] py-8 px-2' >
      <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>

        <div>
          <h5 className='font-bold text-[#ffffff]  uppercase py-2'>solution</h5>
          <ol>
            <li className='py-1'>Market</li>
            <li className='py-1'>Market</li>
            <li className='py-1'>Market</li>
            <li className='py-1'>Market</li>
            <li className='py-1'>Market</li>
          </ol>
        </div>

        <div>
          <h5 className='font-bold text-[#ffffff] uppercase py-2'>solution</h5>
          <ol>
            <li className='py-1'>Market</li>
            <li className='py-1'>Market</li>
            <li className='py-1'>Market</li>
            <li className='py-1'>Market</li>
            <li className='py-1'>Market</li>
          </ol>
        </div>

        <div>
          <h5 className='font-bold text-[#ffffff]  uppercase py-2'>solution</h5>
          <ol>
            <li className='py-1'>Market</li>
            <li className='py-1'>Market</li>
            <li className='py-1'>Market</li>
            <li className='py-1'>Market</li>
            <li className='py-1'>Market</li>
          </ol>
        </div>

        <div>
          <h5 className='font-bold text-[#ffffff]  uppercase py-2'>solution</h5>
          <ol>
            <li className='py-1'>Market</li>
            <li className='py-1'>Market</li>
            <li className='py-1'>Market</li>
            <li className='py-1'>Market</li>
            <li className='py-1'>Market</li>
          </ol>
        </div>

        <div className='col-span-2 pt-2 md:pt-2'>
          <p className='font-bold uppercase text-[#ffffff] '>Subscribe to our blogs</p>
          <p className='py-4'>Check out the latest blogs by people of various spheres.</p>
          <form className='flex flex-col sm:flex-row'>
            <input className='w-full p-2 mr-4 rounded-md mb-2' type="email" placeholder="Enter email" />
            <button className='p-2 mb-2 bg-[#2f1491]'> SUBSCRIBE </button>
          </form>
        </div>

        
      </div>

      <div className='flex flex-col max-w-[1240px] px-2 py-4 m-auto justify-between sm:flex-row text-center text-gray-600 items-center'>
        <p>
          2022 Blogopedia, LLC, All rights reserved.
        </p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2x1 gap-2'>
          <FaFacebook />
          <FaGithub />
          <FaInstagram />
          <FaTwitter />

        </div>

      </div>
    </div>
  )
}

export default Foot