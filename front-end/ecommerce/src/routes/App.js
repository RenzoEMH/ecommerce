import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/general/Home";
import Login from "../pages/general/Login";
import Register from "../pages/general/Register";
import Profile from "../pages/user/Profile";
import ShopCart from "../pages/user/Shopcart";
import SearchProduct from "../pages/user/SearchProduct";
import NavbarMain from "../components/navbar/Navbar";
import Store from "../pages/user/Store";

function App() {
  return (
    <div className="App">
      <NavbarMain />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path="/register" element={<Register />} />
      </Routes>
      <Routes>
        <Route exact path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
      <Routes>
        <Route exact path="/shopcart" element={<ShopCart />} />
      </Routes>
      <Routes>
        <Route exact path="/search" element={<SearchProduct />} />
      </Routes>
      <Routes>
        <Route exact path="/store" element={<Store />} />
      </Routes>
    </div>
  );
}

export default App;
