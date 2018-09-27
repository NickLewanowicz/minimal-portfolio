import * as React from 'react'
import {Experience, Header, Projects} from './components'

const Home = () => {
  return (
    <div className="center flex flex-column w-90-m w-70-l flex-column-m flex-row-l sans-serif">
      <div className='center ph2 mh3 w-100 mw6'>
      <Header/>
      <Projects/>
      </div>
      <div className='center ph2 mh3 w-100 mw6'>
      <Experience/>
      </div>
    </div>
  )
} 

export default Home