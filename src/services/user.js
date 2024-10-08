import api from "../configs/api";

const getProfile = () =>
  api.get("user/whoami");
const getPosts = () => api.get("post/my");
const getAllPosts = () => api.get("");

export { getProfile, getPosts, getAllPosts };
