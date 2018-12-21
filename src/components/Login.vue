<template>
  <div class="login">
    <el-form status-icon ref="form" :model="form" :rules="rules" label-width="80px">
      <img src="../assets/avatar.jpg" alt>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" @keyup.native.enter="login"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" @keyup.native.enter="login"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="warning" @click="login">登录</el-button>
        <el-button id="cancel" @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// 导入axios
import axios from 'axios'
export default {
  data() {
    return {
      // 收集表单数据
      form: {
        username: '',
        password: ''
      },
      // 表单校验
      rules: {
        username: [
          { required: true, message: '请输入用户名称', trigger: 'change' },
          { min: 3, max: 9, message: '长度在 3 到 9 个字符', trigger: 'change' }
        ],
        password: [
          { required: true, message: '请输入用户密码', trigger: 'change' },
          {
            min: 6,
            max: 12,
            message: '长度在 6 到 12 个字符',
            trigger: 'change'
          }
        ]
      }
    }
  },
  methods: {
    reset() {
      // 获取表单组件
      this.$refs.form.resetFields()
    },
    // 登录方法
    login() {
      this.$refs.form.validate(valid => {
        if (valid) {
          // 发送ajax请求 进行登录
          axios({
            method: 'post',
            url: 'http://localhost:8888/api/private/v1/login',
            data: this.form
          }).then(res => {
            if (res.data.meta.status === 200) {
              // alert('登录成功')
              // 把后台颁发的token存起来
              localStorage.setItem('token', res.data.data.token)
              // 跳转到home组件
              // 参数跳转的路径
              this.$router.push('/home')
              this.$message.success('登录成功')
            } else {
              this.$message({
                message: res.data.meta.msg,
                type: 'error',
                duration: 1000
              })
            }
          })
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
    .el-form-item__label {
      text-align: center;
    }
    .el-form-item.is-required:not(.is-no-asterisk)
      > .el-form-item__label:before {
      content: '';
    }
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
