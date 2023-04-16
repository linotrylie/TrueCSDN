<template>
  <div class='layout'>
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import  Header from './common/Header.vue'
import Footer from './common/Footer.vue'
import MainContent from './common/MainContent.vue'
export default {
  name: 'Layout',
  components: {
    Header,
    Footer,
    MainContent
  },
  data() {
    return {}
  },
  methods: {

  },
  mounted() {

  },
}
</script>

<style lang="scss" scoped>
  .layout {
    width: 100%;
    height: 100%;
    .el-container{
      width: 100%;
      height: 100%;
      .el-header {
        width: 100%;
        padding: 0 !important;
        background: #fff;
        height: 80px !important;
        position: fixed;
      }
      .el-main {
        margin-top: 80px;
      }
    }
  }

</style>
