import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CheckOut from './components/CheckOut';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartContextProvider } from './contexts/CartContext';


export default function App() {

  return (

    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/CheckOut" element={<CheckOut />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}