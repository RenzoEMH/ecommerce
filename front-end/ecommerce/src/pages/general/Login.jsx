import "./Login.scss";
import CarouselLogin from "../../components/login/Carousel";

const Login = () => {
  return (
    <div className="row w-100 main-body">
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
          <h1>Welcome to BGames</h1>
          <form>
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
          <button
            href="/register"
            className="btn btn-secondary text-dark text-decoration-none btn-signup"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
