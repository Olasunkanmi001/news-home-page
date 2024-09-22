import React from 'react'
import Header from './COMPONENT/Header'
import Main from './COMPONENT/Main'
import Aside from './COMPONENT/Aside'
import Filter from './COMPONENT/Filter'

const App = () => {
  return (
    <div>

      <Header/>
     <div className='md:flex lg:px-20'>
     <Main/>
     <Aside/>
     </div>
     <Filter/>
    </div>
  )
}

export default App