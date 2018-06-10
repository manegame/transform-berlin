<template>
  <div class='section'>
    <Home v-if='single.id === 16'
          :single='single'/>
    <Slide  v-else 
            v-for='slide in single.acf.slides'
            :slide='slide'
            :key='slide.id'/>
  </div>
</template>

<script>
import Home from '~/components/Home'
import Slide from '~/components/Slide'
import { mapMutations, mapActions } from 'vuex'

export default {
  name: 'Section',
  components: {
    Home,
    Slide
  },
  props: {
    single: {
      type: [ Array, Object ],
      required: true
    }
  },
  computed: {
    // filledSingle() {
    //   return this.single.acf.slides
    // }
  },
  methods: {
    // ...mapActions({ getSlide: 'pages/GET_SLIDE' })
  },
  mounted() {
    // if (this.single.acf.slides) {
    //   this.single.acf.slides.forEach(slide => {
    //     this.getSlide({
    //       parent_id: this.single.id,
    //       id: slide.ID
    //     })
    //   })
    // }
  },
  watch: {
    // single: { 
    //   handler(val) {
    //     console.log('single changed', val)
    //   },
    //   deep: true
    // }
  }
}
</script>

<style lang='scss'>
@import '~/assets/style/variables.scss';
@import '~/assets/style/single.scss';
</style>