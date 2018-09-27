import * as React from 'react'
import Project from './Project';

// import Profile from '../../../config'


const Experience = () => {
  return (
    <div className='flex flex-column w-100-l mt5-ns'>
        <p className='f3 b'>Places I have worked:</p>
        <ul className='list pl0 br3'>
          <Project/>
          <Project/>
          <Project/>
          <Project/>
        </ul>
    </div>
  )
} 

export default Experience