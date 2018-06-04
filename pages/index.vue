<template>
  <div>
    <ul id='menu'>
      <li v-for='page in $store.state.pages.pages' 
          :key='page.slug' 
          :data-menuanchor='page.slug' 
          class="active">
        <a  :href="'#' + page.slug "
            v-html='page.title.rendered' />
      </li>
      <li>
        <nuxt-link to="/posts">Blog</nuxt-link>
      </li>
    </ul>
    <no-ssr>
      <full-page  :options='options'>
        <section  class="section"
                  :id='page.id'
                  v-for='page in pages'
                  :key='page.id'>
          <Home v-if='page.title.rendered === "Home"' 
                :single='page' />
          <template v-else>
            	<div class="slide"> Slide 1 </div>
	            <div class="slide"> Slide 2 </div>
	            <div class="slide"> Slide 3 </div>
	            <div class="slide"> Slide 4 </div>
          </template>
        </section>
      </full-page>
    </no-ssr>
    <div class='footer'>
      footer
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Home from '~/components/Home'
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
    NoSSR,
    Home
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
        menu: '#menu',
        fixedElements: '#header, .footer',
        afterLoad() {
          // 
        },
        afterRender() {
          // 
        }
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

<style scoped lang='scss'>
#menu {
  width: 100vw;
  height: auto;
  text-align: center;
  list-style: none;
  position: fixed;
  z-index: 10;
}
</style>
