import './App.css';
import { useState } from 'react';
import { Slider, NumberInput } from '@mantine/core';
import { AppShell, Navbar, Header, Aside, Footer } from '@mantine/core';
import { resistance_calcuation } from './calculations.js';

function App() {
  const [CurrentNumber,setCurrentNumber] = useState(0);
  return (
    <div className="App">
      <br></br>
      <br></br>
        <Slider

          labelTransition="fade"
          labelTransitionDuration={200}
          labelTransitionTimingFunction="ease"

          min={0}
          max={1000} 
          value={CurrentNumber} onChange={setCurrentNumber}
          marks={[
            { value: 20, label: '20' },
            { value: 50, label: '50' },
            { value: 80, label: '80' },
            { value: 100, label:'100'}
          ]}
        />

      <br></br>
      
    <NumberInput 
      value={CurrentNumber} 
      onChange={(CurrentNumber) => setCurrentNumber(CurrentNumber)}
    
    />
    <br></br>
    <div>
      You will take {Math.round((resistance_calcuation(CurrentNumber)*100))}% Damage from attacks
    </div>
    </div>
  );
}

export default App;
