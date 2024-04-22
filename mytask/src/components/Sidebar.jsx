import { useState } from 'react';
import './Sidebar.css';
import Button from './UI/Button';

export default function Sidebar({changeComponents,data,getDatas,getDate, getDisc}) {

 console.log(data);
  function handelClick(){
    changeComponents("addproject")
  }

  function myDatas(title, dueDate,description){
    
    console.log(title);
    console.log( dueDate);

    const finddata = data.findIndex((values)=>{
      return  values.title === title 
    });

    const finddate = data.findIndex((value)=>{
      return  value. dueDate ===  dueDate 
    });

    const findText= data.findIndex((val)=>{
      return  val.description === description
    });
  
    getDatas(finddata,"viveproject");
    getDate(finddate);
    getDisc(findText);
     
  }

  return (
    <div className='Listbox'>
      <div className='list'>
      <h1 className='con1'>YOUR PROJECT</h1>
     <Button handelClick={handelClick}>+ Add project</Button>

  
    <ul>
      {data.map((datas,i)=>(
        <li key={i}><button className='libtn'onClick={()=>myDatas(datas.title,datas.dueDate)}>{datas.title}</button></li>
      ))}
    </ul>
  
      </div>
    </div>
  )
}
            