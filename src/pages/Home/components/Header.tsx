import * as React from 'react'

import Profile from '../../../config'

const Header = () => {
  return (
    <div className='flex'>
      <div className='mw6-ns br3 hidden ba b--black-10 mt5 mb3 white my-header grow grow:active shadow-1 shadow-hover'>
        <div className='flex flex-column ml3'>
          <img className="br4 h4 w4 dib nt4" src={Profile.personal.image}/>
          <p className='f2 mt3 mb1 fw5'>{Profile.personal.name}.</p>
        </div>
        <p className='ma2'>{Profile.personal.description}</p>
      </div>
    </div>
  )
} 

export default Header