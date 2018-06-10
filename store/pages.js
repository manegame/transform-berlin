import wordpress from '~/service/wp'

export const state = () => ({
  pages: [],
  slides: []
})

export const actions = {
  async GET_PAGES ({ commit }) {
    commit('SET_PAGES', await wordpress.getPages())
  },
  async GET_SLIDE ({ commit }, id) {
    commit('SET_SLIDE', await wordpress.getSlide(id))
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
    console.log(data)
    state.slides.push(data)
  }
}