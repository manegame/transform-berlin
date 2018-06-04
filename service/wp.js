import Vue from 'vue'
import VueResource from 'vue-resource'

const API_ROOT = 'https://transform.manusnijhoff.nl/wp-json/wp/v2/'

Vue.use(VueResource)

Vue.http.options.crossOrigin = true

export default {
  getPages() {
    return new Promise((resolve, reject) => {
      Vue.http.get(API_ROOT + 'transform_pages').then(
        response => {
          console.log(response.body)
          resolve(response.body)
        },
        response => {
          reject(response)
        }
      )
    })
  }
}
