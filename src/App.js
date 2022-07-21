import './App.css';
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import CreateEmployee from './components/CreateEmployee'
import { useState } from "react"


function App() {

  const [addSelected, setAddSelected] = useState(false)

  return (
    <div className="App">
      <Navbar 
      addSelected={addSelected}
      setAddSelected={setAddSelected}
      />
      <main>
        {!addSelected ? (
          <Homepage />
        ) : (
          <CreateEmployee />
        )}
      </main>
    </div>
  );
}

export default App;
