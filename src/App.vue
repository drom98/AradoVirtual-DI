<template>
  <div id="app">
    <el-container>
      <el-aside width="280px">
        <el-menu default-active="1" class="sidaBar" text-color="#5a5a5a" active-text-color="#67C23A" router="true">
          <el-menu-item v-for="item in menuItems" :key="item.title" :index="item.index" :route="item.link">
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
        {index: '2', title: 'Conta', link: '/Conta'},
        {index: '3', title: 'Cursos', link: '/Cursos'},
        {index: '4', title: 'Produtos', link: '/Produtos'},
        {index: '5', title: 'Blog', link: '/Blog'},
      ]
    }
  },
}
</script>


<style lang="scss" src="@/scss/main.scss">
</style>
