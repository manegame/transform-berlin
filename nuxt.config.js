module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'transform-berlin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
 loading: { color: '#D9222A' },
 /*
 ** Loading bar indicator for --spa mode
 */
 loadingIndicator: {
    name: 'chasing-dots',
    color: '#D9222A',
    background: 'white'
  },
  /*
  ** Add global style file
  */
  css: [
    '~/assets/style/transitions.css',
    '~/assets/style/vendor/jquery.fullpage.min.css'
  ],
  /*
  ** Favicon
  */
 modules: [
  'nuxt-rfg-icon',
  '@nuxtjs/manifest',
  ['@nuxtjs/google-analytics']
 ],
 'google-analytics': {
    id: 'UA-69252921-5'
 },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
