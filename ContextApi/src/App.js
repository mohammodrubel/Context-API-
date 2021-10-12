import { createContext, useState } from 'react';
import './App.css';
import GrandFather from './components/GrandfFather/GrandFather';

export const Diamonds = createContext('This is Diamond')

function App() {
  const [House,setHouse] = useState(1)
  const diamond = 'Diavallamond'
  return (
    <div className="App">
      
      <Diamonds.Provider value = {diamond}>
        <button onClick={()=> setHouse(House+1)}> incrise you BUilding</button>
        <GrandFather House={House} diamond={diamond}></GrandFather>
      </Diamonds.Provider>
     
    </div>
  );
}

export default App;
