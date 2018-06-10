<template>
  <div class='slide'>
    <div class='slide__inner'>
      <h1 class='slide__inner__title'
          v-html='slide.title.rendered' />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slide',
  props: {
    slide: {
      type: Object,
      required: true
    }
  },
  watch: {
    slide: {
      handler(val) {
        console.log('slide changed', val)
      },
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
.slide {
  &__inner {
    &__title {
      text-align: center;
    }
  }
}
</style>


