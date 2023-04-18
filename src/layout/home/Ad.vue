<template>
  <div>
    <div class='ad'>
      <el-carousel trigger='click' indicator-position='none'>
        <el-carousel-item v-for='item in 4' :key='item'>
          <div class='pic-item'>
            <el-image :src='src'></el-image>
            <h5>阿里云服务器学生毕业季精品云服务半价优惠！</h5>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ad',
  data() {
    return {
      src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    }
  },
}
</script>

<style lang='scss' scoped>
.ad {
  margin-top: 15px;
  background: #fff;
  height:280px;
  margin-bottom: 10px;

  .el-carousel {
    ::v-deep .el-carousel__container {
      //height: 55vh !important;
    }
  }
}

.pic-item {
  position: relative;
  height: auto;

  h3 {
    position: absolute;
    left: 1rem;
    bottom: 40rem;
  }
}
</style>