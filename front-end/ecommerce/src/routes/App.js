import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import parseJwt from "../utils/ParseJwt";
import Home from "../pages/general/Home";
import Login from "../pages/general/Login";
import Register from "../pages/general/Register";
import Profile from "../pages/user/Profile";
import ShopCart from "../pages/user/Shopcart";
import SearchProduct from "../pages/user/SearchProduct";
import NavbarMain from "../components/navbar/Navbar";
import Store from "../pages/user/Store";
import EditProfile from "../pages/user/EditProfile";
import DetailProduct from "../pages/user/DetailProducts";
import { useState } from "react";

function App() {
  const token = useSelector((state) => state.usuarios.token);
  const sesion = parseJwt(token);
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x._id === product._id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x._id !== product._id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x._id === product._id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  const deleteItem = (product) => {
    setCartItems(cartItems.filter((x) => x._id !== product._id));
  };

  return (
    <div className="App">
      <NavbarMain cartItems={cartItems} />
      <Routes>
        <Route
          exact
          path="/"
          element={sesion?.type === "admin" ? <Profile /> : <Home />}
        />
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
        <Route exact path="/profile_edit" element={<EditProfile />} />
      </Routes>
      <Routes>
        <Route
          exact
          path="/details/:productId"
          element={<DetailProduct onAdd={onAdd} />}
        />
      </Routes>
      <Routes>
        <Route
          exact
          path="/shopcart"
          element={
            <ShopCart
              onAdd={onAdd}
              onRemove={onRemove}
              cartItems={cartItems}
              deleteItem={deleteItem}
            />
          }
        />
      </Routes>
      <Routes>
        <Route exact path="/search" element={<SearchProduct />} />
      </Routes>
      <Routes>
        <Route exact path="/store" element={<Store onAdd={onAdd} />} />
      </Routes>
    </div>
  );
}

export default App;
