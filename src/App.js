import './App.css';
import React,{useState} from 'react'

function App() {
  const [show,setShow]=useState(false);
  const [showR,setShowR]=useState(false);
  return (
    <div className="App">
      <div className="Box">
      <div className="Left">
        <button onClick={()=>setShow(!show)}>{show?'Close Donation Form':'Donate Plasma'}</button>
     { 
     
     show?<iframe class="airtable-embed" src="https://airtable.com/embed/shrKDaeI6Rm0w7waP?backgroundColor=yellow" 
     frameborder="0" onmousewheel="" width="100%" height="533" 
     styles="background: transparent; border: 1px solid #ccc;"/>:null
     
     
     }
     </div>
     <div className="Right">
        <button onClick={()=>setShowR(!showR)}>{showR?'Close Request Form':'Request Plasma'}</button>
     { 
     
     showR?<iframe class="airtable-embed" src="https://airtable.com/embed/shr4Rw1FTBD3VBOO1?backgroundColor=yellow" 
     frameborder="0" onmousewheel="" width="100%" height="533" 
     styles="background: transparent; border: 1px solid #ccc;"/>:null
     
     
     }
     </div>
      </div>

    </div>
  );
}

export default App;
