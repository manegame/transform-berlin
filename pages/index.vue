<template>
  <div class='index'>
    <div class='index__background' />
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
    Section
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
      options: {
        anchors: this.$store.state.pages.anchors,
        slidesNavigation: true,
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

<style lang="scss" scoped>
.index {
  &__background {
    position: fixed;
    top: -25vmax;
    left: -25vmax;
    right: 0;
    z-index: -1;
    display: block;
    width: 150vmax;
    height: 150vmax;

    -webkit-filter: blur(2px);
    -moz-filter: blur(2px);
    -o-filter: blur(2px);
    -ms-filter: blur(2px);
    filter: blur(2px);

    &:before {
      content: "";
      display: block;
      opacity: 0.15;
      width: 50%;
      height: 50%;
      background-color: white;
      background-image: url('~/assets/style/icon/logo.png');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    }

    animation: rotation 120s linear infinite;
    -webkit-animation: rotation 120s linear infinite;
    -moz-animation: rotation 120s linear infinite;
  }

  @keyframes rotation {
    from { transform: rotate(0deg) }
    to { transform: rotate(360deg) }
  }

  @keyframes animatedBackground {
	  0% { background-position: -50% 0; }
	  50% { background-position: 150% 0; }
	  100% { background-position: 50% 0; }
  }
}
</style>

