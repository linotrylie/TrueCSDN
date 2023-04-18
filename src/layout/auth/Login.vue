<template>
  <div class='login-body'>
    <div class='title'>{{title}}</div>
    <div class='login table-form' v-show='!isLogup'>
      <el-form :model="loginForm" status-icon :rules="ruleLogin" ref="loginForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model.number="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
          <el-button @click="resetForm('loginForm')">重置</el-button>
          <el-button @click="handleLogup()">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class='logup table-form' v-show='isLogup'>
      <el-form :model="logupForm" status-icon :rules="ruleLogup" ref="logupForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model.number="logupForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="logupForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPassword">
          <el-input type="password" v-model="logupForm.checkPassword" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('logupForm')">提交</el-button>
          <el-button @click="resetForm('logupForm')">重置</el-button>
          <el-button @click="handleLogup()">前去登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data(){
    var checkUser = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };

    var validateLogupPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.logupForm.checkPassword !== '') {
          this.$refs.logupForm.validateField('checkPassword');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.logupForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      isLogup:false,
      title:'登录',
      loginForm:{
        username:'',
        password:'',
      },
      logupForm:{
        username:'',
        password:'',
        checkPassword:''
      },
      ruleLogin: {
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
        username: [
          { validator: checkUser, trigger: 'blur' }
        ]
      },
      ruleLogup: {
        password: [
          { validator: validateLogupPassword, trigger: 'blur' }
        ],
        checkPassword: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        username: [
          { validator: checkUser, trigger: 'blur' }
        ]
      },
    }
  },
  methods : {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleLogup() {
      this.isLogup = !this.isLogup;
      if(this.isLogup) {
        this.title = '注册'
      }else{
        this.title = '登录'
      }
    }
  }
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
  .table-form {
    width: 450px;
    height: auto;
    margin: 0 auto;
    box-shadow: 2px 2px 2px #8a93a0;
    display: flex;
    border-radius: 15px;
    .el-form {
      .el-form-item {
        margin-top:35px;
      }
    }
  }

}
</style>