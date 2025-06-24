import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CartProvider } from "./context/CartContext"

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/home";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import ErrorPage from "./components/Error/ErrorPage";
import Checkout from "./components/Checkout/Checkout"
import Cart from "./components/Cart/Cart";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="body ">
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <Home />
              }
            />
            <Route
              path="/categoria/:idCategoria"
              element={
                <Home  />
              }
            />
            <Route path="/detalle/:productoId" element={<ItemDetailContainer />} />
            {/* <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} /> */}
            <Route path="/error" element={<ErrorPage />} />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
