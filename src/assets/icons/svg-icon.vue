<template>
  <svg class="svg-icon" :width="width" :height="height" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: "svg-icon",
  props: {
    name: {
      type: String,
      required: true
    },
    width: {
      type: [String, Number],
      default: 24
    },
    height: {
      type: [String, Number],
      default: 24
    }
  },
  computed: {
    iconName() {
      // return `#icon-${this.name}`;
      return `#${this.name}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.svg-icon {
  overflow: hidden;
  fill: currentColor;
}
</style>
