<template>
  <div>
    <div class='recommend'>
      <div class='title'>
        <p>{{ title }}</p>
        <a class='more' href='#'>查看更多</a>
      </div>
      <ul class='list-unstyled'>
        <li>
          <span>[<a href='#'>智能设备</a>]</span>
          <a class='link-dark' href='#' title='米家互联网洗烘一体机'>米家互联网洗烘一体机</a>
        </li>
        <li>
          <span>[<a href='#'>智能设备</a>]</span>
          <a class='link-dark' href='#' title='米家无线投影仪青春版'>米家无线投影仪青春版</a>
        </li>
        <li>
          <span>[<a href='#'>智能设备</a>]</span>
          <a class='link-dark' href='#' title='米家九号平衡车Plus'>米家九号平衡车Plus</a>
        </li>
        <li>
          <span>[<a href='#'>智能设备</a>]</span>
          <a class='link-dark' href='#' title='智能WIFI无人机'>智能WIFI无人机</a>
        </li>
        <li>
          <span>[<a href='#'>智能家居</a>]</span>
          <a class='link-dark' href='#' title='智能游戏WIFI无线手柄'>智能游戏WIFI无线手柄</a>
        </li>
        <li>
          <span>[<a href='#'>移动设备</a>]</span>
          <a class='link-dark' href='#' title='高保真无绳WIFI耳机'>高保真无绳WIFI耳机</a>
        </li>
        <li>
          <span>[<a href='#'>网络工具</a>]</span>
          <a class='link-dark' href='#' title='Royal TSX 1.4.6 好用的多终端工具'>Royal TSX 1.4.6 好用的多终端工具</a>
        </li>
        <li>
          <span>[<a href='#'>网络工具</a>]</span>
          <a class='link-dark' href='#' title='vSSH 1.11.1 强大的多标签ssh工具'>vSSH 1.11.1 强大的多标签ssh工具</a>
        </li>
        <li>
          <span>[<a href='#'>网络工具</a>]</span>
          <a class='link-dark' href='#' title='vSSH 1.11.1 强大的多标签ssh工具'>vSSH 1.11.1 强大的多标签ssh工具</a>
        </li>
        <li>
          <span>[<a href='#'>网络工具</a>]</span>
          <a class='link-dark' href='#' title='vSSH 1.11.1 强大的多标签ssh工具'>vSSH 1.11.1 强大的多标签ssh工具</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['type'],
  name: 'Recommend',
  data() {
    return {
      title: '',
    }
  },
  mounted() {

  },
  methods: {
    loadRecommand() {
      if (this.type === 'news') {
        this.title = '最新推荐'
      } else if (this.type === 'download') {
        this.title = '下载榜单'
      }
    },
  },
  created() {
    this.loadRecommand()
  },
}
</script>

<style lang='scss' scoped>
.recommend {
  width: 100%;
  height: 310px;
  background: #fff;
  margin-top: 15px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

  .title {
    font-size: 18px;
    height: 35px;
    line-height: 35px;
    box-shadow: 1px 1px 1px #efeaea;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-around;

    p {
      width: 50%;
    }

    .more {
      font-size: 10px;
      display: inline-block;
    }

    .more:hover {
      color: #4e81f6;
    }
  }

  .list-unstyled {
    li {
      text-indent: .5em;
      overflow: hidden;
      white-space: normal;
      word-break: break-word;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      margin-bottom: 6px;
    }

    li:last-child {
      margin-bottom: 0;
    }

    li a:hover {
      color: #4e81f6;
    }
  }
}
</style>
