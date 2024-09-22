import api from "../configs/api";

const getProfile = () =>
  api.get("user/whoami").then((response) => response || false);

const getPosts = () => api.get("post/my");

export { getProfile, getPosts };
