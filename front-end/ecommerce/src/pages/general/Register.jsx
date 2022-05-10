import CarouselLogin from "../../components/login/Carousel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Register = () => {
  return (
    <div className="row w-100 main-body">
      <div className="col-lg-7">
        <CarouselLogin />
      </div>
      <div className="col-lg-5">
        <div className="px-lg-5 pt-lg-4 pb-lg-3 p-4 d-flex justify-content-center w-100 mb-auto">
          <img
            src="https://res.cloudinary.com/vengui/image/upload/v1652120270/bg-logo-png-transparent_uzguei.png"
            alt=""
            className="logo img-fluid"
          />
        </div>
        <Form>
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
          <div className="d-flex justify-content-center">
            <Button variant="secondary" type="submit" className="w-50">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
