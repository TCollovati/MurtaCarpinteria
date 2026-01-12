import './App.css'
import NavBar from './components/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import ItemDetailContainer from './components/ItemDetailContainer.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router'

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />

        <Route path="/products/:itemTITLE" element={<ItemDetailContainer />} />
        <Route path="/aboutus" element={<h1>Sobre Nosotros</h1>} />

        <Route
          path="*"
          element={
            <div>
              <h1>404: Page not found</h1>
              <Link to="/">Regresar al home</Link>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
