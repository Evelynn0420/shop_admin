<template>
  <el-container class="home">
    <el-header>
      <div class="logo"></div>
      <div class="title">
        <h1>电商后台管理系统</h1>
      </div>
      <div class="logout">
        <span>欢迎光临</span>
        <a href="javascript:;">退出</a>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
// lang 设置语言的  scoped只会在当前组件样式生效
.home {
  height: 100%;
  .el-header {
    background-color: darkgrey;
    display: flex;
    .logo {
      width: 180px;
      background-image: url('~@/assets/logo.png');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;
    }
    .logout {
      width: 180px;
      text-align: center;
      line-height: 60px;
      font-size: 700;
      a {
        color: rgb(221, 52, 46);
        text-decoration: none;
      }
    }
    .title {
      flex: 1;
      h1 {
        text-align: center;
        line-height: 60px;
        color: #fff;
        font-size: 30px;
      }
    }
  }
  .el-aside {
    background-color: burlywood;
  }
  .el-main {
    background-color: #eaeef1;
  }
}
</style>
