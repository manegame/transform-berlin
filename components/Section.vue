<template>
  <div  class='section'
        :class='{"fp-auto-height": single.id === 33}'>

    <Home   v-if='single.id === 16'
            :single='single'/>

    <Footer v-else-if='single.id === 33'
            :single='single'/>

    <Slide  v-else-if='single.acf.slides'
            v-for='slide in single.acf.slides'
            :slide='slide'
            :key='slide.id'/>

    <h1 v-else 
        v-html='single.title.rendered'/>
        
  </div>
</template>

<script>
import Home from '~/components/Home'
import Footer from '~/components/Footer'
import Slide from '~/components/Slide'
import { mapMutations, mapActions } from 'vuex'

export default {
  name: 'Section',
  components: {
    Home,
    Slide,
    Footer
  },
  props: {
    single: {
      type: [ Object ],
      required: true
    }
  }
}
</script>

<style lang='scss'>
@import '~/assets/style/variables.scss';
@import '~/assets/style/single.scss';

.section {
  background: transparent;
}
</style>