import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import StartScreen from './components/StartScreen';
import InitialScreening from './components/InitialScreening';

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route exact path= "/" Component={StartScreen} />
        <Route exact path= "/screening" Component={InitialScreening} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
