import * as React from 'react'

// import Profile from '../../../config'


const Header = () => {
  return (
    <div className='flex flex-column w-100-l'>
        <p className='f3 b'>Things I worked on:</p>
        
          <div className='mw6-ns br3 hidden ba b--black-10 shadow-hover'>
            <div className='flex flex-column ma2'>
              <p className='f2 mb1 fw5'>Sample Project.</p>
              <p className=''>Short pitch on what is does.</p>

            </div>
          </div>
    </div>
  )
} 

export default Header