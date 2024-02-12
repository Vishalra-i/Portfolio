import React from 'react'
import useTheme from '../context/Theme'

function Button() {
    const {darkmode,lightmode,mode,thememode} = useTheme()
    const onClickchange = (e)=>{
          if(mode)lightmode()
          else darkmode()
    }
  return (

    <>
     <label class="switch">
      <input type="checkbox" onClick={onClickchange} class="input__check"/>
      <span class="slider"></span>
     </label>
     </>
  )
}

export default Button