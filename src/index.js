import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//This lets you use react router to all the components you have enclosed with this.
import { BrowserRouter } from 'react-router-dom';

//Renders our entire react app in the index.html inside the div with id of root
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


