<template>
  <div class="inventory">
    <h1>库存管理</h1>
    <el-table :data="inventoryItems" style="width: 100%">
      <el-table-column prop="name" label="产品名称" width="180"></el-table-column>
      <el-table-column prop="quantity" label="数量" width="100"></el-table-column>
      <el-table-column prop="price" label="价格" width="100"></el-table-column>
      <el-table-column label="操作" width="180">
        <template #default="scope">
          <el-button size="mini" @click="editItem(scope.row.id)">编辑</el-button>
          <el-button size="mini" type="danger" @click="deleteItem(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary" @click="addItem">添加库存</el-button>
  </div>
</template>

<script>
export default {
  name: 'InventoryPage',
  data() {
    return {
      inventoryItems: [
        { id: 1, name: '产品A', quantity: 10, price: 100 },
        { id: 2, name: '产品B', quantity: 20, price: 200 },
        // 更多库存项...
      ]
    };
  },
  methods: {
    addItem() {
      // 添加库存项的逻辑
    },
    editItem(id) {
      // 编辑库存项的逻辑
      console.log('编辑库存项', id);
    },
    deleteItem(id) {
      // 删除库存项的逻辑
      console.log('删除库存项', id);
    }
  }
}
</script>

<style scoped>
.inventory {
  padding: 20px;
  background-color: #f0f8ff;
}
</style>
