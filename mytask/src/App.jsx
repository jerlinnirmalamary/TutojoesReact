 import './App.css';
 import Sidebar from './components/Sidebar';
 import CreateProject from './components/CreateProject';
 import ViewProject from './components/ViewProject';
 import AddProject from './components/AddProject';
 import { useState } from 'react';
 import Popupbox from './components/Popupbox';

 let index;


function App() {
  const [change, setChange] = useState("createproject");
  const [data,setdata]=useState([]);
  const [popup,setPop]=useState(false);


  console.log(data);
  
  
  function addfunction(title,textarea,date){

    setdata((previousState)=>{
      return [...previousState,{
        title:title,
        description:textarea,
        dueDate:date,
      }]
    })
  }

  function showPopup( showPopup){
    setPop(showPopup)
  }

  function changeComponents(val){
    setChange(val)
  }

function getDatas(vals,viewProject){

  changeComponents(viewProject);
  index = vals;
  console.log("values",vals);
}

function getDate(dateval){
  index = dateval;
}

function getDeskcrip(disval){
  index = disval;
}

  return (

    <div className='maincontainer'>
      
        <Sidebar changeComponents={changeComponents} getDatas={getDatas} getDate={getDate} getDeskcrip={getDeskcrip} data={data} />
        {change === "createproject" && <CreateProject changeComponents={changeComponents} />}
        {change === "addproject" && <AddProject addfunction={addfunction} showPopup={showPopup} />}
        {change === "viveproject" && <ViewProject changeComponents={changeComponents} project={data[index]}/>}
        {popup &&  < Popupbox showPopup={showPopup}/> }
      
    
    </div>
  )
}

export default App;




