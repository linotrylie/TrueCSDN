<template>
  <div class="video-hot">
    <h2>热门视频</h2>
    <div class="video-list">
      <div class="video" v-for="video in hotVideos" :key="video.id">
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
  name: 'VideoHot',
  data() {
    return {
      hotVideos: [
        {
          id: 1,
          title: '热门视频1',
          poster: './assets/hot1.jpg',
          description: '这是热门视频1的描述',
          url: 'https://www.example.com/hot1'
        },
        {
          id: 2,
          title: '热门视频2',
          poster: './assets/hot2.jpg',
          description: '这是热门视频2的描述',
          url: 'https://www.example.com/hot2'
        },
        // 添加更多热门视频...
      ]
    }
  }
}
</script>
<style lang="scss">
$theme-color: #fff;
.video-hot {
  h2 {
    margin: 30px 0 20px 0;
    font-size: 20px;
    font-weight: bold;
    color: #333;
  }

  .video-list {
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;

    .video {
      display: flex;
      margin-bottom: 20px;

      img {
        width: 150px;
        height: 100px;
        object-fit: cover;
      }

      .info {
        margin-left: 20px;

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