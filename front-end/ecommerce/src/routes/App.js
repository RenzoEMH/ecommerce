import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import parseJwt from "../utils/ParseJwt";
import RequireAuth from "../utils/RequireAuth";
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
import PurchaseConfirmation from "../pages/user/PurchaseConfirmation";
import PurchaseHistory from "../pages/user/PurchaseHistory";
import SaleDetails from "../pages/user/SaleDetails";

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
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route
          exact
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/profile_edit"
          element={
            <RequireAuth>
              <EditProfile />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/details/:productId"
          element={<DetailProduct onAdd={onAdd} />}
        />
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
        <Route exact path="/search" element={<SearchProduct onAdd={onAdd} />} />
        <Route exact path="/store" element={<Store onAdd={onAdd} />} />
        <Route
          exact
          path="/confirmation"
          element={
            <RequireAuth>
              <PurchaseConfirmation />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/list"
          element={
            <RequireAuth>
              <PurchaseHistory />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/sale_details"
          element={
            <RequireAuth>
              <SaleDetails />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
