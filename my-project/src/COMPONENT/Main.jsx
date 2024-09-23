import React from 'react'
import image1 from './images/image-web-3-mobile.jpg'

const Main = () => {
  return (
    <div className='p-5'>
        <img className='h-80 md:w-[100vw]' src={image1}/>

        <div className='pt-5 lg:flex lg:justify-around lg:gap-28'>
            <div className=''>
                <h1 className='text-5xl font-bold '>The Bright Future of web 3.0?</h1>
                
                
                </div>

                <div>
                    <h5 className='text-[#7A787A] mt-3 font-bold text-sm lg:text-lg lg:w-[400px]'>We dive into the next evolution of the wen that claims to put the power of the platforms back into the hands of the peoole. But is it really fulfilling its promise?</h5>
                    <button className='bg-[#F15E51] h-12 w-48  font-bold mt-5 shadow-lg'>READ MORE</button>
                </div>
        </div>

    </div>
  )
}

export default Main