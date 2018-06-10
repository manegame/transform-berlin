<template>
  <div>
    <!-- <TransformMenu :pages='$store.state.pages.pages' /> -->
    <no-ssr>
      <full-page  :options='options'
                  @afterLoad='fullPageLoaded'>
        <!-- ALL SECTIONS -->
        <Section  v-for='page in pages'
                  :id='page.id'
                  :key='page.id'
                  :single='page' />
      </full-page>
    </no-ssr>
  </div>
</template>

<script>
import Vue from 'vue'
import Section from '~/components/Section'
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
    Section,
    // Gets loaded after??
    TransformMenu: () => import('~/components/TransformMenu.vue')
  },
  async fetch ({ store, params }) {
    await store.dispatch('pages/GET_PAGES')
  },
  data() {
    return {
      options: {
        afterLoad: this.fullPageLoaded,
        anchors: this.$store.state.pages.anchors,
        navigation: true,
		    controlArrows: true,
		    verticalCentered: true,
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
  methods: {
    fullPageLoaded() {
      console.log($.fn.fullpage.options)
    }
  },
  beforeDestroy() {
    // destroy the instance of fullpage
    $.fn.fullpage.destroy('all')
  }
}
</script>

