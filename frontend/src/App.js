import './App.css';
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import CreateEmployee from './components/CreateEmployee'
import DisplayEmployees from './components/DisplayEmployees';
import EditEmployee from './components/EditEmployee'
import { useState, useEffect } from "react"


function App() {

  const [getSelected, setSelected] = useState('')

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
      setSelected={setSelected}
      />
      <main>
        {renderPage(getSelected)}
      </main>
    </div>
  );
}


export default App;
