import axios from "axios"

const authApi = {}

const BASE_URL = 'http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api'

authApi.register = (input) => {
  return axios.post(`${BASE_URL}/V1/auth/register`, input)
}

authApi.login = (input) => {
  return
}

export default authApi;