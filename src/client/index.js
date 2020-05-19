import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));


fetch('/api/').then(response => {
  console.log(response.json());
})

export const Index = () => {
  return <div>Hello React!</div>;
};

ReactDOM.render(<Index />, document.getElementById('index'));
