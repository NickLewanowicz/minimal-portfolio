import * as React from 'react'
import Project from './Project';

// import Profile from '../../../config'


const Experience = () => {
  return (
    <div className='flex flex-column w-100-l'>
        <p className='f3 b'>Places I have worked:</p>
        <ul className='list pl0 br3 ba b--black-10 shadow-hover'>
          <Project/>
          <Project/>
          <Project/>
          <Project/>
        </ul>
    </div>
  )
} 

export default Experience