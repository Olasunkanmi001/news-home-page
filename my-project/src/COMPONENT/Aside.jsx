import React from 'react'


const Aside = () => {
    let news = [{
        "tittle": "Hydrogen VS Electric Cars",
        "category": "What are the possible adverse effects of on-demand Al image generation?"
    },
{
    "tittle": "The Downsides of Al Artistry",
    "category": "What are the possible adverse effects of on-demand Al image generation?"
},
{
    "tittle":"Is VC Funding Drying Up?",
    "category": "Private funding by VC firms is down 50% YOY. We take a look at what that means."
}]
  return (
    <div className='p-5'>
        <div className='bg-black px-3'>
            <h1 className='text-[#ECA953] text-4xl font-bold'>New</h1>
            <div className='text-white'>
               {news.map((use)=>{
                return(
                    <div>
                        <h1 className='text-2xl font-bold mb-3 mt-6'>{use.tittle}</h1>
                        <h5 className='text-[#838498] text-sm border-b border-[#838498] pb-6'>{use.category}</h5>

                    </div>
                )
               })}
            </div>

        </div>

    </div>
  )
}

export default Aside