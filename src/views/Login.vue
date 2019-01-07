<template>
  <div id="app">
    <el-row type="flex" justify="center" align="center">
      <el-col :span="12">
        <img src="../assets/AradoVirtual_Logo_Black.png" alt="logotipo" width="30%">
        <div class="divInput" v-loading="loading">
          <h2>{{title}}</h2>
          <el-input 
          prefix-icon="fas fa-user"
          placeholder="Nome de utilizador..." 
          type="text" 
          size="medium" 
          v-model="username"
          ></el-input>
          <el-input
          prefix-icon="fas fa-unlock"
          placeholder="Password..." 
          type="password" 
          size="medium" 
          v-model="password">
          </el-input>
          <el-button type="primary" class="signin" @click="userLogin">Entrar</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      title: 'Iniciar sessão',
      username: '',
      password: '',
      inputData: []
    }
  },
  methods: {
    userLogin() {
      this.inputData.push({
        email: this.email,
        password: this.password
      });
      this.loading = true;
      this.email = '';
      this.password = '';
    }
  },
};
</script>

<style lang="scss" scoped src="@/scss/signup.scss">
</style>

