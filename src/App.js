
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';

function App() {
  const [mode,setMode]=useState('light')

  const toggleMode=()=>{
    console.log('toggle button function is invoked')
        if(mode==='light'){
            setMode('dark')
            document.body.style.backgroundColor='#020826';
            document.body.style.color='white';
            console.log(mode)
        }else{
            setMode('light')
            console.log(mode)
            document.body.style.backgroundColor='white';
            document.body.style.color='black';
        }
  }

  return (
    <>
    <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode}></Navbar>
    <TextForm title="Enter the text to analyze" mode={mode}></TextForm>
    {/* <About></About> */}
    </>
  );
}

export default App;
