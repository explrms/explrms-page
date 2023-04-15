<template>
<p>{{ $t('youWillBeRedirectSoon') }}</p>
</template>

<script>
export default {
  name: "Git",
  mounted() {
    window.location.href = "https://github.com/explrms"
  }
}
</script>

<style scoped>
p {
  font-size: 10rem;
}
</style>
