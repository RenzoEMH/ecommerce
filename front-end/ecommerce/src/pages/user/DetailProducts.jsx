import "./DetailProduct.scss";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOneProductsAsync } from "../../redux/slices/productSlice";
import { useEffect } from "react";

const DetailProduct = (props) => {
  const { onAdd } = props;
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);
  useEffect(() => {
    dispatch(getOneProductsAsync(productId));
  }, []);

  return (
    <div className="small-container single-product container">
      <br />
      <br />
      <div className="row">
        <div className="col-2">
          <img
            src={product?.products.photo[0]}
            alt=""
            id="ProductImg"
            width="100%"
          />
          <div className="small-img-row">
            {product?.products.photo.map((photo) => (
              <div className="small-img-col">
                <img src={photo} alt="" width="100%" className="small-img" />
              </div>
            ))}
          </div>
        </div>
        <div className="col-2">
          <p>Products / {product?.products.type}</p>
          <h1>{product?.products.name}</h1>
          <h4>${product?.products.price}</h4>
          {product?.products.size.length > 0 ? (
            <div className="row">
              <div className="col-md-6">
                <h4>Select size:</h4>
              </div>
              <div className="col-md-6">
                <select name="" id="" className="mt-2 mb-2">
                  {product?.products.size.map((size) => (
                    <option value="">{size}</option>
                  ))}
                </select>
              </div>
            </div>
          ) : (
            <></>
          )}

          <button
            className="btn btn-danger mb-1"
            onClick={() => onAdd(product?.products)}
          >
            Add to cart
          </button>
          <h3 className="mt-4">Product Details</h3>
          <p>{product?.products.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
