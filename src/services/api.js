import axios from "axios";

// const BASE_URL = process.env.REACT_APP_API_BASE_URL;
// const BASE_URL = "https://bookdem.herokuapp.com";
const BASE_URL = "http://localhost:5000";


async function signUp(body) {
  return await axios.post(`${BASE_URL}/user/sign-up`, body);
}

async function signIn(body) {
  return await axios.post(`${BASE_URL}/user/sign-in`, body);
}




export {
  signIn, signUp
};

