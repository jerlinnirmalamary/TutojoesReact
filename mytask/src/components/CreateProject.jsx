import React from 'react';
import './CreateProject.css';
import Button from './UI/Button';


export default function CreateProject({changeComponents}) {

  function handelClick(){
    changeComponents("addproject")
  }

  return (
    <div className='main'>

        <img className='img' src="./img.jpeg" alt="" />
        <h1 className='con2'>No Project selected</h1>
        <h1 className='con3'>Select the project or get started with a new one</h1>

       <Button handelClick={handelClick} >Create new project</Button>
     
    </div>
  )
}
