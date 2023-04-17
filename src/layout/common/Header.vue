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
                      {{ item.name }}
                    </template>
                    <el-menu-item v-for='(child , cindex) in item.children' :index='child.path'
                                  :key="index + '-' + cindex"
                                  v-if='child.isHidden'>{{ child.name }}
                    </el-menu-item>
                  </el-submenu>
                </template>
                <template v-else>
                  <el-menu-item :index='item.path' :key='index' v-if='item.isHidden'>{{ item.name }}</el-menu-item>
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
            <el-avatar :size='50' :src='circleUrl'></el-avatar>
          </div>
        </el-col>
      </el-row>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      activeIndex: '1',
      keyword: '',
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      menus: [],
    }
  },
  methods: {
    handleSelect(key, keyPath) {
    },
  },
  mounted() {

  },
  created() {
    this.menus = [...this.$router.options.routes]
  },
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