import "./Shopcart.scss";

const ShopCart = () => {
  return (
    <div className="container-fluid">
      <hr />
      <hr />
      <hr />
      <div className="row">
        <div className="col-md-10 col-11 mx-auto">
          <div className="row mt-5 gx-3">
            <div className="col-md-12 col-lg-8 col-11 mx-auto main_cart mb-lg-0 mb-5 shadow">
              <div className="card p-4">
                <h2 className="py-4 font-weight-bold">Cart (2 items)</h2>
                <div className="row">
                  <div className="col-md-5 col-11 mx-auto bg-light d-flex justify-content-center align-items-center shadow product_img">
                    <img
                      src="https://res.cloudinary.com/vengui/image/upload/v1646869524/sample.jpg"
                      className="img-fluid"
                      alt="cart img"
                    />
                  </div>

                  <div className="col-md-7 col-11 mx-auto px-4 mt-2">
                    <div className="row">
                      <div className="col-6 card-title">
                        <h1 className="mb-4 product_name">Blue Zara Shirt</h1>
                        <p className="mb-2">SHIRT - BLUE</p>
                        <p className="mb-2">COLOR: BLUE</p>
                        <p className="mb-3">SIZE: M</p>
                      </div>

                      <div className="col-6">
                        <ul className="pagination justify-content-end set_quantity">
                          <li className="page-item">
                            <button
                              className="page-link "
                              onclick="decreaseNumber('textbox','itemval')"
                            >
                              <i class="bi bi-dash"></i>
                            </button>
                          </li>
                          <li className="page-item">
                            <input
                              type="text"
                              name=""
                              className="page-link"
                              value="0"
                              id="textbox"
                            />
                          </li>
                          <li className="page-item">
                            <button
                              className="page-link"
                              onclick="increaseNumber('textbox','itemval')"
                            >
                              {" "}
                              <i class="bi bi-plus"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-8 d-flex justify-content-between remove_wish">
                        <p>
                          <i class="bi bi-trash-fill"></i> REMOVE ITEM
                        </p>
                      </div>
                      <div className="col-4 d-flex justify-content-end price_money">
                        <h3>
                          $<span id="itemval">0.00 </span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />

              <div className="card p-4">
                <div className="row">
                  <div className="col-md-5 col-11 mx-auto bg-light d-flex justify-content-center align-items-center shadow product_img">
                    <img
                      src="https://res.cloudinary.com/vengui/image/upload/v1646869524/sample.jpg"
                      className="img-fluid"
                      alt="cart img"
                    />
                  </div>

                  <div className="col-md-7 col-11 mx-auto px-4 mt-2">
                    <div className="row">
                      <div className="col-6 card-title">
                        <h1 className="mb-4 product_name">Green Zara Shirt</h1>
                        <p className="mb-2">SHIRT - Green</p>
                        <p className="mb-2">COLOR: Green</p>
                        <p className="mb-3">SIZE: M</p>
                      </div>

                      <div className="col-6">
                        <ul className="pagination justify-content-end set_quantity">
                          <li className="page-item">
                            <button
                              className="page-link "
                              onclick="decreaseNumber('textbox1','itemval1')"
                            >
                              {" "}
                              <i class="bi bi-dash"></i>{" "}
                            </button>
                          </li>
                          <li className="page-item">
                            <input
                              type="text"
                              name=""
                              className="page-link"
                              value="0"
                              id="textbox1"
                            />
                          </li>
                          <li className="page-item">
                            <button
                              className="page-link"
                              onclick="increaseNumber('textbox1','itemval1')"
                            >
                              {" "}
                              <i class="bi bi-plus"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-8 d-flex justify-content-between remove_wish">
                        <p>
                          <i class="bi bi-trash-fill"></i> REMOVE ITEM
                        </p>
                      </div>
                      <div className="col-4 d-flex justify-content-end price_money">
                        <h3>
                          $<span id="itemval1">0.00 </span>{" "}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />

              <div className="card p-4">
                <div className="row">
                  <div className="col-md-5 col-11 mx-auto bg-light d-flex justify-content-center align-items-center shadow product_img">
                    <img
                      src="https://res.cloudinary.com/vengui/image/upload/v1646869524/sample.jpg"
                      className="img-fluid"
                      alt="cart img"
                    />
                  </div>

                  <div className="col-md-7 col-11 mx-auto px-4 mt-2">
                    <div className="row">
                      <div className="col-6 card-title">
                        <h1 className="mb-4 product_name">Green Zara Shirt</h1>
                        <p className="mb-2">SHIRT - Green</p>
                        <p className="mb-2">COLOR: Green</p>
                        <p className="mb-3">SIZE: M</p>
                      </div>

                      <div className="col-6">
                        <ul className="pagination justify-content-end set_quantity">
                          <li className="page-item">
                            <button
                              className="page-link "
                              onclick="decreaseNumber('textbox1','itemval1')"
                            >
                              {" "}
                              <i class="bi bi-dash"></i>{" "}
                            </button>
                          </li>
                          <li className="page-item">
                            <input
                              type="text"
                              name=""
                              className="page-link"
                              value="0"
                              id="textbox1"
                            />
                          </li>
                          <li className="page-item">
                            <button
                              className="page-link"
                              onclick="increaseNumber('textbox1','itemval1')"
                            >
                              {" "}
                              <i class="bi bi-plus"></i>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-8 d-flex justify-content-between remove_wish">
                        <p>
                          <i class="bi bi-trash-fill"></i> REMOVE ITEM
                        </p>
                      </div>
                      <div className="col-4 d-flex justify-content-end price_money">
                        <h3>
                          $<span id="itemval1">0.00 </span>{" "}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-lg-4 col-11 mx-auto mt-lg-0 mt-md-5">
              <div className="right_side p-3 shadow bg-white">
                <h2 className="product_name mb-5">The Total Amount Of</h2>
                <div className="price_indiv d-flex justify-content-between">
                  <p>Product amount</p>
                  <p>
                    $<span id="product_total_amt">0.00</span>
                  </p>
                </div>
                <div className="price_indiv d-flex justify-content-between">
                  <p>Shipping Charge</p>
                  <p>
                    $<span id="shipping_charge">50.0</span>
                  </p>
                </div>
                <hr />
                <div className="total-amt d-flex justify-content-between font-weight-bold">
                  <p>The total amount of (including VAT)</p>
                  <p>
                    $<span id="total_cart_amt">0.00</span>
                  </p>
                </div>
                <button className="btn btn-primary text-uppercase">
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
