<template>
  <div class='video-homepage'>
    <!-- 轮播图 -->
    <el-carousel :interval='5000'>
      <el-carousel-item v-for='(item, index) in bannerList' :key='index'>
      </el-carousel-item>
    </el-carousel>

    <!-- 分类栏目 -->
    <el-row class='video-category'>
      <VideoCategory></VideoCategory>
    </el-row>

    <!-- 推荐视频 -->
    <el-row class='video-recommend'>
      <VedioRecommend></VedioRecommend>
    </el-row>

    <!-- 热门视频 -->
    <el-row class='video-hot'>
      <VideoHot></VideoHot>
    </el-row>

    <!-- 视频榜单 -->
    <el-row class='video-rank'>
      <VedioRank></VedioRank>
    </el-row>
  </div>
</template>

<script>
import VideoCategory from '@/layout/video/VideoCategory.vue'
import VedioRecommend from '@/layout/video/VedioRecommend.vue'
import VideoHot from '@/layout/video/VideoHot.vue'
import VedioRank from '@/layout/video/VedioRank.vue'
export default {
  components: { VedioRank, VideoHot, VedioRecommend, VideoCategory },
  data() {
    return {
      bannerList: [
        { id: 1, imgUrl: './assets/banner1.jpg' },
        { id: 2, imgUrl: './assets/banner2.jpg' },
        { id: 3, imgUrl: './assets/banner3.jpg' },
        { id: 4, imgUrl: './assets/banner4.jpg' },
      ],
      categoryList: [
        { id: 1, title: '电影', imgUrl: './assets/category1.jpg' },
        { id: 2, title: '电视剧', imgUrl: './assets/category2.jpg' },
        { id: 3, title: '综艺', imgUrl: './assets/category3.jpg' },
        { id: 4, title: '动漫', imgUrl: './assets/category4.jpg' },
      ],
      recommendList: [
        { id: 1, title: '推荐视频1', imgUrl: './assets/recommend1.jpg', description: '这是一个很好看的视频' },
        { id: 2, title: '推荐视频2', imgUrl: './assets/recommend2.jpg', description: '这也是一个很好看的视频' },
        { id: 3, title: '推荐视频3', imgUrl: './assets/recommend3.jpg', description: '这还是一个很好看的视频' },
        {
          id: 4, title: '推荐视频4', imgUrl: './assets/recommend4.jpg', description: ''
        },
        { id: 5, title: '推荐视频5', imgUrl: './assets/recommend5.jpg', description: '这依然是一个很好看的视频' },
        { id: 6, title: '推荐视频6', imgUrl: './assets/recommend6.jpg', description: '这也不错啊' },
      ],
      hotList: [
        { id: 1, title: '热门视频1', imgUrl: './assets/hot1.jpg', description: '这是一个很热门的视频' },
        { id: 2, title: '热门视频2', imgUrl: './assets/hot2.jpg', description: '这也是一个很热门的视频' },
        { id: 3, title: '热门视频3', imgUrl: './assets/hot3.jpg', description: '这还是一个很热门的视频' },
      ],
      rankList: [
        { id: 1, rank: 1, title: '排名第一的视频', playCount: 10000 },
        { id: 2, rank: 2, title: '排名第二的视频', playCount: 8000 },
        { id: 3, rank: 3, title: '排名第三的视频', playCount: 6000 },
        { id: 4, rank: 4, title: '排名第四的视频', playCount: 4000 },
        { id: 5, rank: 5, title: '排名第五的视频', playCount: 2000 },
      ],
    }
  },
}
</script>

<style lang='scss' scoped>
$theme-color: #fff;
.video-homepage {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.video-category {
  margin-top: 20px;
  margin-bottom: 20px;
}

.category-item {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;
}

.category-item img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.category-item span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-shadow: 2px 2px #000;
}

.video-recommend,
.video-hot {
  margin-bottom: 20px;
}

.video-item {
  width: 100%;
  margin-right: 20px;
  margin-bottom: 20px;
  position: relative;
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;
}

.video-item img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-item h3 {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  text-shadow: 2px 2px #000;
}

.video-item p
.video-item p {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  font-size: 14px;
  text-shadow: 2px 2px #000;
}

.video-rank {
  margin-bottom: 20px;
}

.rank-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.rank-item img {
  width: 120px;
  height: 80px;
  object-fit: cover;
  margin-right: 10px;
}

.rank-item h3 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.rank-item p {
  font-size: 14px;
  color: #999;
}
</style>