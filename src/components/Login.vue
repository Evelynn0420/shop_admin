<template>
  <div class="login">
  <el-form ref="form" :model="form" :rules="rules" label-width="80px">
    <img src="../assets/avatar.jpg" alt="">
    <el-form-item label="用户名" prop="username">
      <el-input v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="form.password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="warning" @click="login">登录</el-button>
      <el-button id="cancel">重置</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {required: true, message: '请输入用户名称', trigger: 'blur'},
          {min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入用户密码', trigger: 'blur'},
          {min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    // 登录方法
    login () {
      this.$refs.form.validate(valid => {
        if (valid) {
          alert('登录成功')
        } else {
          // 校验失败
          return false
        }
      })
    }
  }
}
</script>

<style lang="less">
.login {
  height: 100%;
  width: 100%;
  background-color: rosybrown;
  overflow: hidden;
  .el-form {
    border-radius: 20px;
    padding: 75px 40px 15px;
    background-color: blanchedalmond;
    width: 400px;
    margin: 200px auto;
    position: relative;
    #cancel {
      margin-left: 175px;
    }
    img {
      position: absolute;
      top: -70px;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 50%;
      border: 10px solid #fff;
    }
  }
}
</style>
