<template>
  <div class="locales">
    <img class="locales_flag" v-for="locale in locales" :key="locale" v-bind:src="getPicUrl(locale)" @click="switchLocale(locale)"/>
  </div>
</template>

<script>
export default {
  name: 'LocaleSwitcher',
  computed: {
    storeLocale() {
      return this.$store.getters.getLocale;
    },
  },
  methods: {
    switchLocale(locale) {
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
        this.$store.commit("setLocale", locale);
      }
    },
    getPicUrl(locale) {
      return require(`../assets/img/${locale}_flag.png`) // the module request
    }
  },
  data() {
    return {
      locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(',')
    }
  }
}
</script>

<style scoped>
li {
  text-decoration: underline;
  color: #459CE7;
  cursor: pointer;
}
.locales {
  padding-left: 25vw;
  padding-right: 3vw;
}
.locales_flag {
  width:3.5rem;
  cursor: pointer;
}
@media screen and (max-width: 1000px) {
  .locales {
    padding-left: 5vw;
  }
  .locales_flag {
    width:2rem;
  }
}
</style>