import "./Home.scss";
import { getAllProductsAsync } from "../../redux/slices/productSlice";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const Home = () => {
  let products = useSelector((state) => state.products.products);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductsAsync());
  }, [dispatch]);

  return (
    <>
      <header
        id="header"
        className="vh-100 carousel slide"
        data-bs-ride="carousel"
      >
        <div className="container h-100 d-flex align-items-center carousel-inner">
          <div
            className="text-center carousel-item active phrase"
            data-bs-interval="1000"
          >
            <h2 className="text-capitalize text-white">Best price & offer</h2>
            <h1 className="text-uppercase py-2 fw-bold text-white">
              new season
            </h1>
            <a
              className="btn mt-3 text-uppercase shopButton"
              onClick={() => navigate("/store")}
            >
              buy now
            </a>
          </div>
        </div>
      </header>

      {/* popular products */}

      <section id="new" className="py-5">
        <div className="container">
          <div className="title text-center">
            <h2 className="position-relative d-inline-block">New Arrival</h2>
          </div>

          <div className="row g-0">
            <div className="collection-list mt-4 row gx-0 gy-3">
              {products?.products
                .map((product) => (
                  <div
                    className="col-md-6 col-lg-4 col-xl-3 p-2 best"
                    type="button"
                    onClick={() => navigate(`/details/${product._id}`)}
                    key={product._id}
                  >
                    <div className="collection-img position-relative">
                      <img src={product.photo[0]} className="w-100" alt="" />
                      <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                        sale
                      </span>
                    </div>
                    <div className="text-center">
                      <p className="text-capitalize my-1">{product.name}</p>
                      <span className="fw-bold">$ {product.price}</span>
                    </div>
                  </div>
                ))
                .filter((product, i) => i < 8)}
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Offer --> */}
      <section id="offers" className="py-5">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center text-center justify-content-lg-start text-lg-start">
            <div className="offers-content">
              <span className="text-white">Discount Up To 40%</span>
              <h2 className="mt-2 mb-4 text-white">Grand Sale Offer!</h2>
              <a className="btn shopButton" onClick={() => navigate("/store")}>
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end of Offer --> */}

      {/* <!-- about us --> */}
      <section id="aboutUs" className="py-5">
        <div className="container">
          <div className="row gy-lg-5 align-items-center">
            <div className="col-lg-6 order-lg-1 text-center text-lg-start">
              <div className="title pt-3 pb-5">
                <h2 className="position-relative d-inline-block ms-4">
                  About Us
                </h2>
              </div>
              <p className="lead text-muted">
                Shop for women's and men's fashion, beauty and home essentials
                online!
              </p>
              <p>
                Our Conscious choice products are created with a little extra
                consideration for the planet: at least 50% of each piece is made
                from more sustainable materials, like organic cotton or recycled
                polyester. The only exception is recycled cotton, which for
                quality reasons, can only make up 20% of a product.
              </p>
            </div>
            <div className="col-lg-6 order-lg-0">
              <img
                src="https://res.cloudinary.com/vengui/image/upload/v1652926808/ecommerce/login-images/about_us_vkdjeq.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
