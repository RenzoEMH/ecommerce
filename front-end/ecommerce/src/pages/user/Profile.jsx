import "./Profile.scss";
import { useNavigate } from "react-router-dom";
import { getOneUsersAsync } from "../../redux/slices/usersSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import parseJwt from "../../utils/ParseJwt";

const Profile = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.usuarios.token);
  const sesion = parseJwt(token);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.usuarios.user);
  useEffect(() => {
    dispatch(getOneUsersAsync(sesion.id));
  }, [dispatch, sesion.id]);
  return (
    <div>
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <br />
      <div className="title text-center">
        <h2 className="position-relative d-inline-block">Profile</h2>
      </div>
      <div className="wrapper">
        <div className="left">
          {user?.user.photo === "" ? (
            <i className="bi bi-person-square" style={{ fontSize: "7rem" }}></i>
          ) : (
            <img src={user?.user.photo} alt="user" width="200" />
          )}
          <h4>
            {user?.user.name} {user?.user.lastname}
          </h4>
          <p></p>
        </div>
        <div className="right">
          <div className="info">
            <div className="row">
              <h3 className="col-md-10">Information</h3>
              <i
                className="bi bi-pencil-fill col-md-2"
                style={{ fontSize: "2rem" }}
                type="button"
                onClick={() => navigate("/profile_edit")}
              ></i>
            </div>
            <hr />
            <div className="info_data row">
              <div className="data col-md-6">
                <h4>Name</h4>
                <p>{user?.user.name}</p>
              </div>
              <div className="data col-md-6">
                <h4>Lastname</h4>
                <p>{user?.user.lastname}</p>
              </div>
            </div>
            <div className="info_data row">
              <div className="data col-md-6">
                <h4>Email</h4>
                <p>{user?.user.email}</p>
              </div>
              <div className="data col-md-6">
                <h4>Phone</h4>
                <p>{user?.user.phone}</p>
              </div>
            </div>
            <div className="info_data row">
              <div className="data col-md-6">
                <h4>Document</h4>
                <p>{user?.user.document}</p>
              </div>
              <div className="data col-md-6">
                <h4>Address</h4>
                <p>{user?.user.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
