// import { useState } from 'react';
// import './App.css';
// // import About from './components/About';
// import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
// function App() {
//   const [mode, setMode] = useState('dark');//whether dark mode is enabled or not
  
//   const togglemode = () =>{
//     if(setMode === 'light'){
//       setMode('dark')
//     }
//     else{
//       setMode('light')
//     }
//   }

//   return (
//     <>
// {/* <Navbar title="Textulits2" aboutText="About TextUlits"/> */}
// <Navbar mode={mode} togglemode={togglemode}/>
// <div className="container my-3">
// <TextForm heading="Enter a text to analyze below "/>
// {/* <About/> */}
// </div>
//     </>
//   );
// }

// export default App;


import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import React from "react";
import {
   Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const  [alert, setAlert] = useState(null);

  // alert
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = (cls) => {
    console.log(cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode is been eanbled", "success")
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode is been eanbled", "success")
      
    }
  };

  return (
    <>
      {/* <Navbar title="Textulits2" aboutText="About TextUlits"/> */}
      <Navbar mode={mode} toggleMode={toggleMode } />
      <Alert alert={alert}/>
      
      {/* <div className="container my-3"> */}

      <Routes>
          <Route path="/about" element={<About mode={mode}/>}>
            
          </Route>        
          <Route path="/" element={  <TextForm showAlert={showAlert} heading="Enter a text to analyze below" mode={mode}/>}>
      
          </Route>
      </Routes>
      {/* </div> */}


       {/* <Navbar title="Textulits2" aboutText="About TextUlits"/>
      <Navbar mode={mode} toggleMode={toggleMode } />
      <Alert alert={alert}/>
      <div className="container my-3">
            <About mode={mode}/>
        <TextForm showAlert={showAlert} heading="Enter a text to analyze below" mode={mode}/>
      </div>
     */}
     </>
  );
}

export default App;





// 





// import { useState } from 'react';
// import './App.css';
// import About from './components/About';
// import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
// import Alert from './components/Alert';
// import React from "react";
// // import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// // import {
// //      BrowserRouter as Router,
// //      AbortedDeferredError,
// //      Route,
// //      Link,
// //    } from "react-router-dom";

// function MyApp() {
//   const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
//   const [alert, setAlert] = useState(null);

//   // alert
//   const showAlert = (message, type) => {
//     setAlert({
//       msg: message,
//       type: type
//     });
//     setTimeout(() => {
//       setAlert(null);
//     }, 2000);
//   };

//   const toggleMode = () => {
//     if (mode === 'light') {
//       setMode('dark');
//       document.body.style.backgroundColor = 'grey';
//       showAlert("Dark mode is enabled", "success");
//     } else {
//       setMode('light');
//       document.body.style.backgroundColor = 'white';
//       showAlert("Light mode is enabled", "success");
//     }
//   };

//   return (
//     // <Router>
//       <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
//       <Alert alert={alert} />
//       <div className="container my-3">
//         {/* <Switch> */}
//           {/* <Route path="/about" component={About} /> */}
//           <Route path="/" component={() => <TextForm showAlert={showAlert} heading="Enter a text to analyze below " />} />
//         {/* </Switch> */}
//       </div>
//     // </Router>
//   );
// }

// export default MyApp;

