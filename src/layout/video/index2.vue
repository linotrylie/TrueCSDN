<template>
  <div class="home">
    <div class="hero">
      <div class="title">发现新视频，与世界分享</div>
      <div class="subtitle">开始你的创作之旅</div>
      <div class="search-box">
        <input type="text" placeholder="搜索视频">
        <button>搜索</button>
      </div>
    </div>
    <div class="featured-videos">
      <div class="section-title">推荐视频</div>
      <div class="video-list">
        <div class="video-item" v-for="video in featuredVideos" :key="video.id">
          <div class="video-thumbnail">
            <img :src="video.thumbnail" alt="video thumbnail">
            <div class="overlay">
              <button class="play-button"><i class="el-icon-caret-right"></i></button>
            </div>
          </div>
          <div class="video-info">
            <div class="video-title">{{ video.title }}</div>
            <div class="video-details">
              <span class="author">{{ video.author }}</span>
              <span class="play-count">{{ video.playCount }}次播放</span>
              <span class="comment-count">{{ video.commentCount }}条评论</span>
              <span class="upload-date">{{ formatDate(video.uploadDate) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="popular-videos">
      <div class="section-title">热门视频</div>
      <div class="video-list">
        <div class="video-item" v-for="video in popularVideos" :key="video.id">
          <div class="video-thumbnail">
            <img :src="video.thumbnail" alt="video thumbnail">
            <div class="overlay">
              <button class="play-button"><i class="el-icon-caret-right"></i></button>
            </div>
          </div>
          <div class="video-info">
            <div class="video-title">{{ video.title }}</div>
            <div class="video-details">
              <span class="author">{{ video.author }}</span>
              <span class="play-count">{{ video.playCount }}次播放</span>
              <span class="comment-count">{{ video.commentCount }}条评论</span>
              <span class="upload-date">{{ formatDate(video.uploadDate) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="video-categories">
      <div class="section-title">视频分类</div>
      <div class="category-list">
        <div class="category-item" v-for="category in videoCategories" :key="category.id">
          <img :src="category.image" alt="category image">
          <div class="category-name">{{ category.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index2',
  data() {
    return {
      featuredVideos: [
        {
          id: 1,
          title: '这里是推荐视频1的标题',
          author: '作者名',
          playCount: 1234567,
          commentCount: 765,
          uploadDate: new Date(),
          thumbnail: 'https://via.placeholder.com/400x225.png'
        },
        {
          id: 2,
          title: '这里是推荐视频2的标题',
          author: '作者名',
          playCount: 987654,
          commentCount: 321,
          uploadDate: new Date(),
          thumbnail: 'https://via.placeholder.com/400x225.png'
        },
        // 添加更多的推荐视频
      ],
      popularVideos: [
        {
          id: 1,
          title: '这里是热门视频1的标题',
          author: '作者名',
          playCount: 987654,
          commentCount: 321,
          uploadDate: new Date(),
          thumbnail: 'https://via.placeholder.com/400x225.png'
        },
        {
          id: 2,
          title: '这里是热门视频2的标题',
          author: '作者名',
          playCount: 1234567,
          commentCount: 765,
          uploadDate: new Date(),
          thumbnail: 'https://via.placeholder.com/400x225.png'
        },
        // 添加更多的热门视频
      ],
      videoCategories: [
        {
          id: 1,
          name: '音乐',
          image: 'https://via.placeholder.com/120x120.png'
        },
        {
          id: 2,
          name: '游戏',
          image: 'https://via.placeholder.com/120x120.png'
        },
        {
          id: 3,
          name: '动漫',
          image: 'https://via.placeholder.com/120x120.png'
        },
        // 添加更多的视频分类
      ]
    }
  },
  methods: {
    formatDate(date) {
// 格式化上传日期
      return "${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}"
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  .hero {
    height: 400px;
    background: #f5f5f5 url('https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg') center center no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 20px;

    .title {
      font-size: 48px;
      font-weight: bold;
      color: #333;
      text-align: center;
      margin-bottom: 20px;
    }

    .subtitle {
      font-size: 24px;
      color: #666;
      text-align: center;
      margin-bottom: 40px;
    }

    .search-box {
      display: flex;
      justify-content: center;
      align-items: center;

      input {
        border: none;
        border-radius: 5px;
        padding: 10px;
        width: 300px;
        font-size: 18px;
        margin-right: 10px;
      }

      button {
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        font-size: 18px;
        color: #fff;
        background-color: #f60;
        cursor: pointer;
      }
    }
  }

  .section-title {
    font-size: 28px;
    font-weight: bold;
    color: #333;
    margin: 40px 0;
  }

  .video-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 40px;

    .video-item {
      width: 31%;
      margin-bottom: 30px;

      .video-thumbnail{
        display: block;
        position: relative;    img {
        width: 100%;
      }

        .play-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 48px;
          color: #fff;
          opacity: 0.8;
          cursor: pointer;
          transition: all 0.3s;

          &:hover {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 1;
          }
        }

        .video-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 10px;
        }

        .video-title {
          font-size: 16px;
          color: #333;
          margin-bottom: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .video-author {
          font-size: 14px;
          color: #999;
          margin-right: 10px;
        }

        .video-play-count {
          font-size: 14px;
          color: #999;
          margin-right: 10px;
        }

        .video-comment-count {
          font-size: 14px;
          color: #999;
          margin-right: 10px;
        }

        .video-upload-date {
          font-size: 14px;
          color: #999;
        }

        &:hover {
          .play-icon {
            opacity: 1;
          }

          .video-title {
            color: #f60;
          }
        }
      }
    }
  }

  .category-menu {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;.category-item {
    width: calc(100% / 8);
    text-align: center;

    img {
      width: 60%;
      margin-bottom: 10px;
    }

    span {
      font-size: 14px;
      color: #333;
    }
  }
  }
}
</style>