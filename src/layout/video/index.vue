<template>
  <barrageVideoplayer
    :src="videoSrc"
    width="100%"
    height="100%"
  ></barrageVideoplayer>
</template>
<script>
import barrageVideoplayer from "./barrage-videoplayer.vue";
export default {
  name:'Video',
  components: {
    barrageVideoplayer
  },
  data() {
    return {
      videoSrc: "这里是视频地址~",
    };
  },
}
</script>