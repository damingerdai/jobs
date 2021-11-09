import { createTheme, ThemeProvider } from "@mui/material/styles";

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Provider, useSelector } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import { store, RootState } from './slices/store';
import { PrimaryLayout } from './layout';
import Navbar from "./components/nav";

import "./styles.scss";


function App() {
  const Theme = createTheme();
  const [theme, setTheme] = useState(Theme);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <Navbar brand={"Jobs UI"} toggleMode={(mode) => {
          const newTheme = createTheme({
            palette: {
              mode
            }
          });
          setTheme(newTheme);
          const bgColor = newTheme.palette.background.paper;
          document.body.style.backgroundColor = bgColor;
        }} />
        <PrimaryLayout />
      </ThemeProvider>
    </Provider>
  );
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));
