import './App.css';

import React, { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/themes";

// you can ignore line 10 as login component is not used
import Login from './components/SignUp'



const App = () => {

  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}


  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = (checked = false) => {
    setDarkMode(checked);
  };

  return (

    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <>
    <GlobalStyles/>
    <button style={{border: 'none', outline:'none' , backgroundColor: 'transparent' }} onClick={themeToggler}>
    <DarkModeSwitch
      style={{ marginBottom: '2rem' }}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={65}
      moonColor="white"
      sunColor="black"
      
    />
    </button>
    </>
    
      <br></br>
      <h1 style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        Display The UI you want to
      </h1>
      {/* <Login/> */}
    </ThemeProvider>
  );



};

export default App;
