<template>
  <div>
    <TransformMenu :pages='$store.state.pages.pages' />
    <no-ssr>
      <full-page  :options='options'>
        <section  class="section"
                  :id='page.id'
                  v-for='(page, index) in pages'
                  :key='page.id'>
          <!-- HOME -->
          <Home v-if='index === 0'
                :single='page' />
          <!-- NEXT PAGES -->
          <Slide v-else 
                :single='page' />
        </section>
      </full-page>
    </no-ssr>
  </div>
</template>

<script>
import Vue from 'vue'
import Home from '~/components/Home'
import Slide from '~/components/Slide'
import NoSSR from 'vue-no-ssr'
import fullpageMixin from 'vue-fullpage.js/dist/mixin.min'
import { mapMutations, mapGetters } from 'vuex'

// add fullpage
if (process.browser) {
  window.$ = require('jquery')
  require('fullpage.js')
  const FullPage = require('vue-fullpage.js')
  Vue.component('full-page', FullPage.default)
}

export default {
  components: { 
    Home,
    NoSSR,
    Slide,
    TransformMenu: () => import('~/components/TransformMenu.vue')
  },
  async fetch ({ store, params }) {
    await store.dispatch('pages/GET_PAGES')
  },
  data() {
    // before page render! no access to component
    return {
      options: {
        anchors: this.$store.state.pages.anchors,
        navigation: true,
        menu: '#menu'
      }
    }
  },
  mixins: [fullpageMixin],
  computed: {
    pages () { return this.$store.state.pages.pages },
    anchors () {
      return this.$store.state.pages.anchors
    }
  },
  beforeDestroy() {
    // destroy the instance of fullpage
    $.fn.fullpage.destroy('all')
  }
}
</script>
