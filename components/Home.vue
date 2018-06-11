<template>
  <div class='page'>
    <video  class="page__singleVideo"
            :style='{ backgroundImage: single.acf.video.url }'
           data-autoplay muted loop>
      <source :src='single.acf.video.url'
              type='video/mp4'>
    </video>
    <div class='page__overlay'>
      <Transform  class='page__overlay__title'
                  :color='true'
                  :showOn='"#home"' />
      <TransformMenu :pages='$store.state.pages.pages' />
    </div>
    <Tease/>
  </div>
</template>

<script>
import Tease from '~/components/base/Tease'
import Transform from '~/components/base/Transform'
import TransformMenu from '~/components/TransformMenu'

export default {
  name: 'Home',
  components: {
    Tease,
    Transform,
    TransformMenu
  },
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
@import '~/assets/style/helpers/mixins.scss';
@import '~/assets/style/vendor/fullPageVideo.scss';

.page {
  position: relative;
  height: 100%;

  &__overlay {
    &__title {
      height: 45vh;
      text-align: center;

      @include no-select;
    }
  }
}
</style>