<template>
  <div class='page'>
    <video  class="page__singleVideo"
            :style='{ backgroundImage: single.acf.video.url }'
           data-autoplay muted loop
           @playing='handlePlay($event)'>
      <source :src='single.acf.video.url'
              type='video/mp4'>
    </video>
    <div class='page__overlay'>
      <transition name='fade'>
        <Transform  v-if='reveal'
                    class='page__overlay__title'
                    :color='true'
                    :showOn='"#home"' />
      </transition>
      <transition name='fade'>
        <TransformMenu  v-if='reveal'
                        :pages='$store.state.pages.pages' />
      </transition>
    </div>
    <transition name='slide'>
      <Tease v-if='reveal'/>
    </transition>
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
  data() {
    return {
      reveal: false
    }
  },
  props: {
    single: {
      type: Object,
      required: true
    }
  },
  methods: {
    handlePlay(event) {
      window.setTimeout(() => {
        this.reveal = true
      }, 9000)
    }
  }
}
</script>

<style scoped lang='scss'>
@import '~/assets/style/transitions.css';
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