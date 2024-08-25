import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
const RootP = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default RootP;
