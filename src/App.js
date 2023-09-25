import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import ProductsContainer from "./containers/ProductsContainer";
import NavBar from "./components/NavBar";
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
    </div>
  );
}

export default App;
