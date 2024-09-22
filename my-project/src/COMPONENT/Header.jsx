import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaX } from "react-icons/fa6";
import { useState } from 'react';

const Header = () => {

    let button = ['Home','New','Popular','Trending','Categories']
    const [drop, setDrop] = useState(true)
    const change = ()=>{
        setDrop(!drop)
    }



  return (
    <div className='flex justify-between md:justify-around lg:justify-between lg:px-28 p-5'>
        <div>
            <h1 className='text-6xl font-mono font-extrabold'>W.</h1>
        </div>
        <div className=' gap-4 text-sm hidden md:flex'>
            {button.map((use)=>{
                return(
                    <div>
                        <button className='text-[#AAA6AD]'>{use}</button>
                    </div>
                )
            })}

        </div>
       
       {drop? <div className='md:hidden'>
        <button onClick={()=>{change()}}><RxHamburgerMenu className='text-6xl font-thin' /></button>
        </div>:
        <div className='flex gap-5 bg-white md:hidden absolute ml-36 '>
            
            <div className=' gap-4 pt-20 font-extrabold grid'>
            {button.map((use)=>{
                return(
                    <div className='pl-10'>
                        <button className='text-[#AAA6AD]'>{use}</button>
                    </div>
                )
            })}

        </div>
       <div><button onClick={()=>{change()}}><FaX className='text-6xl font-thin'/></button></div>


        </div>}



    </div>
  )
}

export default Header