import { useLocation } from "react-router-dom";

const SaleDetails = () => {
  const location = useLocation();
  const sale = location.state;
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <div className="title text-center">
          <h2 className="position-relative d-inline-block">Purchase Details</h2>
        </div>
        <br />
        <br />
        <div
          className="col-md-12 col-lg-8 col-11 mx-auto main_cart mb-lg-0 mb-5 shadow"
          style={{ borderRadius: 15 }}
        >
          <>
            <h2 className="py-4 font-weight-bold text-center">
              Transaction N°: {sale.numberTransaction}
            </h2>
            {sale?.productsSales.map((product) => (
              <>
                <hr />
                <div className="card p-4">
                  <div className="row">
                    <div className="col-md-5 col-11 mx-auto bg-light d-flex justify-content-center align-items-center shadow product_img">
                      <img
                        src={product.photo[0]}
                        className="img-fluid"
                        alt="cart img"
                      />
                    </div>

                    <div className="col-md-7 col-11 mx-auto px-4 mt-2">
                      <div className="row">
                        <div className="col-6 card-title">
                          <h1 className="mb-4 product_name">{product.name}</h1>
                          <p className="mb-2">{product.type}</p>
                          <p className="mb-2">{product.name}</p>
                          <p className="mb-3">{product.size[0]}</p>
                        </div>
                        <div className="col-6"></div>
                      </div>

                      <div className="row">
                        <div className="col-8 d-flex justify-content-between remove_wish">
                          <p type="button"></p>
                        </div>
                        <div className="col-4 d-flex justify-content-end price_money">
                          <h3>
                            $<span id="itemval">{product.price} </span>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </>
        </div>
      </div>
    </>
  );
};

export default SaleDetails;
