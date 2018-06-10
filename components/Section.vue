<template>
  <div class='section'>
    <Home v-if='single.id === 16'
          :single='single'/>
    <Slide  v-else 
            v-for='slide in single.acf.slides'
            :single='slide'
            :key='slide.id'/>
  </div>
</template>

<script>
import Home from '~/components/Home'
import Slide from '~/components/Slide'
import { mapMutations } from 'vuex'

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
  mounted() {
    console.log('mounted', this.$store.state.pages)
  }
}
</script>

<style lang='scss'>
@import '~/assets/style/variables.scss';
@import '~/assets/style/single.scss';
</style>