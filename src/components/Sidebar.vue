<template>
  <el-menu
    class="el-menu-vertical-demo"
    default-active="1"
    unique-opened
    router
  >
    <el-menu-item index="/dashboard">
      <i class="el-icon-date"></i>
      <span>仪表板</span>
    </el-menu-item>
    <el-menu-item index="/inventory">
      <i class="el-icon-s-goods"></i>
      <span>库存管理</span>
    </el-menu-item>
    <!-- 可以继续添加更多的菜单项 -->
  </el-menu>
</template>

<script>
import { ElMenu, ElMenuItem } from 'element-plus'

export default {
  name: 'SidebarMenu',
  components: {
    ElMenu,
    ElMenuItem
  }
}
</script>

<style scoped>
.el-menu-vertical-demo {
  width: 100%;
  margin: 0;
  background-color: green;
  height: 100vh;
}
</style>
