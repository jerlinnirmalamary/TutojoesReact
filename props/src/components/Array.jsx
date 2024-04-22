import React from 'react'

export default function Array({items}) {
  return (
   <h3>
    <ul>
      {items.map((itm,i)=>(
        <li key={i}>{itm.name}</li>
      ))}
    </ul>
   </h3>
  )
}






