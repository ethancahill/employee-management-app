import './App.css';
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import CreateEmployee from './components/CreateEmployee'
import DisplayEmployees from './components/DisplayEmployees';
import { useState, useEffect } from "react"


function App() {

  const [addSelected, setAddSelected] = useState('')

useEffect(() =>{
  document.title = 'Employee Database'
})

 function renderPage(page){
    switch(page){
      case '': return <Homepage />;
      case 'create': return <CreateEmployee />;
      case 'display': return <DisplayEmployees />;
      default: return <Homepage />;
    }
  }
  return (
    <div className="App">
      <Navbar 
      addSelected={addSelected}
      setAddSelected={setAddSelected}
      />
      <main>
        {renderPage(addSelected)}
      </main>
    </div>
  );
}


export default App;
