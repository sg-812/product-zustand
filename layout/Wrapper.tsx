import React from 'react'
import dynamic from 'next/dynamic'

const Header=dynamic(()=>import('./Header'));
const Footer=dynamic(()=>import('./Footer'));

const Wrapper = ({children}:{children:React.ReactNode}) => {
  return (
    <>
    <Header/>
        {children}
    <Footer/>
    </>
  )
}

export default Wrapper