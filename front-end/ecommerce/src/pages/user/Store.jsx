import "./Store.scss";
import { getAllProductsAsync } from "../../redux/slices/productSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Store = (props) => {
  const { onAdd } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let products = useSelector((state) => state.products.products);
  useEffect(() => {
    dispatch(getAllProductsAsync());
  }, [dispatch]);

  const filterProduct = (e) => {
    products = products?.products.filter(
      (item) => item.type === e.target.value
    );
    navigate("/search", { state: products });
  };

  return (
    <div className="container">
      <hr />
      <hr />
      <hr />
      <hr />
      <div className="row">
        <div className="col text-center my-4">
          <h1 className="fs-2">Our Products</h1>
          <div className="underline mx-auto mt-3"></div>
        </div>
      </div>

      <div className="row mt-3 mb-4 button-group filter-button-group">
        <div className="col d-flex justify-content-center">
          <button type="button" className="btn btn-primary mx-1 text-dark">
            All
          </button>
          <button
            type="button"
            className="btn btn-primary mx-1 text-dark"
            value="Pants"
            onClick={(e) => filterProduct(e)}
          >
            Pants
          </button>
          <button
            type="button"
            className="btn btn-primary mx-1 text-dark"
            value="Shirt"
            onClick={(e) => filterProduct(e)}
          >
            Shirts
          </button>
          <button
            type="button"
            className="btn btn-primary mx-1 text-dark"
            value="T-Shirt"
            onClick={(e) => filterProduct(e)}
          >
            T-Shirts
          </button>
          <button
            type="button"
            className="btn btn-primary mx-1 text-dark"
            value="Shoes"
            onClick={(e) => filterProduct(e)}
          >
            Shoes
          </button>
          <button
            type="button"
            className="btn btn-primary mx-1 text-dark"
            value="Jacket"
            onClick={(e) => filterProduct(e)}
          >
            Jacket
          </button>
          <button
            type="button"
            className="btn btn-primary mx-1 text-dark"
            value="Accesories"
            onClick={(e) => filterProduct(e)}
          >
            Accesories
          </button>
        </div>
      </div>

      <div className="row justify-content-center g-4" id="product-list">
        {products?.products.map((product) => (
          <div className="col-lg-4 col-md-6 electronic" key={product._id}>
            <div className="product-item">
              <div className="product-img">
                <img
                  src={product.photo[0]}
                  className="img-fluid d-block mx-auto"
                  alt=""
                />
              </div>
              <div className="product-content text-center py-3">
                <span className="d-block text-uppercase fw-bold">
                  {product.name}
                </span>
                <span className="d-block">$ {product.price}</span>
              </div>
              <div className="row">
                <button
                  className="btn btn-secondary col-md-4 mb-4"
                  onClick={() => navigate(`/details/${product._id}`)}
                >
                  Details
                </button>
                <button
                  className="btn btn-danger col-md-4 mb-4"
                  onClick={() => onAdd(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
