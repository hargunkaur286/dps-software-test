import React from 'react'
import logo from '../assets/logo.png'

const AuthLayouts = ({children}) => {
  return (
    <>
        <header className='flex py-3 pl-20 h-20 shadow-md bg-white'>
            <img 
              src={logo}
              alt='logo'
              width={48}
              height={26}
            />
        </header>

        { children }
    </>
  )
}

export default AuthLayouts
