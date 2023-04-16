<template>
  <div class='latest-news-content'>
    <div class='latest-news-content-title'>最热文章</div>
    <br />
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
        <a class='link-dark' href='#' title='Royal TSX 1.4.6 好用的多终端工具'>Royal TSX 1.4.6 好用的多终端工具23412412341234123412341234341234</a>
      </li>
      <li>
        <span>[<a href='#'>网络工具</a>]</span>
        <a class='link-dark' href='#' title='vSSH 1.11.1 强大的多标签ssh工具'>vSSH 1.11.1 强大的多标签ssh工具</a>
      </li>
      <li>
        <span>[<a href='#'>移动设备</a>]</span>
        <a class='link-dark' href='#' title='高保真无绳WIFI耳机'>高保真无绳WIFI耳机</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LatestNews',
}
</script>

<style lang='scss' scoped>
.latest-news-content {
  margin-right: 0;
  max-width: 38%;
  background: #fff;
  text-indent: 1em;
.latest-news-content-title {
  height: 30px;
  font-size: 18px;
  margin-top: 5px;
  box-shadow: 1px 1px 1px #efeaea;
}

.list-unstyled {
li {
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