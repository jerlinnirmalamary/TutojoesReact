import './App.css';
import Student from './components/Student';
import ChildComponent from './components/Child';
import Child2 from './components/Child2';
import Array from './components/Array';
import Demo from './components/Demo';


function App() {
  // const items =[
  //   {id:1,name:"pogo"},
  //   {id:2,name:"redmi"},
  //   {id:3,name:"oppo"},
  //   {id:4,name:"vivo"},
  //   {id:5,name:"apple"},
  // ]
 
  return (
    <>
    <Child2 />
  
    <Student name="jerlin" age={24} isMArried={true}/> <hr />
    <Student name="priya" age={22} isMArried={false}/><hr />
    <Student name="riya" age={22} isMArried={true}/>
    <Student  />
    <Demo>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, corrupti quasi suscipit mollitia dolore distinctio totam reiciendis labore provident odit sed eligendi accusamus, autem dicta explicabo qui sunt! Nulla, est.</p>
    </Demo>

    < ChildComponent>
      <button className='bt'>This is a 1 paragrap</button>
      <button className='bt'>This is a 2 paragrap</button>
 
    </ ChildComponent>

    <Demo>
      <button className='de'>Click 2</button>
    </Demo>


    {/*  */}
    {/* <Array items={items}/> */}
    </>
  )
}

export default App
