import { updateUserAsync } from "../../redux/slices/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import parseJwt from "../../utils/ParseJwt";
import { useState } from "react";

const EditProfile = () => {
  const token = useSelector((state) => state.usuarios.token);
  const sesion = parseJwt(token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.usuarios.user);
  const [photo, setPhoto] = useState(user?.user.photo);
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
      photo: photo,
    };
    dispatch(updateUserAsync(updateUser));
    navigate("/profile");
  };
  const showWidgetCloudinary = () => {
    window.cloudinary.openUploadWidget(
      {
        cloudName: "vengui",
        uploadPreset: "gtf9hiww",
        sources: ["local"],
        showAdvancedOptions: false,
        cropping: true,
        multiple: false,
        defaultSource: "local",
        styles: {
          palette: {
            window: "#21262A",
            sourceBg: "#21262A",
            windowBorder: "#FFFFFF",
            tabIcon: "#FFFFFF",
            inactiveTabIcon: "#8E9FBF",
            menuIcons: "#FFFFFF",
            link: "#9F2D30",
            action: "#336BFF",
            inProgress: "#00BFFF",
            complete: "#33ff00",
            error: "#EA2727",
            textDark: "#000000",
            textLight: "#FFFFFF",
          },
          fonts: {
            default: null,
            "'Space Mono', monospace": {
              url: "https://fonts.googleapis.com/css?family=Space+Mono",
              active: true,
            },
          },
        },
        language: "es",
        text: {
          es: {
            menu: {
              files: "Mis archivos",
            },
            crop: {
              title: "Recorte su imagen",
              crop_btn: "Recortar",
              skip_btn: "Saltar",
              reset_btn: "Restablecer",
              close_btn: "Si",
              close_prompt:
                "Si cierra la ventana se cancelaran las subidas de imágenes, ¿Está seguro?",
              image_error: "Hubo un error al subir la imagen",
              corner_tooltip:
                "Arrastre la esquina para cambiar el tamaño del cuadro",
              handle_tooltip:
                "Arrastre el filo para cambiar el tamaño del cuadro",
            },
            local: {
              browse: "Buscar",
              dd_title_single: "Arrastre y suelte su imágen aquí",
              drop_title_single: "Arrastre y suelte la imágen a subir",
            },
          },
        },
      },
      (err, result) => {
        if (!err && result?.event === "success") {
          const { secure_url } = result.info;
          setPhoto(secure_url);
        }
      }
    );
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
          {user?.user.photo === "" ? (
            <i className="bi bi-person-square" style={{ fontSize: "7rem" }}></i>
          ) : (
            <img src={photo} alt="user" width="200" />
          )}
          <h4>
            {user?.user.name} {user?.user.lastname}
          </h4>
          <button className="btn btn-light" onClick={showWidgetCloudinary}>
            Change photo
          </button>
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
                    defaultValue={user?.user.name}
                  />
                </div>
                <div className="data col-md-6">
                  <h4>Lastname</h4>
                  <input
                    type="text"
                    placeholder=""
                    className="form-control mb-2"
                    defaultValue={user?.user.lastname}
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
                    defaultValue={user?.user.email}
                  />
                </div>
                <div className="data col-md-6">
                  <h4>Phone</h4>
                  <input
                    type="text"
                    placeholder=""
                    className="form-control mb-2"
                    defaultValue={user?.user.phone}
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
                    defaultValue={user?.user.document}
                  />
                </div>
                <div className="data col-md-6">
                  <h4>Adrress</h4>
                  <input
                    type="text"
                    placeholder=""
                    className="form-control mb-2"
                    defaultValue={user?.user.address}
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
