<script>
import ClienteService from "@/services/ClienteService";

export default {
    data() {
        return {
            clientes: [],
        };
    },
    methods: {
        fetchClientes() {
            ClienteService.listarClientes().then((response) => {
                this.clientes = response.data;
            });
        },
        navigateToAdd() {
            this.$router.push({ name: "addCliente" });
        },
        navigateToEdit(id) {
            this.$router.push({ name: "editCliente", params: { id } });
        },
        apagarCliente(id) {
            ClienteService.apagarCliente(id).then(() => {
                this.fetchClientes();
            });
        },
    },
    created() {
        this.fetchClientes();
    },
};
</script>

<template>
  <div>
    <h1>Clientes</h1>
    <button @click="navigateToAdd">Adicionar Cliente</button>
    <ul>
      <li v-for="cliente in clientes" :key="cliente.Id">
        {{ cliente.NomeEmpresa }} - {{ cliente.Porte }}
        <button @click="navigateToEdit(cliente.Id)">Editar</button>
        <button @click="apagarCliente(cliente.Id)">Remover</button>
      </li>
    </ul>
  </div>
</template>