import React from 'react'
import Footer from './Footer'

const Title = (props) => {
  return (
    <div>
      <div className='logo'>{props.logoText}</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>COntact Us</li>
      </ul>
      <Footer/>
    </div>
  )
}

export default Title
