<template>
  <div class='login-body'>
    <div class='title'>{{ title }}</div>
    <div class='main'>
      <transition name='login-slide'>
        <div v-show='!isLogup' class='login table-form'>
          <el-form ref='loginForm' :model='loginForm' :rules='ruleLogin' class='demo-ruleForm' label-width='100px'
                   status-icon>
            <el-form-item label='用户名' prop='username'>
              <el-input v-model.number='loginForm.username'></el-input>
            </el-form-item>
            <el-form-item label='密码' prop='password'>
              <el-input v-model='loginForm.password' autocomplete='off' type='password'></el-input>
            </el-form-item>
            <el-form-item label='验证码' prop='captcha'>
              <el-input v-model='loginForm.captcha' style='width: 50%'>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-image :src='captchaUrl' @click='changeImageUrl'></el-image>
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
        <div v-show='isLogup' class='logup table-form'>
          <el-form ref='logupForm' :model='logupForm' :rules='ruleLogup' class='demo-ruleForm' label-width='100px'
                   status-icon>
            <el-form-item label='用户名' prop='username'>
              <el-input v-model.number='loginForm.username'></el-input>
            </el-form-item>
            <el-form-item label='邮箱地址' prop='email'>
              <el-input v-model.number='logupForm.email'></el-input>
            </el-form-item>
            <el-form-item label='邮箱验证码' prop='emailCaptcha'>
              <el-input v-model.number='logupForm.emailCaptcha' style='width: 50%'>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button :disabled='countdown > 0' @click='startCountdown'>
                {{ countdown > 0 ? countdown + '秒' : '发送验证码' }}
              </el-button>
            </el-form-item>
            <el-form-item label='密码' prop='password'>
              <el-input v-model='logupForm.password' autocomplete='off' type='password'></el-input>
            </el-form-item>
            <el-form-item label='确认密码' prop='checkPassword'>
              <el-input v-model='logupForm.checkPassword' autocomplete='off' type='password'></el-input>
            </el-form-item>
            <el-form-item label='验证码' prop='captcha'>
              <el-input v-model='logupForm.captcha' style='width: 50%'>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-image :src='captchaUrl' @click='changeImageUrl'></el-image>
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
import {setUser,setToken} from '@/utils/auth.js'
export default {
  name: 'Login',
  data() {
    var checkEmail = (rule, value, callback) => {
      let reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (!value) {
        return callback(new Error('邮箱地址不能为空！'))
      }
      if (!reg.test(value)) {
        return callback(new Error('请输入正确的邮箱地址！'))
      }
      callback()
    }
    var checkUsername = (rule, value, callback) => {
      let reg = /^[\w-]{4,16}$/
      if (!value) {
        return callback(new Error('用户名不能为空！'))
      }
      if (!reg.test(value)) {
        return callback(new Error('请输入正确的用户名！'))
      }
      callback()
    }
    var validatePass = (rule, value, callback) => {
      let reg = /^([a-zA-Z]+[0-9]+[,._!@#$%^&*]+)|([a-zA-Z]+[,._!@#$%^&*]+[0-9]+)|([0-9]+[,._!@#$%^&*]+[a-zA-Z]+)|([0-9]+[a-zA-Z]+[,._!@#$%^&*]+)|([,._!@#$%^&*]+[a-zA-Z]+[0-9]+)|([,._!@#$%^&*]+[0-9]+[a-zA-Z]+)$/

      if (value === '') {
        callback(new Error('请输入密码'))
      }
      if (!reg.test(value)) {
        callback(new Error('密码强度不够，最少6位，包括至少1个字母，1个数字，1个特殊字符！'))
      }
      if(value.length < 6) {
        callback(new Error('密码长度不够'))
      }
      callback()
    }

    var validateLogupPassword = (rule, value, callback) => {
      let reg = /^([a-zA-Z]+[0-9]+[,._!@#$%^&*]+)|([a-zA-Z]+[,._!@#$%^&*]+[0-9]+)|([0-9]+[,._!@#$%^&*]+[a-zA-Z]+)|([0-9]+[a-zA-Z]+[,._!@#$%^&*]+)|([,._!@#$%^&*]+[a-zA-Z]+[0-9]+)|([,._!@#$%^&*]+[0-9]+[a-zA-Z]+)$/

      if (value === '') {
        callback(new Error('请输入密码'))
      }
      if (!reg.test(value)) {
        callback(new Error('密码强度不够，最少6位，包括至少1个字母，1个数字，1个特殊字符！'))
      }
      if(value.length < 6) {
        callback(new Error('密码长度不够'))
      }
      callback()
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
    var checkCaptcha = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('验证码不能为空'))
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
        captcha: '',
      },
      logupForm: {
        email: '',
        password: '',
        checkPassword: '',
        emailCaptcha: '',
        captcha: '',
      },
      ruleLogin: {
        password: [
          { validator: validatePass, trigger: 'blur' },
        ],
        username: [
          { validator: checkUsername, trigger: 'blur' },
        ],
        captcha: [{ validator: checkCaptcha, trigger: 'blur' }],
      },
      ruleLogup: {
        password: [
          { validator: validateLogupPassword, trigger: 'blur' },
        ],
        checkPassword: [
          { validator: validatePass2, trigger: 'blur' },
        ],
        email: [
          { validator: checkEmail, trigger: 'blur' },
        ],
        emailCaptcha: [{ validator: checkCaptcha, trigger: 'blur' }],
        captcha: [{ validator: checkCaptcha, trigger: 'blur' }],
      },
      captchaUrl: '',
      countdown: 0,
      timer: null,
      num:0,
    }
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var result
          if (formName === 'logup') {
            result = this.$api.auth.logup(this.logupForm)
          } else {
            result = this.$api.auth.login(this.loginForm)
          }
          result.then(res => {
            console.log(res)
            if(res.data.code === 0) {
              this.$notify.error(res.data.msg);
              return;
            }
            setUser(res.data.data.user);
            let token = res.data.data.jwt.token_type+" "+res.data.data.jwt.access_token
            setToken('access_token',token)
            this.$message.success('登录成功！');
            setTimeout(() => {
              this.$router.go(-1);
            }, 2000)
          }).catch(err => {
            this.$notify.error('网络错误！');
          })
        } else {
          return false
        }
      })
    }
    ,
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
    ,
    handleLogup() {
      this.isLogup = !this.isLogup
      if (this.isLogup) {
        this.title = '注册'
      } else {
        this.title = '登录'
      }
    }
    ,
    changeImageUrl() {
      this.num = Math.ceil(Math.random() * 1000);
      this.captchaUrl = this.$api.base.t + '/captcha-img?num=' + this.num
    }
    ,
    startCountdown() {
      this.countdown = 59
      this.timer = setInterval(() => {
        if (this.countdown > 0) {
          this.countdown--
        } else {
          clearInterval(this.timer)
          this.timer = null
        }
      }, 1000)
    },
  }
  ,
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer)
      this.timer = null
    }
  }
  ,
  watch:
    {
      handler(newVal) {
        this.countdown = newVal
      },
    }
  ,
  created() {
    //生成一个随机数（防止缓存）
    this.num = Math.ceil(Math.random() * 1000);
    this.captchaUrl = this.$api.base.t + '/captcha-img?num=' + this.num;
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

  .main {
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