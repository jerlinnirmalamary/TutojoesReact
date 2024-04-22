import React from 'react';
import './popupbox.css';
import { createPortal } from 'react-dom';
import { HiXMark } from "react-icons/hi2";


  function Popupbox({showPopup}) {

    function removeFun(){
      showPopup(false);
    }

    return  createPortal( ( 

      <div className='popupbox'>
      
         <div className='popmsg'>
       <div className='icon'><button className='clsbtn' onClick={removeFun}><HiXMark /></button></div>
         <div className='contant'><h1>Input Values Empty please enter the values</h1> </div>
         </div>
  
      </div>
    ),document.getElementById("protaldemo")
    )
  }


export default Popupbox;