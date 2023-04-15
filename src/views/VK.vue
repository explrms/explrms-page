<template>
  <p>{{ $t('youWillBeRedirectSoon') }}</p>
</template>

<script>
export default {
  name: "VK",
  mounted() {
    window.location.href = "https://vk.com/explrms"
  }
}
</script>

<style scoped>
p {
  font-size: 10rem;
}
</style>
