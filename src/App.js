import './App.css';
import React,{useState} from 'react'
import {  ButtonToolbar, Button,Card } from 'react-bootstrap'

function App() {
  const [show,setShow]=useState(false);
  const [showR,setShowR]=useState(false);
    
  
  return (
    <div className="App">
      <img src="/images/plasma.jpg" />
      <Card className="text-center"  >
      
        <Card.Header>Yavatmal</Card.Header>
        <Card.Body>
          <Card.Title>Plasma Donation and Request</Card.Title>
          <Card.Text>
            Fill one of these forms.
            Our team will match relevant donors and patients and put them in touch with each other.
            We are a group of volunteers helping our city get over this COVID-19 crisis.
          </Card.Text>
          <ButtonToolbar className="custom-btn-toolbar">
            <Button onClick={()=>{setShow(!show); setShowR(false)}}>{show?'Close Donation Form':'Donate Plasma'}</Button>
            <Button onClick={()=>{setShowR(!showR); setShow(false)}}>{showR?'Close Request Form':'Request Plasma'}</Button>
          </ButtonToolbar>
        </Card.Body>
        
      </Card>
     
        <div className="Box">
        
              
              { 
              show?
              <div>
              <iframe class="airtable-embed" src="https://airtable.com/embed/shr6Pf2Dc3odgIVpc?backgroundColor=yellow" 
              frameborder="0" onmousewheel="" width="100%" height="533" 
              styles="background: transparent; border: 1px solid #ccc;">
              </iframe>
              </div>:null }
            {
            showR?
            <div>
            <iframe class="airtable-embed" src="https://airtable.com/embed/shrlPtj561qqfHLok?backgroundColor=yellow" 
            frameborder="0" onmousewheel="" width="100%" height="533" 
            styles="background: transparent; border: 1px solid #ccc;">
            </iframe>
            </div>:null
            }
          
        </div>
    </div>
  );
}

export default App;
