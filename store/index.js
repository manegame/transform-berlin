import wordpress from '~/service/wp.js'

export const state = () => ({
  counter: 0,
  pages: []
})

export const mutations = {
  increment (state) {
    state.counter++
  }
}