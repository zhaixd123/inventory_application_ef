<template>
  <div class="main-layout">
    <!-- 导航栏 -->
    <div class="navbar">
      <h1>库存管理系统</h1>
    </div>

    <!-- 主内容区域 -->
    <div class="main-content">
      <!-- 库存表格 -->
      <div class="inventory-table">
        <h2>库存列表</h2>
        <table>
          <thead>
            <tr>
              <th>商品名称</th>
              <th>库存数量</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in inventory" :key="index">
              <td>{{ item.name }}</td>
              <td>{{ item.quantity }}</td>
              <td>
                <button @click="editItem(item)">编辑</button>
                <button @click="deleteItem(item)">删除</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 添加库存按钮 -->
      <div class="add-inventory">
        <button @click="addItem">添加库存</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return {
      inventory: [
        { name: "商品A", quantity: 100 },
        { name: "商品B", quantity: 50 },
        { name: "商品C", quantity: 200 },
      ],
    };
  },
  methods: {
    addItem() {
      alert("添加库存功能暂未实现");
    },
    editItem(item) {
      alert(`编辑商品: ${item.name}`);
    },
    deleteItem(item) {
      const index = this.inventory.indexOf(item);
      if (index !== -1) {
        this.inventory.splice(index, 1);
      }
    },
  },
};
</script>

<style scoped>
.main-layout {
  font-family: Arial, sans-serif;
  padding: 20px;
}

.navbar {
  background-color: #42b983;
  color: white;
  padding: 10px;
  text-align: center;
}

.main-content {
  margin-top: 20px;
}

.inventory-table {
  margin-bottom: 20px;
}

.inventory-table table {
  width: 100%;
  border-collapse: collapse;
}

.inventory-table th,
.inventory-table td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}

.inventory-table th {
  background-color: #f2f2f2;
}

.add-inventory button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add-inventory button:hover {
  background-color: #388e3c;
}
</style>
