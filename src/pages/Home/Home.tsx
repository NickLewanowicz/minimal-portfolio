import * as React from 'react'
import {Experience, Header, Projects} from './components'

const Home = () => {
  return (
    <div className="center flex flex-row-ns flex-column sans-serif">
      <div className='mh3 justify-center'>
      <Header/>
      <Projects/>
      </div>
      <div className='mh3 justify-center'>
      <Experience/>
      </div>
    </div>
  )
} 

export default Home