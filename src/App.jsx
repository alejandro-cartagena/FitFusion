import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar/>
      <div className='container'>
        <h1>Fitness App</h1>
      </div>
    </>
  );
}

export default App;
