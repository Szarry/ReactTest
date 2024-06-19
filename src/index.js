import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createTheme, ThemeProvider} from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById('root'));

export const themeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#3f51b5',
        },
        secondary: {
            main: '#f50057',
        },
    },
};

const theme = createTheme(themeOptions);

root.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
      <App />
      </ThemeProvider>
  </React.StrictMode>
);