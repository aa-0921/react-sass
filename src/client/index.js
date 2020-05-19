import React from "react";
import ReactDOM from "react-dom";
import { response } from "express";

fetch('/api/').then(response => {
  console.log(response.json());
})

export const Index = () => {
  return <div>Hello React!</div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));
