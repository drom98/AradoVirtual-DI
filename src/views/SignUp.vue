<template>
  <div id="app">
    <el-row type="flex" justify="center" align="center">
      <el-col :span="12">
        <img src="../assets/AradoVirtual_Logo_Black.png" alt="logotipo" width="30%">
        <div class="divInput" v-loading="loading">
          <h2>Registar</h2>
          <el-input 
          prefix-icon="fas fa-user"
          placeholder="Nome de utilizador..." 
          type="text" 
          size="medium" 
          v-model="user.username"
          ></el-input>
          <el-input 
          prefix-icon="fas fa-envelope"
          placeholder="Email..." 
          type="email" 
          size="medium" 
          v-model="user.email"
          ></el-input>
          <el-input
          prefix-icon="fas fa-unlock"
          placeholder="Password..." 
          type="password" 
          size="medium" 
          v-model="user.password">
          </el-input>
          <el-input 
          prefix-icon="fas fa-check-circle"
          placeholder="Confirmar password..." 
          type="password" 
          size="medium" 
          v-model="user.confirmPassword"
          ></el-input>
          <el-button type="primary" class="signin" @click="userLogin">Criar conta</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      approved: false,
    },
  }),
};
</script>

<style lang="scss" scoped src="@/scss/signup.scss">

</style>
