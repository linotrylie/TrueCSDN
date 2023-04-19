<template>
  <div class='video-body'>
    <barrageVideoplayer
      :src="videoSrc"
      :biBarrageXml="barrageXml"
      width="100%"
      height="100%"
    ></barrageVideoplayer>
  </div>
</template>
<script>
import barrageVideoplayer from "./barrage-videoplayer.vue";
export default {
  name:'Video',
  props:['url','bXml'],
  components: {
    barrageVideoplayer
  },
  data() {
    return {
      videoSrc: "https://yleen.cc/files/videos/摇曳露营01.mp4",
      barrageXml:""
    };
  },
  created() {
    if(this.url !== undefined) {
      this.videoSrc =  this.url
    }
    if(this.bXml !== undefined) {
      this.barrageXml = this.bXml
    }
  }
}
</script>
<style lang='scss' scoped>
.video-body{
  width: 100%;
  .player-area {
    width: 50%;
    height: auto;
    margin: 0 auto;
  }
}

</style>
