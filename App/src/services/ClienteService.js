import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://localhost:7207/api/Clientes',
    headers: {
      'Content-Type': 'application/json'
    },
});

export default {
  listarClientes() {
    return apiClient.get('/');
  },
  infoCliente(id) {
    return apiClient.get(`/${id}`);
  },
  adicionarCliente(cliente) {
    return apiClient.post('/', cliente);
  },
  atualizarCliente(id, cliente) {
    return apiClient.put(`/${id}`, cliente);
  },
  apagarCliente(id) {
    return apiClient.delete(`/${id}`);
  },
};