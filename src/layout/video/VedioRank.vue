<template>
  <div class="video-rank">
    <h2>视频榜单</h2>
    <table>
      <thead>
      <tr>
        <th>排名</th>
        <th>视频名称</th>
        <th>播放次数</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(video, index) in rankList" :key="video.id">
        <td>{{ index + 1 }}</td>
        <td>{{ video.title }}</td>
        <td>{{ video.playCount }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'VedioRank',
  data() {
    return {
      rankList: [
        {
          id: 1,
          title: '榜单视频1',
          playCount: 10000
        },
        {
          id: 2,
          title: '榜单视频2',
          playCount: 8000
        },
        // 添加更多榜单视频...
      ]
    }
  }
}
</script>

<style lang="scss">
$theme-color: #fff;
.video-rank {
  h2 {
    margin: 30px 0 20px 0;
    font-size: 20px;
    font-weight: bold;
    color: #333;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    text-align: center;

    th {
      padding: 10px;
      font-size: 16px;
      font-weight: bold;
      color: #333;
      background-color: #f0f0f0;
    }

    td {
      padding: 10px;
      font-size: 14px;
      color: #666;
      border: 1px solid #ccc;
    }
  }
}
</style>
