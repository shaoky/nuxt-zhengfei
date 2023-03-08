export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  head: {
    title: '广州正飞设计有限公司',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no' },
      { hid: 'keywords', name: 'keywords', content: '广州品牌全案策略,品牌设计定位,微型vi设计,企业品牌vi设计,商标设计logo设计,商标设计,微型vi,企业产品画册设计,高端创意品牌画册设计礼品包装设计,系列包装设计,高档包装设计,品牌策略定位,设计外包公司' },
      { hid: 'description', name: 'description', content: '广州正飞为企业解决品牌策略定位,品牌VI形象设计,品牌传播执行三大难题.包括微型vi设计,商标设计,logo设计,企业产品画册设计,高端创意品牌画册设计,品牌包装设计,系列包装设计,电商设计,展会设计等服务,从品牌全局策划,分阶段执行,投入少,性价比高。' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'animate.css/animate.min.css',
    'element-ui/lib/theme-chalk/index.css',
    'swiper/dist/css/swiper.css',
    {
      src: 'assets/less/common.less',
      lang: 'less'
    },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    {
      src: '~assets/js/baidu-map.js', ssr: false
    },
    {
      src: '@/plugins/vue-awesome-swiper', mode: 'client'
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  }
}
