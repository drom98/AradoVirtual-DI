<template>
  <div id="app">
    <el-row>
      <el-col :span="12" class="content">
        <img src="../assets/AradoVirtual_Logo_Black.png" alt="logotipo" width="60%">
        <h1>{{titulo}}</h1>
        <p>{{subtitulo}}</p>
        <el-button type="success" class="signup">Criar conta</el-button>
        <el-button type="success" plain class="signin">Entrar</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: "Tenha o seu pequeno quintal em casa.",
      subtitulo: "Aqui irá encontrar tutoriais, cursos, vídeos de demonstração, kits didáticos, e poderá adquirir diversos produtos."
    }
  },
};
</script>

<style lang="scss" scoped>
h1,p {
  color: white;
  margin-top: 16px;
}

h1 {
  font-size: 3rem;
}

p {
  font-size: 1.2rem;
}

.el-button {
  margin-top: 24px;
}

.signin {
  margin-left: 30px;
}

.content {
  margin-left: 140px;
}
</style>
