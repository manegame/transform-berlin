import wordpress from '~/service/wp'

export const state = () => ({
  pages: []
})

export const actions = {
  async GET_PAGES ({ commit }) {
    const data = await wordpress.getPages()
    commit('SET_PAGES', data)
  }
}

export const mutations = {
  SET_PAGES (state, data) {
    state.pages = data
    state.anchors = data.map(page => {
      return page.slug
    })
  }
}