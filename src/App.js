import React from 'react';
import './App.css';
import Home from './component/Home/Home';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';  

const theme = createMuiTheme({
  palette: {
     primary: {
        light: '#fff',
        main: '#e7643d',
        dark: '#000'
     },
     secondary: {
       main: '#f44336',
     },
  },
  typography: { 
     useNextVariants: true
  }
});

function App() {
  return (
    <div className="App">
       <MuiThemeProvider theme = { theme }>
          <Home/>
       </MuiThemeProvider>
    </div>
  );
}

export default App;
