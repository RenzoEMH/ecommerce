const setOnLocalStorage = (store, action) => {
  switch (action.type) {
    case "usuarios/addNewUser":
      localStorage.setItem(
        "usuarios",
        JSON.stringify({ usuarios: store.getState().usuarios.usuarios })
      );
      break;
    case "usuarios/setToken":
      localStorage.setItem(
        "infoUser",
        JSON.stringify({ token: store.getState().usuarios.token })
      );
      break;
    case "login/fulfilled":
      localStorage.setItem(
        "infoUser",
        JSON.stringify({ token: store.getState().usuarios.token })
      );
      break;

    default:
      console.log(action.type);
      break;
  }
};

export default setOnLocalStorage;
