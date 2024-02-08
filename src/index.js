import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, doc, query, where, getDocs } from 'firebase/firestore'; 
import { getAnalytics } from 'firebase/analytics';
import { Produtos } from './produtos'; 

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
const firestore = getFirestore(firebaseApp);
export { firebaseApp, getFirestore };

async function saveProductsToFirestore() {
  const produtosCollection = collection(firestore, 'Produto');

  try {
    for (const produto of Produtos) {
      const q = query(produtosCollection, where("name", "==", produto.name));
      const querySnapshot = await getDocs(q);
      
      if (querySnapshot.empty) {
        const docRef = await addDoc(produtosCollection, produto);
        console.log(`Produto "${produto.name}" adicionado ao Firestore com ID: ${docRef.id}`);
      } else {
        console.log(`Produto "${produto.name}" já existe no Firestore. Ignorando.`);
      }
    }
    console.log('Todos os produtos foram verificados e salvos no Firestore!');
  } catch (error) {
    console.error('Erro ao salvar os produtos:', error);
  }
}

saveProductsToFirestore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
