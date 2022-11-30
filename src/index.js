import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './view/components/App';
import './view/components/MathSimulator/style.css'
import MathSimulator from './view/components/MathSimulator';
// import ErrorBounddaries from './view/components/ErrorBoundaries';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ErrorBounddaries>
    <App />
    </ErrorBounddaries> */}
    <MathSimulator />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
