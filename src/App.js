import './App.css';
import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

function App() {
  const [show,setShow]=useState(false);
  const [showR,setShowR]=useState(false);
  return (
    <div className="App">
      <ButtonToolbar className="custom-btn-toolbar">
      <Button onClick={()=>{setShow(!show); setShowR(false)}}>{show?'Close Donation Form':'Donate Plasma'}</Button>
      <Button onClick={()=>{setShowR(!showR); setShow(false)}}>{showR?'Close Request Form':'Request Plasma'}</Button>
      </ButtonToolbar>
        <div className="Box">
              { 
              show?<iframe class="airtable-embed" src="https://airtable.com/embed/shrKDaeI6Rm0w7waP?backgroundColor=yellow" 
              frameborder="0" onmousewheel="" width="100%" height="533" 
              styles="background: transparent; border: 1px solid #ccc;"/>:null }
            {
            showR?<iframe class="airtable-embed" src="https://airtable.com/embed/shr4Rw1FTBD3VBOO1?backgroundColor=yellow" 
            frameborder="0" onmousewheel="" width="100%" height="533" 
            styles="background: transparent; border: 1px solid #ccc;"/>:null
            }
          
        </div>
    </div>
  );
}

export default App;
