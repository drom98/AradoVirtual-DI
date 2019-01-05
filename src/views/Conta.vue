<template>
  <div id="app">
    <el-row type="flex" justify="center" align="center">
      <el-col :span="12">
        <img src="../assets/AradoVirtual_Logo_Black.png" alt="logotipo" width="40%">
        <div class="divInput" v-loading="loading">
          <h2>{{title}}</h2>
          <el-input 
          prefix-icon="fas fa-user"
          placeholder="Endereço de email..." 
          type="email" 
          size="medium" 
          v-model="email"
          ></el-input>
          <el-input
          prefix-icon="fas fa-unlock"
          placeholder="Password..." 
          type="password" 
          size="medium" 
          v-model="password">
          </el-input>
          <el-button type="success" class="signin" @click="userLogin">Entrar</el-button>
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
      email: '',
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

<style lang="scss" scoped>

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
}

.divInput {
  border-radius: 10px;
  padding: 32px;
  background-color: rgba($color: white, $alpha: 0.95);

  h2 {
    margin-bottom: 20px;
    text-align: center;
    color: #43A838;
  }

  .el-input {
    margin-bottom: 20px;
  }
}
</style>

