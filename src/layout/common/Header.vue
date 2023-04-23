<template>

  <div class='header'>
    <div class='nav'>
      <el-row :gutter='20' type='flex' justify='space-around'>
        <el-col :span='3'>
          <div class='web-title'><span class='web-sub-title'>True</span>CSDN</div>
        </el-col>
        <el-col :span='10'>
          <div class='nav-menu'>
            <el-menu :default-active='activeIndex' class='el-menu-demo' mode='horizontal' @select='handleSelect' router>
              <template v-for='(item , index) in menus'>
                <template v-if=' item.children !== undefined && item.children !== null  &&  item.children.length > 0'>
                  <el-submenu :index='item.path' :key="index + ''">
                    <template slot='title'>
                      {{ item.menu }}
                    </template>
                    <el-menu-item v-for='(child , cindex) in item.children' :index='child.path'
                                  :key="index + '-' + cindex"
                                  v-if='!child.isHidden'>{{ child.name }}
                    </el-menu-item>
                  </el-submenu>
                </template>
                <template v-else>
                  <el-menu-item :index='item.path' :key='index' v-if='!item.isHidden'> {{ item.menu }}</el-menu-item>
                </template>
              </template>
            </el-menu>
          </div>
        </el-col>
        <el-col :span='4'>
          <div class='search-nav'>
            <el-input placeholder='请输入内容' v-model='keyword' class='input-with-select'>
              <el-button slot='append' icon='el-icon-search'></el-button>
            </el-input>
          </div>
        </el-col>
        <el-col :span='4'>
          <div class='avatar-nav'>
            <router-link to='/login' v-if='!isLogin'>
              <el-avatar :size='50' :src='userSrc'></el-avatar>
            </router-link>

            <el-dropdown @command="handleClick" v-else>
              <router-link :to="{name:'user-center',query:{id:userid}}">
              <span class="el-dropdown-link">
                <el-avatar :size='50' :src="userSrc"></el-avatar>
              </span>
              </router-link>
              <el-dropdown-menu slot="dropdown" >
                <el-dropdown-item command='user-center'>个人中心</el-dropdown-item>
                <el-dropdown-item command='article'>发布文章</el-dropdown-item>
                <el-dropdown-item command='video'>上传视频</el-dropdown-item>
                <el-dropdown-item command='software'>分享资源</el-dropdown-item>
                <el-dropdown-item command='logout'>登出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import {getToken,delUser,removeToken} from '@/utils/auth.js'

export default {
  name: 'Header',
  data() {
    return {
      activeIndex: '1',
      keyword: '',
      userSrc:'',
      menus: [],
      isLogin:true,
      userid:0
    }
  },
  methods: {
    handleSelect(key, keyPath) {
    },
    handleUser() {
      this.userid = getToken('userId');
    },
    handleClick(val) {
      if(val === '' || val === null) {
        return;
      }
      switch (val) {
        case 'logout':
          this.logout();
          break;
        default:
            break;
      }
    },
    logout() {
      this.$api.auth.logout({}).then(res => {
        if(res.data.code === 0) {
          this.$notify.error(res.data.msg);
          return;
        }
        delUser();
        removeToken();
        this.$message.success('登出成功！');
        setTimeout(() => {
          this.$router.go(0);
        }, 2000)
      }).catch(err => {
        this.$notify.error('网络错误！');
      });
    }

  },
  mounted() {

  },
  created() {
    this.menus = [...this.$router.options.routes]
    let token = getToken('access_token');
    console.log(token)
    this.isLogin = !(token === null || token === '' || token === undefined);
    console.log(this.isLogin)
    this.userSrc = getToken('avatar');
    this.handleUser();
  },
  beforeCreate() {

  },
  beforeUpdate() {

  }
}
</script>

<style lang='scss' scoped>
.header {
  width: 100%;
  height: 80px;
  box-shadow: 5px 5px 5px #efeaea;

  .nav {
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;

    .el-row {
      width: 100%;

      .el-col {
        .nav-menu {
          width: 100%;
          margin-top: 10px;
          margin-left: 20px;

          .el-menu.el-menu--horizontal {
            border-bottom: 0 solid #efeaea !important;
          }
        }

        .search-nav {
          width: 100%;
          height: 80px;

          .el-input {
            margin-top: 20px;
          }
        }

        .avatar-nav {
          height: auto;

          ::v-deep .el-avatar {
            margin-top: 11pt;
          }
          .el-dropdown {
            vertical-align: top;
          }
          .el-dropdown + .el-dropdown {
            margin-left: 15px;
          }
          .el-icon-arrow-down {
            font-size: 12px;
          }
        }

        .web-title {
          line-height: 80px;
          width: 15%;
          font-size: 32px;
          margin-left: 40px;
          font-family: "Book Antiqua", serif;

          .web-sub-title {
            color: white;
            width: 70px;
            height: 40px;
            margin-top: 10px;
            background: dodgerblue;
          }
        }
      }
    }


  }


}
</style>
