import React from 'react'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Theme, { Themeprovider } from './context/Theme'

function Layout() {
  const [thememode, setThememode] = useState("dark")
  const [mode, setmode] = useState(true)

     let darkmode = ()=>{
       setThememode("dark")
       setmode(true)
     }
     let lightmode = ()=>{
       setThememode("light")
       setmode(false)
     }

  useEffect(() => {
    
      let html = document.querySelector("html")
        html.classList.remove("dark","light");
        html.classList = thememode
    
  }, [thememode,mode])
  return (
    <Themeprovider value={{thememode,darkmode,lightmode,mode}}>
       <Header/>
       <Outlet/>
       <Footer/>
    </Themeprovider>
  )
}

export default Layout