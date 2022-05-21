import CarouselLogin from "../../components/login/Carousel";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { createUserAsync } from "../../redux/slices/usersSlice";
import "./Register.scss";
import { errorCreateUser } from "../../redux/slices/usersSlice";
import { useState } from "react";

const errors = {
  confirmEmail: "Wrong confirm email",
  confirmPassword: "Wrong confirm password",
};

const Register = () => {
  const dispatch = useDispatch();
  const error = useSelector(errorCreateUser);
  const [formErrors, setFormErrors] = useState({});

  const registerUserIsValid = (e, newUser) => {
    const validation = { isValid: true, formErrors: {} };
    if (e.target[3].value !== newUser.email) {
      validation.isValid = false;
      validation.formErrors.confirmEmail = errors.confirmEmail;
    }
    if (e.target[5].value !== newUser.password) {
      validation.isValid = false;
      validation.formErrors.confirmPassword = errors.confirmPassword;
    }
    return validation;
  };

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
    const { isValid, formErrors } = registerUserIsValid(e, newUser);
    if (isValid) {
      setFormErrors({});
      dispatch(createUserAsync(newUser));
    } else {
      setFormErrors(formErrors);
    }
  };
  return (
    <div className="row w-100 main-body">
      <div className="col-lg-7">
        <CarouselLogin />
      </div>
      <div className="col-lg-5 d-flex flex-column align-items-end">
        <br />
        <br />
        <div className="px-lg-5 pt-lg-4 pb-lg-3 p-4 d-flex justify-content-center w-100 logo mt-2">
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
          {error?.message === "Success" ? (
            <div className="valid-feedback d-block">
              User registered succesfully
            </div>
          ) : (
            <div className="invalid-feedback d-block">{error?.message}</div>
          )}
          {!!formErrors && (
            <div className="invalid-feedback d-block">
              {formErrors.confirmEmail}
            </div>
          )}
          {!!formErrors && (
            <div className="invalid-feedback d-block">
              {formErrors.confirmPassword}
            </div>
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
