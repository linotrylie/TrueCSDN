<template>
  <div class='video-body'>
    <div class='main'>
      <div class='video-title'>
        <div class='title'>{{title}}</div>
        <div class='play-info'>
          <svg-icon name='icon-play-circle-outline'></svg-icon>
          <span title='总播放数1234'>1234</span>
          <svg-icon name='time-outline'></svg-icon>
          <span title='视频发布时间：2023-4-19 23:35:30'>2023-4-19 23:35:30</span>
          <div class='tags'>
            <el-tag size="mini" v-for='index in 8'>超小标签</el-tag>
          </div>
        </div>

      </div>
      <div class='video-frame'>
        <barrageVideoplayer
          :src="videoSrc"
          :biBarrageXml="barrageXml"
          width="100%"
          height="100%"
        ></barrageVideoplayer>
      </div>
      <div class='video-info'>
        <div class='barrage'>
          <span>5人正在看</span>
          <div class='input-barrage'>
            <el-input placeholder='发个友善的弹幕记录当下~' v-model='barrage' class='input-with-select' maxlength="120" show-word-limit>
            <el-button slot='append' type="primary" @click='submitBarrage'>发送</el-button>
          </el-input>
          </div>
        </div>
        <div class='author'>

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

    </div>
  </div>
</template>
<script>
import barrageVideoplayer from "./barrage-videoplayer.vue";
import Comment from '@/layout/comment/index.vue'
import { EXAMPLE_DATA } from '@/layout/comment/data.js'
import Interaction from '@/layout/interaction/Index.vue'
export default {
  name:'Video',
  props:['url','bXml'],
  components: {
    Interaction,
    barrageVideoplayer,
    Comment
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
      videoSrc: "https://yleen.cc/files/videos/摇曳露营01.mp4",
      barrageXml:"",
      data:[],
      commentData:{
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
      id:1,
      title:'摇曳露营',
      type:'video',
      barrage:''
    };
  },
  methods:{
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
    addData(times) {
      setTimeout(() => {
        this.data = new Array(times).fill(EXAMPLE_DATA).flat(Infinity)
      }, 0)
    },
    //发送弹幕
    submitBarrage(){
      if(this.barrage === '' || this.barrage.length < 5) {
        this.$message.error('请至少输入5个字符！')
        return;
      }
      console.log(this.barrage)
    }
  },
  created() {
    if(this.url !== undefined) {
      this.videoSrc =  this.url
    }
    if(this.bXml !== undefined) {
      this.barrageXml = this.bXml
    }
    this.addData(1)
  }
}
</script>
<style lang='scss' scoped>
.video-body{
  width: 75%;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  .main {
    width: 70%;
    .video-title {
      width: 100%;
      height: 80px;
      background:#fff;
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
        ::v-deep .svg-icon:hover {
          content: "播放数";
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
      width:100%;
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
        box-shadow: 1px 1px 1px 1px #585d5d;
        border-radius: 5px;
        span {
          width: 30%;
          display: inline-block;
          line-height: 50px;
          margin-left:10px;
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
    background: #fff;
    height: 1000px;
  }
}

</style>
