<template>
  <div class='login-body'>
    <div class='title'>{{ title }}</div>
    <div class='main'>
      <transition name='login-slide'>
        <div v-show='isLogup' class='login table-form'>
          <el-form ref='loginForm' :model='loginForm' :rules='ruleLogin' class='demo-ruleForm' label-width='100px'
                   status-icon>
            <el-form-item label='用户名' prop='username'>
              <el-input v-model.number='loginForm.username'></el-input>
            </el-form-item>
            <el-form-item label='密码' prop='password'>
              <el-input v-model='loginForm.password' autocomplete='off' type='password'></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type='primary' @click="submitForm('loginForm')">提交</el-button>
              <el-button @click="resetForm('loginForm')">重置</el-button>
              <el-button @click='handleLogup()'>注册</el-button>
            </el-form-item>
          </el-form>
        </div>
      </transition>
      <transition name='login-slide'>
        <div v-show='!isLogup' class='logup table-form'>
          <el-form ref='logupForm' :model='logupForm' :rules='ruleLogup' class='demo-ruleForm' label-width='100px'
                   status-icon>
            <el-form-item label='用户名' prop='username'>
              <el-input v-model.number='logupForm.username'></el-input>
            </el-form-item>
            <el-form-item label='密码' prop='password'>
              <el-input v-model='logupForm.password' autocomplete='off' type='password'></el-input>
            </el-form-item>
            <el-form-item label='确认密码' prop='checkPassword'>
              <el-input v-model='logupForm.checkPassword' autocomplete='off' type='password'></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type='primary' @click="submitForm('logupForm')">提交</el-button>
              <el-button @click="resetForm('logupForm')">重置</el-button>
              <el-button @click='handleLogup()'>前去登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </transition>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    var checkUser = (rule, value, callback) => {
      let reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (!value) {
        return callback(new Error('邮箱地址不能为空！'))
      }
      if (!reg.test(value)) {
        return callback(new Error('请输入正确的邮箱地址！'))
      }
      callback()
    }
    var validatePass = (rule, value, callback) => {
      let reg = /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/
      if (value === '') {
        callback(new Error('请输入密码'))
      }
      if (!reg.test(value)) {
        callback(new Error('密码强度不够，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符！'))
      }
      callback()
    }

    var validateLogupPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.logupForm.checkPassword !== '') {
          this.$refs.logupForm.validateField('checkPassword')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.logupForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      isLogup: false,
      title: '登录',
      loginForm: {
        username: '',
        password: '',
      },
      logupForm: {
        username: '',
        password: '',
        checkPassword: '',
      },
      ruleLogin: {
        password: [
          { validator: validatePass, trigger: 'blur' },
        ],
        username: [
          { validator: checkUser, trigger: 'blur' },
        ],
      },
      ruleLogup: {
        password: [
          { validator: validateLogupPassword, trigger: 'blur' },
        ],
        checkPassword: [
          { validator: validatePass2, trigger: 'blur' },
        ],
        username: [
          { validator: checkUser, trigger: 'blur' },
        ],
      },
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    handleLogup() {
      this.isLogup = !this.isLogup
      if (this.isLogup) {
        this.title = '注册'
      } else {
        this.title = '登录'
      }
    },
  },
}
</script>

<style lang='scss' scoped>
.login-body {
  width: 100%;
  height: 100%;
  background: #fff;
  opacity: 0.8;

  .title {
    font-size: 32px;
    text-align: center;
    height: 60px;
    padding-top: 20px;
    margin-bottom: 20px;
  }

  .main{
    display: flex;
    flex-direction: row;
    .table-form {
      width: 450px;
      height: auto;
      margin: 0 auto;
      box-shadow: 2px 2px 2px #8a93a0;
      display: flex;
      border-radius: 15px;

    }
    .logup {
      position: fixed;
      left: 40%;
      .el-form-item {
        margin-top: 35px;
      }
      .el-form-item:last-child {
        margin-top: 105px;
      }
    }
    .login {
      position: fixed;
      left: 40%;
      .el-form-item {
        margin-top: 35px;
      }
      .el-form-item:last-child {
        margin-top: 180px;
      }
    }
  }
  .login-slide-enter-active, .login-slide-leave-active {
    transition: opacity .5s
  }
  .login-slide-enter, .login-slide-leave-active {
    opacity: 0
  }
}

</style>