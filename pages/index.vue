<template>
  <div>
    <TransformMenu :pages='$store.state.pages.pages' />
    <no-ssr>
      <full-page  :options='options'>
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
import { mapActions, mapMutations, mapGetters } from 'vuex'

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
    let promises = []
    let vm = this
    console.log('this from fetch', this)
    await store.dispatch('pages/GET_PAGES')
      .then(() => {
        store.state.pages.pages.forEach(page => {
          if (page.acf.slides) {
            page.acf.slides.forEach(slide => {
              promises.push(
                store.dispatch('pages/GET_SLIDE', {
                  id: slide.ID,
                  parent_id: page.id
                })
              )
            })
          }
        })
        return Promise.all(promises)
      }).then(() => {
        store.dispatch('pages/SET_LOADED')
      })
  },
  data() {
    return {
      postsSet: false,
      options: {
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
    pages () { 
      if (this.$store.state.pages.loaded) return this.$store.state.pages.pages
    },
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

