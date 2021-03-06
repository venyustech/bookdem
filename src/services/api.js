import axios from "axios";

// const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const BASE_URL = "https://bookdem.herokuapp.com";
// const BASE_URL = "http://localhost:5000";

function bearerConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}
async function deleteParticipantOfGroup(body, token) {
  const config = bearerConfig(token);
  return await axios.delete(
    `${BASE_URL}/groups/user/delete/${body.group_id}`,
    config
  );
}

async function signUp(body) {
  return await axios.post(`${BASE_URL}/user/sign-up`, body);
}
async function signIn(body) {
  return await axios.post(`${BASE_URL}/user/sign-in`, body);
}
async function getUser(token) {
  const config = bearerConfig(token);
  return await axios.get(`${BASE_URL}/user`, config);
}

async function getAllBooks(token) {
  const config = bearerConfig(token);
  return await axios.get(`${BASE_URL}/books`, config);
}
async function getAllGroups(token) {
  const config = bearerConfig(token);
  return await axios.get(`${BASE_URL}/groups`, config);
}

async function joinNewGroupByUser(body, token) {
  const config = bearerConfig(token);
  return await axios.post(`${BASE_URL}/groups/join`, body, config);
}
async function getJoinedGroupsByUser(token) {
  const config = bearerConfig(token);
  return await axios.get(`${BASE_URL}/groups/user/joined`, config);
}

export {
  signIn,
  signUp,
  getUser,
  getAllBooks,
  getAllGroups,
  joinNewGroupByUser,
  getJoinedGroupsByUser,
  deleteParticipantOfGroup,
};
