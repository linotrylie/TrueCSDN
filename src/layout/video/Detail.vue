<template>
  <div class='video-body'>
    <div class='main'>
      <div class='video-title'>
        <div class='title'>{{ title }}</div>
        <div class='play-info'>
          <svg-icon name='icon-play-circle-outline'></svg-icon>
          <span title='总播放数1234'>1234</span>
          <svg-icon name='time-outline'></svg-icon>
          <span title='视频发布时间：2023-4-19 23:35:30'>2023-4-19 23:35:30</span>
          <div class='tags'>
            <el-tag v-for='index in 8' size='mini'>超小标签</el-tag>
          </div>
        </div>

      </div>
      <div class='video-frame'>
        <barrageVideoplayer
          :biBarrageXml='barrageXml'
          :src='videoSrc'
          height='100%'
          width='100%'
        ></barrageVideoplayer>
      </div>
      <div class='video-info'>
        <div class='barrage'>
          <span>5人正在看</span>
          <div class='input-barrage'>
            <el-input v-model='barrage' class='input-with-select' maxlength='120' placeholder='发个友善的弹幕记录当下~'
                      show-word-limit>
              <el-button slot='append' type='primary' @click='submitBarrage'>发送</el-button>
            </el-input>
          </div>
        </div>
        <Interaction :id='id' :title='title' :type='type'></Interaction>
      </div>
      <div class='comment'>
        <div ref='comment' :style='wrapStyle' class='comment-wrap'>
          <Comment
            v-model='data'
            :before-delete='deleteComment'
            :before-like='like'
            :before-submit='submit'
            :props='commentData'
            :upload-img='uploadImg'
            :user='currentUser'
          />
        </div>
      </div>
    </div>
    <div class='left-body'>
      <div class='author'>
        <div class='avatar'>
          <el-avatar
            src='https://pic.code-nav.cn/user_avatar/1621094259987947521/Zz4fuDXN-QQ%E5%9B%BE%E7%89%8720221118113213.jpg'></el-avatar>
        </div>
        <div class='author-info'>
          <div class='author-name'>
            <h3>Linotrylie</h3>
            <div class='follow'>
              <el-button v-if='!IsFollow' @click='changeFollow(IsFollow)' type='primary'>关 注</el-button>
              <el-button v-else @click='changeFollow(IsFollow)'>已关注</el-button>
            </div>
          </div>
          <div class='author-article'>
            <el-row :gutter='20'>
              <el-col :span='10'>
                <span title='粉丝数：4325人'><svg-icon height='15' name='people-outline' width='15'></svg-icon>：4325人</span>
              </el-col>
              <el-col :span='10'>
                <span title='文章：1234篇'> <svg-icon height='15' name='reader-outline' width='15'></svg-icon>：1234篇</span>
              </el-col>
            </el-row>
            <el-row :gutter='20'>
              <el-col :span='10'>
                <span title='视频：2342个'><svg-icon height='15' name='videocam-outline' width='15'></svg-icon>：2342个</span>
              </el-col>
              <el-col :span='10'>
                <span title='资源：12个'><svg-icon height='15' name='save-outline' width='15'></svg-icon>：12个</span>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
      <div class='video-list'>
        <div class='list-title'>
          <p>视频选集</p>
          <el-button icon='el-icon-arrow-down' type="text" @click='HandleOpenItemList' v-if='openItemList'>展开</el-button>
          <el-button icon='el-icon-arrow-up' type="text" @click='HandleOpenItemList' v-else>收起</el-button>
        </div>

        <transition name='item-list'>
          <div class='video-item-list' v-show='openItemList'>
            <div v-for='index in 12' class="video-item" :style="id===Detail ? currentStyle : ''">
                <a :href="'/#/video/'+title+'/'+index" target='_blank'>
                  <div class='item-number'>{{ index }}</div>
                  <div class='item-tag'>免费</div>
                </a>
            </div>
          </div>
        </transition>
        <transition name='item-list'>
          <div class='video-item-list' v-show='openItemList'>

          </div>
        </transition>
      </div>
      <RecommendVideo></RecommendVideo>
      <Ad></Ad>
    </div>
  </div>
</template>
<script>
import barrageVideoplayer from './barrage-videoplayer.vue'
import Comment from '@/layout/comment/index.vue'
import { EXAMPLE_DATA } from '@/layout/comment/data.js'
import Interaction from '@/layout/interaction/Index.vue'
import Author from '@/layout/home/RecommendAuthor.vue'
import RecommendVideo from '@/layout/video/RecommendVideo.vue'
import Ad from '@/layout/home/Ad.vue'

export default {
  name: 'Video',
  props: ['url', 'bXml'],
  components: {
    Ad,
    RecommendVideo,
    Author,
    Interaction,
    barrageVideoplayer,
    Comment,
  },
  data() {
    const users = [
      {
        name: 'Up&Up',
        avatar: '',
        author: false,
      },
      {
        name: '我叫白云',
        avatar: '',
      },
      {
        name: '我叫黑土',
        avatar: '',
      },
      {
        name: 'NARUTO',
        avatar: '',
      },
    ]
    return {
      videoSrc: 'https://yleen.cc/files/videos/摇曳露营01.mp4',
      barrageXml: '',
      data: [],
      commentData: {
        id: '_id',
        content: 'content',
        imgSrc: 'imgSrc',
        children: 'childrenComments',
        likes: 'likes',
        liked: 'liked',
        reply: 'reply',
        createAt: 'createAt',
        user: 'visitor',
      },
      currentUser: users[0],
      users,
      wrapStyle: '',
      id: 1,
      title: '摇曳露营',
      type: 'video',
      barrage: '',
      IsFollow: true,
      openItemList:true,
      currentStyle:''
    }
  },
  mounted() {
    this.id = this.$route.params.id
    this.title = this.$route.params.title
    this.currentStyle = `background: #7f96e0;color:#fff;`
    console.log(this.id)
  },
  methods: {
    async submit(newComment, parent, add) {
      const res = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({ newComment, parent })
        }, 300)
      })
      add(Object.assign(res.newComment, { _id: new Date().getTime() }))
      console.log('addComment: ', res)
    },
    async like(comment) {
      const res = await new Promise((resolve) => {
        setTimeout(() => {
          resolve(comment)
        }, 0)
      })
      console.log('likeComment: ', res)
    },
    async uploadImg({ file, callback }) {
      const res = await new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
          resolve(reader.result)
        }
        reader.onerror = () => {
          reject(reader.error)
        }
      })
      callback(res)
      console.log('uploadImg： ', res)
    },
    async deleteComment(comment, parent) {
      const res = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({ comment, parent })
        }, 300)
      })
      console.log('deleteComment: ', res)
    },
    addData() {
      let params = {
        vid:this.$route.params.id,
      }
      this.$api.interaction.getCommentList(params).then(res => {
        if (res.data.code === 0) {
          this.$notify.error(res.data.msg);
          return;
        }
        this.data = res.data.data.list;
      }).catch(err => {
        console.log(err)
        this.$notify.error('网络错误！');
      })
    },
    //发送弹幕
    submitBarrage() {
      if (this.barrage === '' || this.barrage.length < 5) {
        this.$message.error('请至少输入5个字符！')
        return
      }
      console.log(this.barrage)
    },
    changeFollow(IsFollow) {
      this.IsFollow = !IsFollow
    },
    HandleOpenItemList() {
      this.openItemList = !this.openItemList
    }
  },
  created() {
    if (this.url !== undefined) {
      this.videoSrc = this.url
    }
    if (this.bXml !== undefined) {
      this.barrageXml = this.bXml
    }
    this.addData()
    document.title = this.$route.params.title

  },
  beforeCreate() {

  }
}
</script>
<style lang='scss' scoped>
.video-body {
  width: 75%;
  display: flex;
  flex-direction: row;
  margin: 0 auto;

  .main {
    width: 70%;

    .video-title {
      width: 100%;
      height: 80px;
      background: #fff;
      margin-bottom: 10px;

      .title {
        font-size: 32px;
        font-weight: 700;
        text-indent: 0.5em;
      }

      .play-info {
        line-height: 40px;
        display: flex;
        flex-direction: row;
        ::v-deep .svg-icon {
          margin-top: 8px;
          margin-right: 8px;
          margin-left: 8px;
          opacity: 0.5;
        }
        span {
          width: 20%;
          height: 40px;
          color: #585d5d;
          display: inline-block;
        }

        .tags {
          width: 80%;

          .el-tag {
            width: auto;
            margin-left: 10px;
            height: 20px;
          }
        }
      }
    }

    .video-frame {
      width: 100%;

      .player-area {
        width: 100%;
        height: auto;
      }
    }

    .video-info {
      width: 100%;

      ::v-deep .interaction {
        margin-top: 10px;
      }

      .barrage {
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: row;
        margin-top: 10px;
        background: #fff;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        border-radius: 5px;

        span {
          width: 30%;
          display: inline-block;
          line-height: 50px;
          margin-left: 10px;
        }

        .input-barrage {
          width: 70%;
          line-height: 50px;
          padding-left: 34%;
        }
      }
    }

    .comment {
      width: 100%;
      height: 500px;

      .comment-wrap {
        width: 100%;
        height: auto;
        margin-top: 10px;
        background: #fff;
      }
    }
  }

  .left-body {
    width: 25%;
    margin-left: 10px;
    height: 1000px;
    .author {
      width: 100%;
      height: 140px;
      display: flex;
      flex-direction: row;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      margin-bottom: 10px;
      .avatar {
        width: 15%;
        height: 100%;
        ::v-deep .el-avatar {
          margin-left: 5px;
          margin-top: 15px;
        }
      }

      .author-info {
        width: 100%;
        .author-name {
          width: 100%;
          display: flex;
          flex-direction: row;
          height: 70px;
          ::v-deep .el-button {
            margin: 0 auto;
            margin-top: 5px;
            margin-right: 5px;
          }

          h3 {
            width: 100%;
            overflow: hidden;
            white-space: normal;
            word-break: break-word;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            margin-top: 15px;
            margin-left: 15px;
          }
        }

        .author-article {
          width: 100%;
          height: 40px;

          span {
            display: inline-block;
            font-size: 5px;
            width: 90%;
            height: 20px;
            overflow: hidden;
            white-space: normal;
            word-break: break-word;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            margin-top: 5px;
            margin-left: 15px;
            line-height: 20px;

            .svg-icon {

            }
          }
        }
      }
    }

    .video-list {
      width: 100%;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      .list-title {
        display: flex;
        justify-content: space-around;
        p{
          font-size: 18px;
          text-indent: 1em;
          height: 35px;
          line-height: 35px;
          box-shadow: 1px 1px 1px #efeaea;
          margin-bottom: 5px;
        }
      }
      .video-item-list {
        width: 100%;
        height: auto;
        overflow: hidden;
        overflow-y: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        .video-item {
          width: 18%;
          height: 45px;
          box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
          margin-bottom: 5px;
          margin-left: 5px;
          text-align: center;
          background: #fff;
        }
        .current {
          background: #7f96e0;
          color:#fff;
        }
        .video-item:hover {
          box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.5);
        }
        .item-list-enter-active, .item-list-leave-active {
          transition: opacity .5s
        }
        .item-list-enter, .item-list-leave-active {
          opacity: 0
        }

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

}


</style>
