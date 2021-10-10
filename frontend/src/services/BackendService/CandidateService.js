import axios from 'axios';
import { BASE_URL } from '../constants';
import { getAuthHeader } from '../AuthService';

export default class CandidateService {
  static async getCandidate() {
    console.log(getAuthHeader());
    let response = await axios.get(BASE_URL + 'candidates/get', { headers: getAuthHeader()})
    return response.data;
  }

  static async editCandidateData() {

  }
}
