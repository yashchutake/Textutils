import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
// import About from './Components/About';
import React, { useState } from 'react';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is on or off
  const toogleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "success")
      document.title = "TextUtils -Dark Mode";

      setInterval(() => {
        document.title = "TextUtils is Amazing";
      }, 1000);

      setInterval(() => {
        document.title = "Intall TextUtils Now";
      }, 750);

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "primary")
      document.title = "TextUtils -Light Mode"
    }
  }

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)//1.5 sec
  }



  return (
    <>
      {/* <Navbar title="TextUtils" mode={mode} toogleMode={toogleMode} /> */}
      {/* // <Navbar/> //set default one */}
      {/* <Alert alert={alert} /> */}
      {/* <div className="container">
        <Textform showAlert={showAlert} heading="Enter Text To Analyze Below" mode={mode} />
      </div> */}

      {/* <div className="container">
        <About/>
      </div> */}

      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toogleMode={toogleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      {/* <Switch>
        <Route extact path="/about">
            <About />
        </Route> */}

        {/* <Route extact path="/"> */}
            <Textform showAlert={showAlert} heading="Enter Text To Analyze Below" mode={mode} />
        {/* </Route> */}
      {/* </Switch> */}
      </div>
      {/* </Router> */}

    </>


  );
}

export default App;
