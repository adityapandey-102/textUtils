import React, { useState } from 'react'

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#070a2b"
      document.title = "TextUtils - DarkMode"
      showAlert("Dark Mode is Enabled", "success")
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "#E7F6F2"//white::
      document.title = "TextUtils - LightMode"
      showAlert("Light Mode is Enabled", "success")
    }
  }
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3" >
        <TextForm heading="Enter the text here to analyze below :" mode={mode} showAlert={showAlert} />
      </div>

    </>
  );
}
export default App;
