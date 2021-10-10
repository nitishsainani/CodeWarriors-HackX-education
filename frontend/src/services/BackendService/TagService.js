import axios from 'axios';
import { BASE_URL } from '../constants';
import { getAuthHeader } from '../AuthService';

export default class TagService {
  static async getAllTags() {
    let response = await axios.get(BASE_URL + 'tags/', {headers: getAuthHeader()});
    return response.data;
  }
}
