import { Link, useSearchParams } from "react-router-dom";
import "./PurchaseConfirmation.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  createSaleAsync,
  selectIsCreating,
  selectCreatedSale,
  selectSaleError,
} from "../../redux/slices/salesSlice";

const PurchaseConfirmation = () => {
  const [searchParams] = useSearchParams();
  const refPayco = searchParams.get("ref_payco");
  const dispatch = useDispatch();
  const isCreating = useSelector(selectIsCreating);
  const createdSale = useSelector(selectCreatedSale);
  const saleError = useSelector(selectSaleError);

  useEffect(() => {
    dispatch(createSaleAsync(refPayco));
  }, [dispatch]);

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div
        className="container d-flex flex-column justify-content-center flex-grow-1"
        id="contenedor-main"
      >
        <main className="confirmacion-compra__main d-flex flex-column flex-grow-1">
          <section className="principal d-flex flex-column justify-content-center flex-grow-1">
            <h2 className="text-center text-black">DETALLE COMPRA</h2>
            <section className="linea">
              <div>
                <hr />
              </div>
            </section>

            {isCreating ? (
              <h2 className="d-flex flex-column flex-grow-1 align-items-center justify-content-center">
                Cargando...
              </h2>
            ) : null}

            {!!createdSale && (
              <div className="detalle">
                <div className="subgrupo">
                  <div className="texto">
                    <h4>Nº Transacción / Referencia:</h4>
                  </div>
                  <div className="valor-texto" id="codigo-autorizacion">
                    <h4>{createdSale.numberTransaction}</h4>
                  </div>
                </div>

                <div className="subgrupo">
                  <div className="texto">
                    <h4>Nro. Tarjeta:</h4>
                  </div>
                  <div className="valor-texto" id="nro-tarjeta">
                    <h4>{createdSale.cardNumber}</h4>
                  </div>
                </div>

                <div className="subgrupo">
                  <div className="texto">
                    <h4>Cliente:</h4>
                  </div>
                  <div className="valor-texto" id="cant-importe">
                    <h4>{createdSale.client}</h4>
                  </div>
                </div>

                <div className="subgrupo">
                  <div className="texto">
                    <h4>Fecha de Operación:</h4>
                  </div>
                  <div className="valor-texto" id="fecha-reserva">
                    <h4>{createdSale.paymentDate}</h4>
                  </div>
                </div>

                <div className="subgrupo">
                  <div className="texto">
                    <h4>Tipo de tarjeta:</h4>
                  </div>
                  <div className="valor-texto" id="nombre-comercio">
                    <h4>
                      {createdSale.cardType === "VS" ? "VISA" : "MasterCard"}
                    </h4>
                  </div>
                </div>

                <div className="subgrupo">
                  <div className="texto">
                    <h4>Importe Total:</h4>
                  </div>
                  <div className="valor-texto" id="terminos-condiciones">
                    <h4>$ {createdSale.totalFare}</h4>
                  </div>
                </div>
              </div>
            )}
            {saleError && (
              <h2 className="d-flex flex-column flex-grow-1 align-items-center justify-content-center">
                {saleError}
              </h2>
            )}

            <div className="botones">
              <div>
                <Link to={"/"} className="btn btn-secondary">
                  Home
                </Link>
              </div>
              <div>
                <Link to={"/list"} className="btn btn-danger">
                  Purchase History
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default PurchaseConfirmation;
