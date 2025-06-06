import axios from "axios";

const todoApi = {}

const BASE_URL = 'http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api';

todoApi.createTodo = (input, token) => {
  return axios.post(`${BASE_URL}/V2/todos`, input, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

todoApi.getTodos = (token) => {
  return axios.get(`${BASE_URL}/V2/todos`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

todoApi.updateTodo = (id, input, token) => {
  return axios.patch(`${BASE_URL}/V2/todos/${id}`, input, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

todoApi.deleteTodo = (id, token) => {
  return axios.delete(`${BASE_URL}/V2/todos/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default todoApi