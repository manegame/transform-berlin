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
    </ul>
    <no-ssr>
      <full-page  :options='options'>
        <section  class="section"
                  :id='page.id'
                  v-for='page in pages'
                  :key='page.id'>
          {{page.title.rendered}}
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
        sectionsColor : ['#ccc', '#fff'],
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
  components: { NoSSR },
  computed: {
    pages () { return this.$store.state.pages.pages },
    anchors () {
      return this.$store.state.pages.anchors
    }
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

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
