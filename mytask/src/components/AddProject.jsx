import React, { useState } from 'react';
import './AddProject.css';

export default function AddProject({addfunction,showPopup}) {
  const [title,setTitle]=useState("");
  const [textarea,setTextarea]=useState("");
  const [date,setDate]=useState("");
 

  // 

  
  
  // 

const textval=(e)=>{
  setTitle(e.target.value)
}

const textareaval=(e)=>{
  setTextarea(e.target.value)
}

const dateval=(e)=>{
  setDate(e.target.value)
}

const allData =(e)=>{
  
  e.preventDefault();
  
  if(!title == "" && !textarea == "" && !date ==""){
    addfunction(title,textarea,date);
  }
  else{
    showPopup(true);
  }

}


  return (
    <div className='mainbox'>
      <form action="">
        <div className='buttonbox'>
          <button className='cancelbtn'>Cancel</button>
          <button className='savebtn' onClick={allData}>Save</button>
        </div>

      <div>
        <label htmlFor="text">TITLE</label> <br />
        <input type="text" id="text" onChange={textval} />
      </div>

      <div>
        <label htmlFor="textarea">DESCRIPTION</label> <br />
        <textarea  name="textarea" id="textarea" cols="30" rows="2" onChange={textareaval}></textarea>
      </div>

      <div>
        <label htmlFor="date">DUE DATE</label> <br />
        <input type="date" id='date' onChange={dateval} />
      </div>

      </form>
    </div>
  )
}
