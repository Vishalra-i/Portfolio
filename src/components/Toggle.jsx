import React from 'react'
import useTheme from '../context/Theme'

function Toggle() {
    const {darkmode,lightmode,mode,thememode} = useTheme()
    const onClickchange = (e)=>{
          if(mode)lightmode()
          else darkmode()
    }
  return (

    <>
    <div className="fixed right-5 top-10">
     <label class="switch">
      <input type="checkbox" onClick={onClickchange} class="input__check"/>
      <span class="slider"></span>
     </label>
    </div>
     </>
  )
}

export default Toggle