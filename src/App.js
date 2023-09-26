import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import ProductsContainer from "./containers/ProductsContainer";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/products" element={<ProductsContainer />} />
        <Route path="/products/:category" element={<ProductsContainer />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
