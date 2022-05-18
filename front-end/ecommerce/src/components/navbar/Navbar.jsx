// import Navbar from "react-bootstrap/Navbar";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../../redux/slices/usersSlice";
import { useNavigate } from "react-router-dom";
import parseJwt from "../../utils/ParseJwt";

import "./Navbar.scss";

const NavbarMain = () => {
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
              <img src="" alt="" />
              <span className="text-uppercase fw-lighter ms-2">Store</span>
            </p>
          </Link>
          <div className="order-lg-2">
            <Link to="search">
              <button type="button" className="btn position-relative">
                <i className="bi bi-search"></i>
              </button>
            </Link>
            <Link to="/shopcart">
              <button type="button" className="btn position-relative">
                <i className="bi bi-cart-fill"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge bg-primary">
                  5
                </span>
              </button>
            </Link>
            {sesion ? (
              <>
                <Link to="/profile">
                  <button type="button" className="btn position-relative">
                    <i class="bi bi-person-fill"></i>
                  </button>
                </Link>

                <button
                  type="button"
                  className="btn position-relative"
                  onClick={cerrarSesion}
                >
                  <i class="bi bi-box-arrow-right"></i>
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
                <a
                  href="#aboutUs"
                  className="nav-link text-uppercase text-dark"
                >
                  About us
                </a>
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
    // <>
    //   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    //     <Container>
    //       <Navbar.Brand href="/">Title</Navbar.Brand>
    //       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //       <Navbar.Collapse id="responsive-navbar-nav">
    //         <Nav className="me-auto">
    //           <Nav.Link href="/">About us</Nav.Link>
    //         </Nav>
    //         <Nav>
    //           <Nav.Link href="/">Home</Nav.Link>
    //           <Nav.Link href="/store">Products</Nav.Link>
    //           <Button variant="outline-light" href="/login">
    //             Login
    //           </Button>
    //         </Nav>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>
    // </>
  );
};
export default NavbarMain;
