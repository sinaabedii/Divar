import api from "../configs/api";

const getProfile = () =>
  api.get("user/whoami").then((response) => response || false);

export { getProfile };
