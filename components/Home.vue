<template>
  <div class='page'>
    <video  class="page__singleVideo"
            :style='{ backgroundImage: single.acf.video.url }'
           data-autoplay muted loop>
      <source :src='single.acf.video.url'
              type='video/mp4'>
    </video>
    <div class='page__overlay'>
      <h1 class='page__overlay__title'><span class='red'>.Trans</span><span class='purple'>form</span></h1>
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
@import '~/assets/style/variables.scss';
@import '~/assets/style/vendor/fullPageVideo.scss';

.page {
  position: relative;
  height: 100%;

  &__overlay {
    &__title {
      font-size: $font-size-l;
      line-height: $line-height-l;
      text-align: center;
    }
  }
}

.red {
  color: $red;
}

.purple {
  color: $purple;
}
</style>