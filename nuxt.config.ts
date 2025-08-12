// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxtjs/partytown'
  ],

  partytown: {
    forward: ['dataLayer.push']
  },

  content: {
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: 'github-light',
        // Theme used if `html.dark`
        dark: 'github-dark',
        // Theme used if `html.sepia`
        sepia: 'monokai'
      }
    }
  },

  colorMode: {
    classSuffix: ''
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],

  css: ['~/assets/styles/tailwind.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-Hant-TW'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [{ rel: 'icon', type: 'image/png', href: '/devlogo.png' }],
      title: 'WOOWOOYONG - Dev',
      meta: [
        {
          name: 'description',
          content: '我的開發基地'
        },
        { property: 'og:title', content: 'WOOWOOYONG - Dev' },
        { property: 'og:url', content: 'https://woowooyong-dev.vercel.app/' },
        {
          property: 'og:image',
          content: '/devlogo.png'
        }
      ],
      script: [
        {
          type: 'text/partytown',
          src: `https://www.googletagmanager.com/gtag/js?id=${process.env.NUXT_PUBLIC_GATG_ID}`
        },
        {
          type: 'text/partytown',
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NUXT_PUBLIC_GATG_ID}');
          `
        }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  compatibilityDate: '2025-08-12'
})
