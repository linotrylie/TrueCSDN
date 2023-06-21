<template>
  <el-container style="height:100vh">
    <el-header>用户登录注册</el-header>
    <el-main>
      <el-tabs v-model="activeTab" plain>
        <el-tab-pane label="登录" name="login">
          <el-form :model="loginForm" ref="loginForm" label-width="80px" class="form-login">
            <el-form-item label="用户名">
              <el-input v-model.lazy.trim="loginForm.username"
                        placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input type="password" v-model.lazy="loginForm.password"
                        autocomplete="off" show-password placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitLogin">登录</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>

        <el-tab-pane label="注册" name="register">
          <el-form :model="registerForm" ref="registerForm" label-width="80px"
                   rules="registerRules" class="form-register">
            <el-form-item label="用户名" prop="username">
              <el-input v-model.lazy.trim="registerForm.username"
                        placeholder="4-16个字符（中英文都可）"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
              <el-input v-model.lazy.trim="registerForm.email"
                        placeholder="输入常用邮箱地址"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model.lazy="registerForm.password"
                        autocomplete="off" show-password placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPassword">
              <el-input type="password" v-model.lazy="registerForm.checkPassword"
                        autocomplete="off" show-password placeholder="再次输入密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitRegister">注册</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name:"AILogin",
  data() {
    return {
      activeTab: 'login',
      loginForm: {
        username: '',
        password: ''
      },
      registerForm: {
        username: '',
        email: '',
        password: '',
        checkPassword: ''
      },
      registerRules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }
        ],
        email: [
          {
            required: true,
            message: '请输入邮箱',
            trigger: 'blur'
          },
          {
            type: 'email',
            message: '邮箱地址不正确',
            trigger: ['blur', 'change']
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          },
          {
            min: 6,
            max: 16,
            message: '密码长度在6-16个字符之间',
            trigger: ['blur', 'change']
          }
        ],
        checkPassword: [
          {
            required: true,
            message: '请再次输入密码',
            trigger: 'blur'
          },
          {
            validator: (rule, value, callback) => {
              if (value !== this.registerForm.password) {
                return callback(new Error('两次输入的密码不一致'))
              }
              callback()
            },
            trigger: ['blur', 'change']
          }
        ]
      }
    }
  },

  methods: {
    submitLogin() {
      // 校验表单
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          console.log(this.loginForm)
          // TODO: 发送登录请求给服务器
        } else {
          console.warn('login form validate failed!')
          return false
        }
      })
    },

    submitRegister() {
      // 校验表单
      this.$refs.registerForm.validate((valid) => {
        if (valid) {
          console.log(this.registerForm)
          // TODO: 发送注册请求给服务器
        } else {
          console.warn('register form validate failed!')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
.el-header {
  text-align: center;
  padding-top: 20px;
  font-size: 30px;
  color: #fff;
  background-color: #409EFF;
}

.form-login,
.form-register {
  display: inline-block;
  max-width: 400px;
  width: 100%;
}
</style>
