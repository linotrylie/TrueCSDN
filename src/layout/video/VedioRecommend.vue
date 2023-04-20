<template>
  <div class="video-recommend">
    <h2>推荐视频</h2>
    <div class="video-list">
      <div class="video" v-for="video in recommendedVideos" :key="video.id">
        <img :src="video.poster" alt="">
        <div class="info">
          <h3>{{ video.title }}</h3>
          <p>{{ video.description }}</p>
          <a :href="video.url">播放</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VedioRecommend',
  data() {
    return {
      recommendedVideos: [
        {
          id: 1,
          title: '推荐视频1',
          poster: './assets/recommended1.jpg',
          description: '这是推荐视频1的描述',
          url: 'https://www.example.com/recommended1'
        },
        {
          id: 2,
          title: '推荐视频2',
          poster: './assets/recommended2.jpg',
          description: '这是推荐视频2的描述',
          url: 'https://www.example.com/recommended2'
        },
        // 添加更多推荐视频...
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.video-recommend {
  $theme-color: #fff;
  h2 {
    margin: 30px 0 20px 0;
    font-size: 20px;
    font-weight: bold;
    color: #333;
  }

  .video-list {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding-bottom: 20px;

    .video {
      width: 240px;
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }

      img {
        width: 100%;
        height: 135px;
        object-fit: cover;
      }

      .info {
        margin-top: 10px;

        h3 {
          margin: 0;
          font-size: 16px;
          font-weight: bold;
          color: #333;
        }

        p {
          margin: 5px 0 0 0;
          font-size: 14px;
          color: #666;
        }

        a {
          display: inline-block;
          margin-top: 10px;
          padding: 5px 10px;
          border-radius: 20px;
          font-size: 14px;
          color: #fff;
          background-color: $theme-color;

          &:hover {
            background-color: lighten($theme-color, 10%);
          }
        }
      }
    }
  }
}
</style>