<template>
  <div class="layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">sdf</el-aside>
        <el-main style="">
          <RouterView/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "main"
}
</script>

<style scoped>
.layout{

}
</style>