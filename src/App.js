import './App.css';
import {useState, useEffect} from 'react';
import { gsap } from "gsap";


function App() {
  
  const [boring, setBoring] = useState('')

  const fetchData = async()=>{
  const response = await fetch (`http://www.boredapi.com/api/activity`);
  const data = await response.json();
  setBoring(data.activity);
  };

  useEffect(()=>{
    fetchData()
    gsap.to('.pictureTwo', {opacity:1, delay: 3, y:-20})
  }, []);

  

  return (
    <div className="App">

      <div className="container picture">
    <h1>If you don't know what you want to do, press this button</h1>
      </div>
      <div className="container picture">
      <button onClick={fetchData}>Click here</button>
      </div>
      <div className="container pictureTwo">
      <h2>"{boring}"</h2>
      </div>
      
    </div>
    
  );
  
}

export default App;
