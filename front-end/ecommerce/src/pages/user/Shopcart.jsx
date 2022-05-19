import "./Shopcart.scss";
import { useState, useEffect } from "react";

const ShopCart = (props) => {
  const { cartItems, onAdd, onRemove, deleteItem } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = 2;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  const [description, setDescription] = useState("");

  useEffect(() => {
    setDescription(
      cartItems.reduce(
        (acc, curr, index) =>
          `${acc}${index !== 0 ? " || " : ""}${curr.name} - ${curr.type} X ${
            curr.price
          }`,
        ""
      )
    );
  }, [cartItems]);

  let handler = window.ePayco.checkout.configure({
    key: "29f3d11ce1c378d3dd6ebef689530451",
    test: true,
  });

  const openPayment = () => {
    let data = {
      name: "Ecommerce",
      description: description,
      currency: "usd",
      amount: totalPrice,
      tax_base: "0",
      tax: "0",
      country: "pe",
      lang: "es",
      external: "false",
      response: "http://localhost:3000/confirmation",
      methodsDisable: ["PSE", "SP", "CASH", "DP"],
    };
    console.log(handler);

    handler.open(data);
  };
  return (
    <div className="container-fluid">
      <hr />
      <hr />
      <hr />
      <div className="row">
        <div className="col-md-10 col-11 mx-auto">
          <div className="row mt-5 gx-3">
            <div className="col-md-12 col-lg-8 col-11 mx-auto main_cart mb-lg-0 mb-5 shadow">
              <h2 className="py-4 font-weight-bold">
                Cart: {cartItems.length} items
              </h2>
              {cartItems.map((item) => (
                <>
                  <div className="card p-4">
                    <div className="row">
                      <div className="col-md-5 col-11 mx-auto bg-light d-flex justify-content-center align-items-center shadow product_img">
                        <img
                          src={item.photo[0]}
                          className="img-fluid"
                          alt="cart img"
                        />
                      </div>

                      <div className="col-md-7 col-11 mx-auto px-4 mt-2">
                        <div className="row">
                          <div className="col-6 card-title">
                            <h1 className="mb-4 product_name">{item.name}</h1>
                            <p className="mb-2">{item.type}</p>
                            <p className="mb-2">COLOR: BLUE</p>
                            <p className="mb-3">{item.size[0]}</p>
                          </div>

                          <div className="col-6">
                            <ul className="pagination justify-content-end set_quantity">
                              <li className="page-item">
                                <button
                                  className="page-link "
                                  onClick={() => onRemove(item)}
                                >
                                  <i className="bi bi-dash"></i>
                                </button>
                              </li>
                              <li className="page-item">
                                <p className="page-link">{item.qty}</p>
                              </li>
                              <li className="page-item">
                                <button
                                  className="page-link"
                                  onClick={() => onAdd(item)}
                                >
                                  <i className="bi bi-plus"></i>
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-8 d-flex justify-content-between remove_wish">
                            <p type="button" onClick={() => deleteItem(item)}>
                              <i className="bi bi-trash-fill"></i> REMOVE ITEM
                            </p>
                          </div>
                          <div className="col-4 d-flex justify-content-end price_money">
                            <h3>
                              $<span id="itemval">{item.price} </span>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                </>
              ))}
            </div>

            <div className="col-md-12 col-lg-4 col-11 mx-auto mt-lg-0 mt-md-5">
              <div className="right_side p-3 shadow bg-white">
                <h2 className="product_name mb-5">The Total Amount Of</h2>
                <div className="price_indiv d-flex justify-content-between">
                  <p>Products price</p>
                  <p>
                    $<span id="product_total_amt">{itemsPrice.toFixed(2)}</span>
                  </p>
                </div>
                <div className="price_indiv d-flex justify-content-between">
                  <p>Tax price</p>
                  <p>
                    $<span id="product_total_amt">{taxPrice.toFixed(2)}</span>
                  </p>
                </div>
                <div className="price_indiv d-flex justify-content-between">
                  <p>Shipping Charge</p>
                  <p>
                    $
                    <span id="shipping_charge">
                      {cartItems.length !== 0 ? shippingPrice.toFixed(2) : 0}
                    </span>
                  </p>
                </div>
                <hr />
                <div className="total-amt d-flex justify-content-between font-weight-bold">
                  <p>Total amount</p>
                  <p>
                    $
                    <span id="total_cart_amt">
                      {cartItems.length !== 0 ? totalPrice.toFixed(2) : 0}
                    </span>
                  </p>
                </div>
                <button
                  className="btn btn-danger text-uppercase"
                  onClick={openPayment}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCart;
