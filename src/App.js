
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light')
  const [alertMsg,setAlert]=useState(null)

  const showMsg=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }

  const toggleMode=()=>{
    console.log('toggle button function is invoked')
        if(mode==='light'){
            setMode('dark')
            document.body.style.backgroundColor='#020826';
            document.body.style.color='white';
            showMsg("Dark mode enabled","success")
            document.title="TextUtils-Dark mode"
        }else{
            setMode('light')
            document.body.style.backgroundColor='white';
            document.body.style.color='black';
            showMsg("Light mode enabled","success")
        }
  }

  return (
    <>
      
      <BrowserRouter>
          <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode}></Navbar>
          <Alert alert={alertMsg}/>
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/" element={<TextForm title="Enter the text to analyze" showMsg={showMsg} mode={mode}></TextForm>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
