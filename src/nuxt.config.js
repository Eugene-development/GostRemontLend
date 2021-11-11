
export default {
  mode: 'universal',
  server: {
    port: 4180,
    host: '0.0.0.0'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: '"ГостРемонт" - услуги по ремонту квартир в Нижнем Новгороде, ремонт под ключ или частичный ремонт квартиры, расчет цены за метр',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Ремонт квартир с подарками и акциями!' }
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      { rel: 'icon', type: 'image/x-icon', href: 'https://static.tildacdn.com/tild3361-6433-4063-a334-376266633066/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'red' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-lodash',
    '~/plugins/axios'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',

    // ['@nuxtjs/google-analytics', {
    //   id: ''
    // }],
    // ['@nuxtjs/yandex-metrika', {
    //   id: '82186939',
    //   webvisor: true,
    //   clickmap:true,
    //   useCDN:false,
    //   trackLinks:true,
    //   accurateTrackBounce:true,
    // }],

  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
