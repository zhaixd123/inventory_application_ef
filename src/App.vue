<template>
  <div id="app" class="grid-container">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="grid-right">
      <div style="background-color:deeppink;">
        <h1>Header</h1>
      </div>
      <div style="background-color:blueviolet;padding: 5px;">
        <router-view></router-view>
      </div>
      <div style="background-color:deeppink;padding: 5px;">
        <h2>Header</h2>
      </div>
      <div style="background-color:blue;padding: 5px;">
        <h3>Header</h3>
      </div>
    </div>
    <div style="background-color: red;">

    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'App',
  components: {
    Sidebar
  }
}
</script>

<style>
.grid-container {
  display: grid;
  grid-template-columns: 250px 5fr 1fr; /* 设置两列，第一列为250px，第二列填充剩余空间 */
  height: 100vh; /* 视口高度 */
}
.grid-right {
  display: grid;
  padding: 5px;
  grid-template-rows: 100px 1fr  1fr 1fr;/* 设置两列，第一列为250px，第二列填充剩余空间 */
  height: 100vh; /* 视口高度 */
  background-color:yellowgreen;
  overflow: auto;
}
.sidebar {
  background-color: #c23e06b5;
  padding: 5px;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
}

.content {
  padding: 5px;
  background-color: #10da61be;
  overflow: auto; /* 如果内容超出，添加滚动条 */
}
</style>
