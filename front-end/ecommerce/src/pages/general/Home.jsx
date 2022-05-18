import "./Home.scss";
import { useSelector } from "react-redux";
import parseJwt from "../../utils/ParseJwt";
// import Cards from "../../components/home/Cards";

const Home = () => {
  const token = useSelector((state) => state.usuarios.token);
  const sesion = parseJwt(token);
  return (
    <>
      <header
        id="header"
        className="vh-100 carousel slide"
        data-bs-ride="carousel"
      >
        <div className="container h-100 d-flex align-items-center carousel-inner">
          <div className="text-center carousel-item active">
            <h2 className="text-capitalize text-white">Best collection</h2>
            <h1 className="text-uppercase py-2 fw-bold text-white">
              new arrivals
            </h1>
            <a href="/store" className="btn mt-3 text-uppercase shopButton">
              shop now
            </a>
          </div>
          <div className="text-center carousel-item">
            <h2 className="text-capitalize text-white">Best price & offer</h2>
            <h1 className="text-uppercase py-2 fw-bold text-white">
              new season
            </h1>
            <a href="/store" className="btn mt-3 text-uppercase shopButton">
              buy now
            </a>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#header"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#header"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </header>

      {/* popular products */}

      <section id="collection" className="py-5">
        <div className="container">
          <div className="title text-center">
            <h2 className="position-relative d-inline-block">New Arrival</h2>
          </div>

          <div className="row g-0">
            <div className="d-flex flex-wrap justify-content-center mt-5 filter-button-group">
              <button
                type="button"
                className="btn m-2 text-dark active-filter-btn"
                data-filter="*"
              >
                All
              </button>
              <button
                type="button"
                className="btn m-2 text-dark"
                data-filter=".best"
              >
                Best Sellers
              </button>
              <button
                type="button"
                className="btn m-2 text-dark"
                data-filter=".feat"
              >
                Featured
              </button>
              <button
                type="button"
                className="btn m-2 text-dark"
                data-filter=".new"
              >
                New Arrival
              </button>
            </div>

            <div className="collection-list mt-4 row gx-0 gy-3">
              <div className="col-md-6 col-lg-4 col-xl-3 p-2 best">
                <div className="collection-img position-relative">
                  <img
                    src="https://res.cloudinary.com/vengui/image/upload/v1646869524/sample.jpg"
                    className="w-100"
                    alt=""
                  />
                  <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                    sale
                  </span>
                </div>
                <div className="text-center">
                  <div className="rating mt-3">
                    <span className="text-primary">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-primary">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-primary">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-primary">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-primary">
                      <i className="fas fa-star"></i>
                    </span>
                  </div>
                  <p className="text-capitalize my-1">gray shirt</p>
                  <span className="fw-bold">$ 45.50</span>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 col-xl-3 p-2 feat">
                <div className="collection-img position-relative">
                  <img
                    src="https://res.cloudinary.com/vengui/image/upload/v1646869524/sample.jpg"
                    className="w-100"
                    alt=""
                  />
                  <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                    sale
                  </span>
                </div>
                <div className="text-center">
                  <div className="rating mt-3">
                    <span className="text-primary">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-primary">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-primary">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-primary">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-primary">
                      <i className="fas fa-star"></i>
                    </span>
                  </div>
                  <p className="text-capitalize my-1">gray shirt</p>
                  <span className="fw-bold">$ 45.50</span>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 col-xl-3 p-2 new">
                <div className="collection-img position-relative">
                  <img
                    src="https://res.cloudinary.com/vengui/image/upload/v1646869524/sample.jpg"
                    className="w-100"
                    alt=""
                  />
                  <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                    sale
                  </span>
                </div>
                <div className="text-center">
                  <div className="rating mt-3">
                    <span className="text-primary">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-primary">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-primary">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-primary">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-primary">
                      <i className="fas fa-star"></i>
                    </span>
                  </div>
                  <p className="text-capitalize my-1">gray shirt</p>
                  <span className="fw-bold">$ 45.50</span>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 col-xl-3 p-2 best">
                <div className="collection-img position-relative">
                  <img
                    src="https://res.cloudinary.com/vengui/image/upload/v1646869524/sample.jpg"
                    className="w-100"
                    alt=""
                  />
                  <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                    sale
                  </span>
                </div>
                <div className="text-center">
                  <div className="rating mt-3">
                    <span className="text-primary">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-primary">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-primary">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-primary">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-primary">
                      <i className="fas fa-star"></i>
                    </span>
                  </div>
                  <p className="text-capitalize my-1">gray shirt</p>
                  <span className="fw-bold">$ 45.50</span>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 col-xl-3 p-2 feat">
                <div className="collection-img position-relative">
                  <img
                    src="https://res.cloudinary.com/vengui/image/upload/v1646869524/sample.jpg"
                    className="w-100"
                    alt=""
                  />
                  <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                    sale
                  </span>
                </div>
                <div className="text-center">
                  <div className="rating mt-3">
                    <span className="text-primary">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-primary">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-primary">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-primary">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-primary">
                      <i className="fas fa-star"></i>
                    </span>
                  </div>
                  <p className="text-capitalize my-1">gray shirt</p>
                  <span className="fw-bold">$ 45.50</span>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 col-xl-3 p-2 new">
                <div className="collection-img position-relative">
                  <img
                    src="https://res.cloudinary.com/vengui/image/upload/v1646869524/sample.jpg"
                    className="w-100"
                    alt=""
                  />
                  <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                    sale
                  </span>
                </div>
                <div className="text-center">
                  <div className="rating mt-3">
                    <span className="text-primary">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-primary">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-primary">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-primary">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-primary">
                      <i className="fas fa-star"></i>
                    </span>
                  </div>
                  <p className="text-capitalize my-1">gray shirt</p>
                  <span className="fw-bold">$ 45.50</span>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 col-xl-3 p-2 best">
                <div className="collection-img position-relative">
                  <img
                    src="https://res.cloudinary.com/vengui/image/upload/v1646869524/sample.jpg"
                    className="w-100"
                    alt=""
                  />
                  <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                    sale
                  </span>
                </div>
                <div className="text-center">
                  <div className="rating mt-3">
                    <span className="text-primary">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-primary">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-primary">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-primary">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-primary">
                      <i className="fas fa-star"></i>
                    </span>
                  </div>
                  <p className="text-capitalize my-1">gray shirt</p>
                  <span className="fw-bold">$ 45.50</span>
                </div>
              </div>

              <div className="col-md-6 col-lg-4 col-xl-3 p-2 feat">
                <div className="collection-img position-relative">
                  <img
                    src="https://res.cloudinary.com/vengui/image/upload/v1646869524/sample.jpg"
                    className="w-100"
                    alt=""
                  />
                  <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                    sale
                  </span>
                </div>
                <div className="text-center">
                  <div className="rating mt-3">
                    <span className="text-primary">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-primary">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-primary">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-primary">
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="text-primary">
                      <i className="fas fa-star"></i>
                    </span>
                  </div>
                  <p className="text-capitalize my-1">gray shirt</p>
                  <span className="fw-bold">$ 45.50</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- blogs --> */}
      <section id="offers" className="py-5">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center text-center justify-content-lg-start text-lg-start">
            <div className="offers-content">
              <span className="text-white">Discount Up To 40%</span>
              <h2 className="mt-2 mb-4 text-white">Grand Sale Offer!</h2>
              <a href="/store" className="btn shopButton">
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end of blogs --> */}

      {/* <!-- about us --> */}
      <section id="about" className="py-5">
        <div className="container">
          <div className="row gy-lg-5 align-items-center">
            <div className="col-lg-6 order-lg-1 text-center text-lg-start">
              <div className="title pt-3 pb-5">
                <h2 className="position-relative d-inline-block ms-4">
                  About Us
                </h2>
              </div>
              <p className="lead text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                ipsam.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem fuga blanditiis, modi exercitationem quae quam
                eveniet! Minus labore voluptatibus corporis recusandae
                accusantium velit, nemo, nobis, nulla ullam pariatur totam quos.
              </p>
            </div>
            <div className="col-lg-6 order-lg-0">
              <img
                src="https://res.cloudinary.com/vengui/image/upload/v1652031453/main_2_jaarts.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </>

    // <div className="home-container">
    //   <div className="main-top ">
    //     <div className="section1">
    //       <img
    //         className="main-img"
    //         src="https://res.cloudinary.com/vengui/image/upload/v1652030909/main_sc35xs.jpg"
    //         alt=""
    //       />
    //       <div className="section1-text">
    //         <h2>BGames</h2>
    //         <h1>Vamo a juga!!</h1>
    //         <p>
    //           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
    //           omnis accusantium fuga commodi delectus quia ab minus,
    //         </p>
    //         <button className="btn btn-danger">Shop Now</button>
    //       </div>
    //     </div>
    //     <div className="section2 d-flex justify-content-around">
    //       <img
    //         className="main-img-2"
    //         src="https://res.cloudinary.com/vengui/image/upload/v1652031453/main_2_jaarts.jpg"
    //         alt=""
    //       />
    //       <div className="section2-text">
    //         <h4>Welcome to BGames</h4>
    //         <h1>WE ARE A BOARD GAME STORE</h1>
    //         <p>
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
    //           quia pariatur cum, blanditiis possimus aperiam commodi in qui
    //           adipisci harum, eligendi tempora sed! Ipsum vitae nisi iure modi
    //           iste sunt. Lorem ipsum dolor sit amet, consectetur adipisicing
    //           elit. Assumenda vero sunt nobis reprehenderit laudantium quo
    //           distinctio laboriosam, eaque error porro nesciunt ad quae
    //           necessitatibus nam magnam architecto minima aspernatur quam? Lorem
    //         </p>
    //         <button className="btn btn-danger">Learn more</button>
    //       </div>
    //     </div>
    //     <div className="section3 container">
    //       <h1>POPULAR PRODUCTS</h1>
    //       <div className="divider div-transparent div-dot"></div>
    //       <Cards />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Home;
