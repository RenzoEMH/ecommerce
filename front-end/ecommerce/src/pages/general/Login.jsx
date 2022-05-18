import "./Login.scss";
import CarouselLogin from "../../components/login/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync, errorLogin } from "../../redux/slices/usersSlice";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector(errorLogin);
  const handleSubmit = (e) => {
    e.preventDefault();

    const { elements } = e.target;
    const userLogin = {
      email: elements[0].value,
      password: elements[1].value,
    };
    dispatch(loginAsync(userLogin));
  };

  return (
    <div className="row w-100 main-body">
      <hr />
      <hr />
      <hr />
      <div className="col-lg-7">
        <CarouselLogin />
      </div>
      <div className="col-lg-5 d-flex flex-column align-items-end section2">
        <div className="px-lg-5 pt-lg-4 pb-lg-3 p-4 d-flex justify-content-center w-100 mb-auto">
          <img
            src="https://res.cloudinary.com/vengui/image/upload/v1652120270/bg-logo-png-transparent_uzguei.png"
            alt=""
            className="logo img-fluid"
          />
        </div>
        <div className="px-lg-5 w-100 align-self-center">
          <h1>Welcome to Store</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label font-italic"
              >
                Email
              </label>

              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label font-weight-bold"
              >
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
              <a
                href="/registrar"
                className="form-text text-muted text-decoration-none"
              >
                Forgot your password?
              </a>
              {error && (
                <div className="invalid-feedback d-block">{error.message}</div>
              )}
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-secondary w-50 center">
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="text-center mt-auto w-100">
          <p className="d-inline-block mx-2">Need an account? </p>
          <Link to="/register">
            <button className="btn btn-secondary text-dark text-decoration-none btn-signup">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
