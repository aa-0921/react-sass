import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

export const Index = () => {
  return <div>name</div>;
};

ReactDOM.render(<Index />, document.getElementById('index'));

// fetch('/api/').then(response => {
//   console.log(response.json());
// })
