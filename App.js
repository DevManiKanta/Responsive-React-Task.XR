import './App.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Draggable from 'react-draggable';
function App() {
  const[state,setState]=useState(false)
  
  return (
    
    <div>
      <div className="head"><h1 >Responsive web Design</h1></div><br></br>
      <div><Button variant="warning" onClick={()=>{setState(true)}}>Save</Button></div>
      <div className="Mydesign" style={{display:"flex"}}>
      <div className="mydiv">
        <div style={{display:"flex",marginTop:20}}>
        <div style={{ width: '150px',height: '150px',border: "5px solid black",resize:"both"}}></div>
        <div style={{ width: '150px',height: '150px',border: "5px solid black",marginLeft:10}}></div>
        <div style={{ width: '150px',height: '150px',border: "5px solid black",marginLeft:10}}></div>
        </div>
        <div style={{display:"flex",marginTop:20}}>
        <div style={{ width: '150px',height: '150px',border: "5px solid black"}}></div>
        <div style={{ width: '150px',height: '150px',border: "5px solid black",marginLeft:10}}></div>
        <div style={{ width: '150px',height: '150px',border: "5px solid black",marginLeft:10}}></div>
        </div>
        <div style={{display:"flex",marginTop:20}}>
        <div style={{ width: '150px',height: '150px',border: "5px solid black"}}></div>
        <div style={{ width: '150px',height: '150px',border: "5px solid black",marginLeft:10}}></div>
        <div style={{ width: '150px',height: '150px',border: "5px solid black",marginLeft:10}}></div>
        </div>
        </div>
       <br></br>
       <div className="main-1">
       {
        state&&(<Draggable>
          <div style={{width: '150px',
          height: '150px',
          border: "5px solid silver",
          //display: "flex",
          position: 'fixed',
          top: '34%',
          left: '35%'
          }}>
          </div>
        </Draggable>)
      }
      
       </div>
    </div>
       
    </div>
    
  );
}

export default App;
