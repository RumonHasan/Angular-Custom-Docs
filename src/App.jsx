import React, { useState } from 'react';
import Main from '../layout/Main.jsx';
import './App.css';
import { customTheme } from './theme/colors.js';
// theme provider
import { ThemeProvider } from 'styled-components';
// router stuffs
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <BrowserRouter>
        <React.Fragment>
          <Main />
        </React.Fragment>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
