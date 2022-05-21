import { getAllSalesAsync } from "../../redux/slices/salesSlice";
import { useDispatch, useSelector } from "react-redux";
import parseJwt from "../../utils/ParseJwt";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PurchaseHistory = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sales = useSelector((state) => state.sales.sales);
  const token = useSelector((state) => state.usuarios.token);
  const salesList = [];
  sales?.sales?.map((sale, i, sales) => {
    salesList[0] = sales[0];
    if (sales[i - 1]) {
      if (sale?.token !== sales[i - 1]?.token) salesList.push(sale);
    }
  });
  const sesion = parseJwt(token);
  useEffect(() => {
    dispatch(getAllSalesAsync(sesion.id));
  }, [dispatch]);

  return (
    <>
      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="title text-center">
          <h2 className="position-relative d-inline-block">Purchase History</h2>
        </div>
        <br />
        <br />
        <div className="col-12">
          <div className="table-responsive ">
            <table className="table table-light">
              <thead>
                <tr>
                  <th scope="col">ID Transaction</th>
                  <th scope="col">Client</th>
                  <th scope="col">Date</th>
                  <th scope="col">Total Fare</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody data-test-id="event-user">
                {salesList.map((sale) => (
                  <tr key={sale._id}>
                    <th scope="row">{sale.numberTransaction}</th>
                    <td>{sale.client}</td>
                    <td>{sale.paymentDate}</td>
                    <td>$. {sale.totalFare}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() =>
                          navigate("/sale_details", { state: sale })
                        }
                        data-bs-toggle="modal"
                        data-bs-target="#modalUser"
                      >
                        <i className="bi bi-info-circle-fill"> Details </i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PurchaseHistory;
