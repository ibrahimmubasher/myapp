
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar'
import TextBlock from './components/TextBlock'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
 const toggleMode =()=>{
  if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor = '#15325d'
  }
  else{
    setMode('light')
    document.body.style.backgroundColor = 'white'
  }
 }
 const toggleMode2 =()=>{
  if(mode === 'light'){
    setMode('dark')
    document.body.style.backgroundColor = 'green'
  }
  else{
    setMode('light')
    document.body.style.backgroundColor = 'white'
  }
 }

  const [mode, setMode] = useState('light');
  return (
  <>
  {/* <Router> */}
  <Navbar title = 'TextUtils' about = 'about us' mode={mode} toggleMode={toggleMode} toggleMode2={toggleMode2}/> 
  <div className="container">
       {/* <Routes>
          <Route exact path="/about" element={<About />} /> */}
          
          <TextBlock heading = 'enter the text to analyze' mode={mode}/>
        
        
    
  {/* </Routes> */}
  </div>
  
  {/* </Router> */}
  {/* />
    <About/> */}
  </>
  );
}

export default App;
