<template>
  <div id="app">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <!-- <el-footer> -->
      <!-- <Footer></Footer> -->
      <!-- </el-footer> -->
    </el-container>

  </div>
</template>
<script>
import Header from '@/layout/common/Header.vue'
export default {
  name: 'App',
  components: { Header },
  data() {
    return {
    }
  },
  methods: {},
  mounted() {},
}
</script>

<style lang="scss" scoped>
  *{
    padding: 0;
    margin: 0;
  }
  #app {
    background: #f5f2f2;
  }
  #app {
    width: 100%;
    height: 100%;

    .el-container {
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
        // 滚动条整体部分
        &::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        // 滚动条的轨道的两端按钮，允许通过点击微调小方块的位置。
        &::-webkit-scrollbar-button {
          display: none;
        }
        // 滚动条的轨道（里面装有Thumb）
        &::-webkit-scrollbar-track {
          background: transparent;
        }
        // 滚动条的轨道（里面装有Thumb）
        &::-webkit-scrollbar-track-piece {
          background-color: transparent;
        }
        // 滚动条里面的小方块，能向上向下移动（或往左往右移动，取决于是垂直滚动条还是水平滚动条）
        &::-webkit-scrollbar-thumb {
          background: rgba(144, 147, 153, 0.3);
          cursor: pointer;
          border-radius: 4px;
        }
        // 边角，即两个滚动条的交汇处
        &::-webkit-scrollbar-corner {
          display: none;
        }
        // 两个滚动条的交汇处上用于通过拖动调整元素大小的小控件
        &::-webkit-resizer {
          display: none;
        }
      }
    }
  }
</style>
