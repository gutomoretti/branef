<template>
    <div>
        <h2>{{ isEdit ? 'Editar Cliente' : 'Adicionar Cliente' }}</h2>
        <form @submit.prevent="submitForm">
            <label>Nome da Empresa:</label>
            <input v-model="cliente.NomeEmpresa" required />
            <label>Porte:</label>
            <select v-model="cliente.Porte">
                <option>Pequena</option>
                <option value="Media">Média</option>
                <option>Grande</option>
            </select>
            <button type="submit">{{ isEdit ? 'Atualizar' : 'Adicionar' }}</button>
        </form>
        <div><br><a @click="navigateToClientes" href="#">Voltar</a></div>
    </div>
</template>

<script>
import ClienteService from '@/services/ClienteService';

export default {
    data() {
        return {
            cliente: {
                NomeEmpresa: '',
                Porte: 'Pequena',
            },
            isEdit: false,
        };
    },
    methods: {
        submitForm() {
            if (this.isEdit) {
                ClienteService.atualizarCliente(this.cliente.Id, this.cliente).then(() => {
                    this.$router.push({ name: 'clientes' })
                        .catch(error => console.error(error));
                });
            } else {
                ClienteService.adicionarCliente(this.cliente).then(() => {
                    this.$router.push({ name: 'clientes' })
                        .catch(error => console.error(error));
                });
            }
        },
        navigateToClientes() {
            this.$router.push({ name: "clientes" });
        },
        fetchCliente() {
            ClienteService.infoCliente(this.$route.params.id).then(response => {
                this.cliente = response.data;
            });
        },
    },
    created() {
        if (this.$route.params.id) {
            this.isEdit = true;
            this.fetchCliente();
        }
    },
};
</script>