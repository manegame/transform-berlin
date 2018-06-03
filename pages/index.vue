<template>
  <div>
    <ul id='menu'>
      <li v-for='anchor in pageAnchors' :key='anchor' :data-menuanchor='anchor' class="active"><a :href="'#' + anchor ">{{anchor}}</a></li>
    </ul>
    <no-ssr>
      <full-page :options='options'>
        <section  class="section"
                  :id='page.slug'
                  v-for='page in pages'
                  :key='page.id'>
          {{page.title.rendered}}
        </section>
      </full-page>
    </no-ssr>
  </div>
</template>

<script>
import Vue from 'vue'
import NoSSR from 'vue-no-ssr'
import fullpageMixin from 'vue-fullpage.js/dist/mixin.min'
import { mapMutations, mapGetters } from 'vuex'

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
  asyncData(context) {
    return {
      options: {
        anchors: context.store.pageAnchors,
        navigation: true,
        menu: '#menu'
      }
    }
  },
  mixins: [fullpageMixin],
  components: { NoSSR },
  computed: {
    pages () { return this.$store.state.pages.pages },
    ...mapGetters({ pageAnchors: 'pages/pageAnchors' })
  }
}
</script>

<style>
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
