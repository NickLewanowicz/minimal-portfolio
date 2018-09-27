import * as React from 'react'
import Project from './Project';

// import Profile from '../../../config'


const Projects = () => {
  return (
    <div className='flex flex-column w-100-l'>
        <p className='f3 b'>Things I worked on:</p>
        <ul className='list pl0 br3 ba b--black-10 shadow-hover'>
          <Project/>
          <Project/>
          <Project/>
          <Project/>
        </ul>
    </div>
  )
} 

export default Projects