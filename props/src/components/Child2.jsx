import React from 'react';
import ChildComponent from './Child';
import Demo from './Demo';
export default function Child2() {
  return (
    <>
    <ChildComponent>
        <button className='bt'>Button 1</button>
    </ChildComponent>

    <Demo>
      <button className='de'>Click me1</button>
    </Demo>
 
    </>
  )
}
