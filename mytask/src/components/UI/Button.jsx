import React from 'react'

export default function Button({children,handelClick}) {
   
  return (

         <button className='btn' onClick={handelClick}>{children}</button>

  )
}
