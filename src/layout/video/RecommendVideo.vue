<template>
  <div class='recommed-video-body' >
    <template v-for='(item ,index) in recommendItem' >
      <router-link :to="{name:'video-info',params:{id:item.id,title:item.title}}">
        <div class='video-item-list' >
          <div class='video-image'>
            <el-image :src='item.imageSrc' style="width: 100%; height: 85%"></el-image>
          </div>
          <div class='item-info'>
            <div class='video-title'>
              {{item.title}}
            </div>
            <div class='video-author'>
              <svg-icon name='person-outline' width='16' height='16'></svg-icon>
              <span title='上传者'>{{item.upper}}</span>
            </div>
            <div class='video-item-info'>
              <svg-icon name='icon-play-circle-outline' width='16' height='16'></svg-icon>
              <span title='总播放数'>{{item.playNum}}</span>
              &nbsp;&nbsp;&nbsp;
              <svg-icon name='time-outline' width='16' height='16'></svg-icon>
              <span title='视频发布时间'>{{item.createTime}}</span>
            </div>
          </div>
        </div>
      </router-link>
    </template>
  </div>
</template>

<script>
export default {
  name: 'RecommendVideo',
  data() {
    return {
      recommendItem:[
        {
          id:1,
          title:'【Go语言】golang云原生知识分享，从基础开始，到实战结束，云',
          imageSrc:'https://ts4.cn.mm.bing.net/th?id=ORMS.67df702ed0cf8a3827a25709a3afe037&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1&p=0',
          upper:'迪士尼',
          playNum:322,
          barrageNum:12903,
          createTime:'2023-4-19 23:35:30'
        },
        {
          id:2,
          title:'超人1',
          imageSrc:'https://ts4.cn.mm.bing.net/th?id=ORMS.67df702ed0cf8a3827a25709a3afe037&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1&p=0',
          upper:'迪士尼',
          playNum:322,
          barrageNum:12903,
          createTime:'2023-4-19 23:35:30'
        },
        {
          id:3,
          title:'超人1',
          imageSrc:'https://ts4.cn.mm.bing.net/th?id=ORMS.67df702ed0cf8a3827a25709a3afe037&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1&p=0',
          upper:'迪士尼',
          playNum:322,
          barrageNum:12903,
          createTime:'2023-4-19 23:35:30'
        },
        {
          id:1,
          title:'超人1',
          imageSrc:'https://ts4.cn.mm.bing.net/th?id=ORMS.67df702ed0cf8a3827a25709a3afe037&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1&p=0',
          upper:'迪士尼',
          playNum:322,
          barrageNum:12903,
          createTime:'2023-4-19 23:35:30'
        },
        {
          id:1,
          title:'超人1',
          imageSrc:'https://ts4.cn.mm.bing.net/th?id=ORMS.67df702ed0cf8a3827a25709a3afe037&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1&p=0',
          upper:'迪士尼',
          playNum:322,
          barrageNum:12903,
          createTime:'2023-4-19 23:35:30'
        },
        {
          id:1,
          title:'超人1',
          imageSrc:'https://ts4.cn.mm.bing.net/th?id=ORMS.67df702ed0cf8a3827a25709a3afe037&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1&p=0',
          upper:'迪士尼',
          playNum:322,
          barrageNum:12903,
          createTime:'2023-4-19 23:35:30'
        },
        {
          id:1,
          title:'超人1',
          imageSrc:'https://ts4.cn.mm.bing.net/th?id=ORMS.67df702ed0cf8a3827a25709a3afe037&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1&p=0',
          upper:'迪士尼',
          playNum:322,
          barrageNum:12903,
          createTime:'2023-4-19 23:35:30'
        },
        {
          id:1,
          title:'超人1',
          imageSrc:'https://ts4.cn.mm.bing.net/th?id=ORMS.67df702ed0cf8a3827a25709a3afe037&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1&p=0',
          upper:'迪士尼',
          playNum:322,
          barrageNum:12903,
          createTime:'2023-4-19 23:35:30'
        },
        {
          id:1,
          title:'超人1',
          imageSrc:'https://ts4.cn.mm.bing.net/th?id=ORMS.67df702ed0cf8a3827a25709a3afe037&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1&p=0',
          upper:'迪士尼',
          playNum:322,
          barrageNum:12903,
          createTime:'2023-4-19 23:35:30'
        },{
          id:1,
          title:'超人1',
          imageSrc:'https://ts4.cn.mm.bing.net/th?id=ORMS.67df702ed0cf8a3827a25709a3afe037&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1&p=0',
          upper:'迪士尼',
          playNum:322,
          barrageNum:12903,
          createTime:'2023-4-19 23:35:30'
        },
        {
          id:1,
          title:'超人1',
          imageSrc:'https://ts4.cn.mm.bing.net/th?id=ORMS.67df702ed0cf8a3827a25709a3afe037&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1&p=0',
          upper:'迪士尼',
          playNum:322,
          barrageNum:12903,
          createTime:'2023-4-19 23:35:30'
        },
        {
          id:1,
          title:'超人1',
          imageSrc:'https://ts4.cn.mm.bing.net/th?id=ORMS.67df702ed0cf8a3827a25709a3afe037&pid=Wdp&w=300&h=156&qlt=90&c=1&rs=1&dpr=1&p=0',
          upper:'迪士尼',
          playNum:322,
          barrageNum:12903,
          createTime:'2023-4-19 23:35:30'
        },

      ]
    }
  }
}
</script>

<style lang='scss' scoped>
.recommed-video-body {
  width: 100%;
  height: auto;
  margin-top: 20px;
  .video-item-list {
    width: 100%;
    height: 130px;
    display: flex;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    flex-direction: row;
    margin-top: 10px;
    .video-image {
      width: 40%;
      height: 100%;
      .el-image {
        margin-top: 8%;
      }
    }
    .item-info {
      width: 60%;
      height: 100%;
      .video-title {
        font-size: 16px;
        height: 30%;
        font-weight: 700;
        margin-top: 8%;
        overflow: hidden;
        white-space: normal;
        word-break: break-word;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        margin-left: 5px;
      }
      .video-title:hover {
        color: #4e81f6;
      }
      .video-author {
        height: 30%;
        margin-top: 8px;
        font-size: 12px;
        margin-left: 5px;
      }
      .video-item-info {
        height: 30%;
        font-size: 12px;
        margin-left: 5px;
      }
    }
  }
  .video-item-list:hover {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.5);
    .item-info{
      .video-title {
        color: #4e81f6;
      }
    }
  }

}
</style>
