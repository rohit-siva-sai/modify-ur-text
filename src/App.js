// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";


function App() {
  const [mode, setmode] = useState("light"); //whether dark mode is enabled or not

  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const removebodyclasses = ()=>{
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-secondary')
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-info')
  }

  const togglemode = (cls) => {
    removebodyclasses();
    if (mode === "light") {
      setmode("dark");
      document.body.style.background = "rgb(0 6 90)";
      document.body.style.color = "white";
      document.body.style.fontFamily = "cursive";
      showAlert("Dark mode has been Enabled", "success");
      setInterval(() => {
        document.title = "TextUtils-DarkMode";
      }, 2000);
    } else {
      setmode("light");
      document.body.style.background = "white";
      document.body.style.color = "black";
      document.body.style.fontFamily = "cursive";
      showAlert("Light mode has been Enabled", "success");
      setInterval(() => {
        document.title = "TextUtils-LightMode";
      }, 2000);
    }
    document.body.classList.add('bg-'+cls)
  };

  return (
    <>
      {/* <Router> */}
        {/* <Navbar  />  */}
        {/* <Router>
        <Navbar title="Text-Utils" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <Routes>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/" element={<Textform heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
          </Routes>
          {/* <About/> */}
        {/* /* </div>} */}
      
      <Router> 

        <Navbar title="Modify-Text" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        
        <div className="container my-3">
          <Switch>
            <Route path="/about">
            <About mode={mode}/>
              
            </Route>
            
            <Route path="/">
              <Textform
                heading="Enter text to analyze"
                mode={mode}
                showAlert={showAlert}
              />
            </Route>
          </Switch>
        </div>

       
     </Router>
     </>
  );
}

export default App;
