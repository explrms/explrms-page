<template>
  <p>{{ $t('youWillBeRedirectSoon') }}</p>
</template>

<script>
export default {
  name: "Telegram",
  mounted() {
    window.location.href = "https://exp1rms.t.me/"
  }
}
</script>

<style scoped>
p {
  font-size: 10rem;
}
</style>
