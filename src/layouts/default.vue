<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>

import Header from './header'
import Footer from './footer'

import { mapActions } from "vuex";


export default {
  name: "index",
  components: {
    Header,
    Footer
  },

  methods: {
    ...mapActions({
      'useLocalStorage': 'user/useLocalStorage',
    })
  },
  mounted() {
    this.useLocalStorage();
  },

}


</script>
