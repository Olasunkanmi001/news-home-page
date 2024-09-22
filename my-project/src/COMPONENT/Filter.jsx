import React from 'react'
// import image1 from './images/image-retro-pcs.jpg'
// import image2 from './images/image-top-laptops.jpg'
// import image3 from './images/image-gaming-growth.jpg'

const Filter = () => {
    let document = [
        {
            "image": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJldHJvJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D",
            "number": "01",
            "tittle": "Reviving Retro PCs",
            "category": "What happens when old PCs are given modern upgrades?",
    
    },
    {
        "image": "https://www.newegg.com/insider/wp-content/uploads/2021/10/Gaming-Keys.png",
        "number": "02",
        "tittle": "Top 10 Laptops of 2022",
        "category": "Our best picks for various needs and budgets.",

},
{
    "image": "https://img.freepik.com/free-photo/high-angle-gaming-controllers-arrangement_23-2149829179.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1726963200&semt=ais_hybrid",
    "number": "03",
    "tittle": "The Growth of Gaming",
    "category": "How the pandemic has sparked fresh opportunities.",

},


]


  return (
    <div className='p-5 lg:flex md:grid md:grid-cols-2'>
        {document.map((use)=>{
            const newLocal = 'text-[#838498] text-sm'
            return(
                <div className=' pt-10'>
                    <div className='flex gap-5 '>
                        <div>
                            <img className='w-[120px] h-[120px] mb-4' src={use.image}/>
                        </div>
                        <div>
                            <h1 className='text-3xl text-orange-500 font-extrabold mb-2'>{use.number}</h1>
                            <h1 className='font-extrabold text-lg mb-2'>{use.tittle}</h1>
                            <h6 className='text-[#838498] text-sm'>{use.category}</h6>
                        </div>
                    </div>
                </div>
            )
        })}
       


    </div>
  )
}

export default Filter