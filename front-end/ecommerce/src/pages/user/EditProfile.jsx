import { updateUserAsync } from "../../redux/slices/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import parseJwt from "../../utils/ParseJwt";

const EditProfile = () => {
  const token = useSelector((state) => state.usuarios.token);
  const sesion = parseJwt(token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.usuarios.user);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { elements } = e.target;
    const updateUser = {
      id: sesion.id,
      name: elements[0].value,
      lastname: elements[1].value,
      email: elements[2].value,
      phone: elements[3].value,
      document: elements[4].value,
      address: elements[5].value,
    };
    dispatch(updateUserAsync(updateUser));
    navigate("/profile");
  };

  return (
    <div>
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <div className="wrapper">
        <div className="left">
          <img src="https://i.imgur.com/cMy8V5j.png" alt="user" width="200" />
          <h4>Renzo Manrique</h4>
          <p></p>
        </div>
        <div className="right">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="info">
              <div className="row">
                <h3 className="col-md-10">Information</h3>
              </div>
              <hr />
              <div className="info_data row">
                <div className="data col-md-6">
                  <h4>Name</h4>
                  <input
                    type="text"
                    placeholder=""
                    className="form-control mb-2"
                    defaultValue={user.user.name}
                  />
                </div>
                <div className="data col-md-6">
                  <h4>Lastname</h4>
                  <input
                    type="text"
                    placeholder=""
                    className="form-control mb-2"
                    defaultValue={user.user.lastname}
                  />
                </div>
              </div>
              <div className="info_data row">
                <div className="data col-md-6">
                  <h4>Email</h4>
                  <input
                    type="text"
                    placeholder=""
                    className="form-control mb-2"
                    defaultValue={user.user.email}
                  />
                </div>
                <div className="data col-md-6">
                  <h4>Phone</h4>
                  <input
                    type="text"
                    placeholder=""
                    className="form-control mb-2"
                    defaultValue={user.user.phone}
                  />
                </div>
              </div>
              <div className="info_data row">
                <div className="data col-md-6">
                  <h4>Document</h4>
                  <input
                    type="text"
                    placeholder=""
                    className="form-control mb-2"
                    defaultValue={user.user.document}
                  />
                </div>
                <div className="data col-md-6">
                  <h4>Adrress</h4>
                  <input
                    type="text"
                    placeholder=""
                    className="form-control mb-2"
                    defaultValue={user.user.address}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center mt-4">
                <button className="btn btn-danger" type="submit">
                  Save Changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
