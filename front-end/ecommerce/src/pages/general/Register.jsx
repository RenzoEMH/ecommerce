import CarouselLogin from "../../components/login/Carousel";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { createUserAsync } from "../../redux/slices/usersSlice";
import "./Register.scss";
import { errorCreateUser } from "../../redux/slices/usersSlice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector(errorCreateUser);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { elements } = e.target;
    const newUser = {
      name: elements[0].value,
      lastname: elements[1].value,
      email: elements[2].value,
      password: elements[4].value,
      photo:
        "https://res.cloudinary.com/vengui/image/upload/v1652935007/78-785827_user-profile-avatar-login-account-male-user-icon_qysquy.png",
      phone: "",
      type: "usuario",
    };
    dispatch(createUserAsync(newUser));
  };
  return (
    <div className="row w-100 main-body">
      <div className="col-lg-7">
        <CarouselLogin />
      </div>
      <div className="col-lg-5 d-flex flex-column align-items-end">
        <div className="px-lg-5 pt-lg-4 pb-lg-3 p-4 d-flex justify-content-center w-100 logo">
          <img
            src="https://res.cloudinary.com/vengui/image/upload/v1652120270/bg-logo-png-transparent_uzguei.png"
            alt=""
            className="logo img-fluid"
          />
        </div>
        <Form
          className="px-lg-5 w-100 align-self-center form"
          onSubmit={(e) => handleSubmit(e)}
        >
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>LastName</Form.Label>
            <Form.Control type="name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="example@gmail.com" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Confirm Email</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
            <Form.Control
              type="password"
              aria-describedby="passwordHelpBlock"
            />
            <Form.Text id="passwordHelpBlock" muted>
              Your password must be 8-20 characters long, contain letters,
              numbers, and special characters.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
          {error?.message == "Success" ? (
            <div className="valid-feedback d-block">Creado exitosamente</div>
          ) : (
            <div className="invalid-feedback d-block">{error?.message}</div>
          )}
          <div className="d-flex justify-content-center">
            <Button variant="secondary" type="submit" className="w-50">
              Sign up
            </Button>
          </div>
          <div className="d-flex justify-content-center mt-4">
            <p className="d-inline-block mx-2 mt-2">
              Already have an account?{" "}
            </p>
            <Link to="/login">
              <button className="btn btn-danger text-dark text-decoration-none btn-signup">
                Login
              </button>
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
