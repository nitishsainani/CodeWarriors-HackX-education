import axios from 'axios';
import { BASE_URL } from '../constants';
import { getAuthHeader } from '../AuthService';

export default class TasksService {
  static async getTasks() {
    console.log(getAuthHeader());
    let response = await axios.get(BASE_URL + 'companies/tasks/', { headers: getAuthHeader()})
    return response.data;
  }

}
