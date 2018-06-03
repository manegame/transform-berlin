<template>
  <div>
    <no-ssr>
      <full-page>
        <section class="section">
          page1
        </section>
        <section class="section">
          page2
        </section>
      </full-page>
    </no-ssr>
  </div>
</template>

<script>
import Vue from 'vue'
import NoSSR from 'vue-no-ssr'
import fullpageMixin from 'vue-fullpage.js/dist/mixin.min'

if (process.browser) {
  window.$ = require('jquery')
  require('fullpage.js')
  const FullPage = require('vue-fullpage.js')
  Vue.component('full-page', FullPage.default)
}

export default {
  mixins: [fullpageMixin],
  components: { NoSSR }
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
