import Vue from 'vue'
import wordpress from '~/service/wp'

export const state = () => ({
  pages: [],
  loaded: false
})

export const actions = {
  async GET_PAGES ({ commit }) {
    commit('SET_PAGES', await wordpress.getPages())
  },
  async GET_SLIDE ({ commit }, obj) {
    commit('SET_SLIDE', await wordpress.getSlide(obj))
  },
  SET_LOADED ({ commit }) {
    commit('SET_LOADED')
  }
}

export const mutations = {
  SET_PAGES (state, data) {
    state.pages = data
    state.anchors = data.map(page => {
      return page.slug
    })
  },
  SET_SLIDE (state, data) {
    state.pages.forEach(page => {
      if (page.acf.slides) {
        page.acf.slides.forEach((slide, index) => {
          if (slide.ID === data.response.id) {
            // this.$store.state.categories[category.id] = category;
            // Vue.set(this.$store.state.categories, category.id, category);
            // page.acf.slides[index] = data.response
            Vue.set(page.acf.slides, index, data.response)
          }
        })
      }
    })
  },
  SET_LOADED (state) {
    state.loaded = true
  }
}