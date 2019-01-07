<template>
  <div id="app">
    <el-container>
      <el-aside width="220px">
        <el-menu 
        default-active="1" 
        class="sidaBar" 
        text-color="#5a5a5a" 
        active-text-color="#67C23A" 
        router="true">
          <el-submenu index="5">
            <template slot="title">
              <i class="fas fa-user-circle fa-2x" style="color: inherit; margin-right: 6px;"></i>
              <span>Conta</span>
            </template>
            <el-menu-item-group title="Inicia sessão ou regista-te">
              <el-menu-item index="/login">Iniciar sessão</el-menu-item>
              <el-menu-item index="/signUp">Registar</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item 
          v-for="item in menuItems" 
          :key="item.title" 
          :index="item.index" 
          :route="item.link">
            <span>{{item.title}}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
      <div class="color-overlay"></div>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {index: '1', title: 'Início', link: '/'},
        {index: '2', title: 'Cursos', link: '/Cursos'},
        {index: '3', title: 'Produtos', link: '/Produtos'},
        {index: '4', title: 'Blog', link: '/Blog'},
      ],
    }
  },
};
</script>


<style lang="scss" src="@/scss/main.scss">
</style>
