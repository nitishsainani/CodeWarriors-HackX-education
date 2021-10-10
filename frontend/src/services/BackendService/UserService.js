import axios from 'axios';
import {storeUser, getUser, clearStorage} from '../AuthService';
import { BASE_URL } from '../constants'

const getFormData = (data) => {
  let bodyFormData = new FormData();
  for(let key in data) {
    // console.log(data[key],key);
    bodyFormData.append(key, data[key]);
    // console.log(bodyFormData);
  }
  return bodyFormData;
}

export default class UserService {
  static async login(email, password) {
    let user = {};
    const response = await axios.post(BASE_URL + 'rest-auth/login/', getFormData({ username: email, password: password }), { headers: {"Content-Type": "multipart/form-data" }});
    console.log(response);
    user.token = response.data.key;
    console.log(user.token);
    const userDataResponse = await axios.get(BASE_URL + 'rest-auth/user/', { headers: { "Authorization": "Token " + user.token } });
    console.log(userDataResponse);
    user = { ...user, ...userDataResponse.data }
    // console.log(user);
    storeUser(user);
  }

  static async logout() {
    await clearStorage();
  }

  static async register(first_name, last_name, email, password, is_company, is_candidate) {
    let user = {};
    const response = await axios.post(
      BASE_URL + 'rest-auth/registration/',
      getFormData({
        username: email, email, password1: password, password2: password,
        first_name, last_name, is_company, is_candidate
      }),
      { headers: {"Content-Type": "multipart/form-data" }}
    );
    user.token = response.data.key;
    const userDataResponse = await axios.get(BASE_URL + 'rest-auth/user/', { headers: { "Authorization": "Token " + user.token } });
    // console.log(userDataResponse);
    user = { ...user, ...userDataResponse }
    // console.log(user);
    storeUser(user);
  }

  static async isUserLoggedIn() {
    return !!await getUser();
  }

  static async getUserData() {
    return await getUser();
  }
}
