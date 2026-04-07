import React from 'react';
import ReactDOM from 'react-dom/client';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import "./theme.css";

// Import Font Awesome CSS
import '@fortawesome/fontawesome-free/css/all.min.css';

// Import Swiper CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import main CSS (this should be last)
import './index.css';
import './custom-theme.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
