import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement('h1', null, 'Hello World!');

const l1 = React.createElement('li', null, 'Bananas');
const l2 = React.createElement('li', null, 'Milk');
const l3 = React.createElement('li', null, 'Bread');

const groceryList = React.createElement('ol', null, [l1, l2, l3]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    [heading, groceryList]
)



// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
