import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../../redux/slices/usersSlice";
import { useNavigate } from "react-router-dom";
import parseJwt from "../../utils/ParseJwt";
import { HashLink } from "react-router-hash-link";

import "./Navbar.scss";

const NavbarMain = (props) => {
  const { cartItems } = props;
  const token = useSelector((state) => state.usuarios.token);
  const sesion = parseJwt(token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cerrarSesion = () => {
    dispatch(setToken(null));
    navigate("/", { replace: true });
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-ligth bg-white py-3 fixed-top">
        <div className="container">
          <Link to="/">
            <p className="navbar-brand d-flex justify-content-between align-items-center order-lg-0">
              <img
                src="https://res.cloudinary.com/vengui/image/upload/v1652120270/bg-logo-png-transparent_uzguei.png"
                alt=""
              />
              <span className=" fw-lighter ms-2">BGstore</span>
            </p>
          </Link>
          <div className="order-lg-2">
            <Link to="/shopcart">
              <button type="button" className="btn position-relative">
                <i className="bi bi-cart-fill"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge bg-primary">
                  {cartItems.length}
                </span>
              </button>
            </Link>
            {sesion ? (
              <>
                <Link to="/list">
                  <button type="button" className="btn position-relative">
                    <i class="bi bi-list-check" style={{ fontSize: 18 }}></i>
                  </button>
                </Link>
                <Link to="/profile">
                  <button type="button" className="btn position-relative">
                    <i className="bi bi-person-fill"></i>
                  </button>
                </Link>

                <button
                  type="button"
                  className="btn position-relative"
                  onClick={cerrarSesion}
                >
                  <i className="bi bi-box-arrow-right"></i>
                </button>
              </>
            ) : (
              <Link to="/login">
                <button
                  type="button"
                  className="btn shopButton position-relative"
                  style={{ marginLeft: 15 }}
                >
                  Login
                </button>
              </Link>
            )}
          </div>

          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
          >
            <span className="navbar-toggler-icon burger-toggler">
              <i className="bi bi-list burger-bi-nav burger"></i>
            </span>
          </button>

          <div className="navbar-collapse collapse order-lg-1" id="navMenu">
            <ul className="navbar-nav mx-auto text-center">
              <Link to="/">
                <li className="nav-item px-2 py-2">
                  <a href="/" className="nav-link text-uppercase text-dark">
                    Home
                  </a>
                </li>
              </Link>
              <li className="nav-item px-2 py-2">
                <HashLink smooth to="/#new">
                  <a className="nav-link text-uppercase text-dark">
                    New Arrival
                  </a>
                </HashLink>
              </li>
              <li className="nav-item px-2 py-2">
                <HashLink smooth to="/#aboutUs">
                  <a className="nav-link text-uppercase text-dark">About us</a>
                </HashLink>
              </li>
              <li className="nav-item px-2 py-2">
                <a href="/store" className="nav-link text-uppercase text-dark">
                  Products
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavbarMain;
