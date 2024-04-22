import React from 'react';
import './ViewProject.css';

export default function ViewProject({project}) {
  console.log("project",project);
  return (
    <div className='ViewBox'>
     <div className='innerbox'>

     <div className='firstbox'>  
        <h1 className='viewcon'>{project.title}</h1> 
        <h3 className='viewcon h3'>{project.dueDate}</h3>
        <h3 className='viewcon'>{project.description}</h3>
     
      </div>
    <div className='secondbox'>
      <button className='del'>Delete</button>
    </div>
     </div>
      <hr />


<div className='formbox'>

  <form className='forms'>
    <h1>Tasks</h1>
    <div className='inputbox'>
      <input className="input" type="text" />
      <button className='addbtn'>Add Task</button>
    </div>

    <div className='addbox'>
      <div className='con'>1</div>
      <div className='clear'>clear</div>
    </div>
  </form>


</div>

    </div>
  )
}

