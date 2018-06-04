<template>
  <div class='page'>
    <video  class="page__singleVideo"
            :style='{ backgroundImage: single.acf.video.url }'
           data-autoplay muted loop>
      <source :src='single.acf.video.url'
              type='video/mp4'>
    </video>
    <div class='page__overlay'>
      <h1>Transform</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    single: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang='scss'>
@import '~/assets/style/vendor/fullPageVideo.scss';

.page {
  position: relative;
  height: 100%;
}
</style>