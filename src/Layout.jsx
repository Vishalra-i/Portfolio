import React from 'react'
import { About, Contact, Footer, Header, Home, Project } from './components'
import { Outlet } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Theme, { Themeprovider } from './context/Theme'
import Toggle from './components/Toggle'

function Layout() {
  const [thememode, setThememode] = useState("dark")
  const [mode, setmode] = useState(true)
  const [loading , setLoading] = useState(true)

     let darkmode = ()=>{
       setThememode("dark")
       setmode(true)
     }
     let lightmode = ()=>{
       setThememode("light")
       setmode(false)
     }

     (function(){
        setTimeout(() => {
          setLoading(false)
        }, 2000)
     })()


  useEffect(() => {
    
      let html = document.querySelector("html")
        html.classList.remove("dark","light");
        html.classList = thememode
    
  }, [thememode,mode])

  return (
    <Themeprovider value={{thememode,darkmode,lightmode,mode}}>
       <Header/>
       <Outlet/>
       <Toggle/>
       <Footer/>
    </Themeprovider>
  )
}

export default Layout