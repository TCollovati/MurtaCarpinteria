import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import { CartProvider } from './context/cartContext'; 
import CartContainer from './components/CartContainer';
import products from "./data/products";


function App() {
  return (
    <BrowserRouter>
        <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}
          />

          <Route path="/category/:categoryID" element={<ItemListContainer />} />
          <Route path="/product/:itemID" element={<ItemDetailContainer />} />
          <Route path="/cart" element = { <CartContainer />} /> 
          <Route path="*" element={<div>
            <h1>404: Page not found</h1>
            <Link to="/">Regresar al home</Link>
          </div>
          }
          />
        </Routes>
        </CartProvider>
    </BrowserRouter>
  )
}

export default App