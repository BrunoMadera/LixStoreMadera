import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCpvnepyKdaibyFoC1S1ZavHPWPuEzu4co",
  authDomain: "lix-store.firebaseapp.com",
  projectId: "lix-store",
  storageBucket: "lix-store.appspot.com",
  messagingSenderId: "368975085440",
  appId: "1:368975085440:web:856c56f4885dcae2cacb65",
  measurementId: "G-DKXGZGB66R"
};

const firebaseApp = initializeApp(firebaseConfig);

export { firebaseApp, getFirestore };
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
