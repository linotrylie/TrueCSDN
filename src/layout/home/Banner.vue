<template>
  <div class='banner-content'>
    <el-carousel :interval='8000' arrow='always'>
      <el-carousel-item v-for='(item,index) in BannerList' :key='index'>
        <el-image :src='item.cover_img' style='height: auto;width: auto'>
        </el-image>
        <router-link :to="{name:'video-info',params:{title:item.title,id:item.id}}" v-if='item.type === 2'>
          <h3>{{item.title}}</h3>
        </router-link>
        <router-link :to="{name:'article-info',params:{title:item.title,id:item.id}}" v-else>
          <h3>{{item.title}}</h3>
        </router-link>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data() {
    return {
      BannerList:{}
    }
  },
  methods:{
    loadBanner() {
      this.$api.article.bannerList().then(res=>{
        if(res.data.code) {
          this.BannerList = res.data.data.list;
        }else{
          this.$notify.error(res.data.msg);
        }
      }).catch(err => {
        this.$notify.error('网络错误！');
      })
    },
  },
  created() {
    this.loadBanner();
  }
}
</script>

<style lang='scss' scoped>
.banner-content {
  width: 65%;
  height: 318px;
  background: #fff;
  margin-right: 15px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  position: relative;
  .el-carousel__item h3 {
    color: #ffffff;
    font-size: 18px;
    opacity: 0.75;
    position: fixed;
    bottom: 10px;
    overflow: hidden;
    white-space: normal;
    word-break: break-word;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
}
</style>
