import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { PrimaryLayout } from './layout';
import Navbar from "./components/nav";

import "./styles.scss";


function App() {
  const Theme = createTheme();
  const [theme, setTheme] = useState(Theme);

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));
