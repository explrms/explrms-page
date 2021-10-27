<template>
  <div class="home">
    <p class="title">👋Hi, Im Daniil Savchenkov!</p>
    <p class="text">I am a 20-year-old student programmer from Russia.</p>
    <p class="text">Here are a few of my projects that may be about my activities.</p>
    <CProjects ref="CProjects"/>
  </div>
</template>

<script>

import CProjects from "../components/CProjects";
export default {
  name: 'Home',
  components: {
    CProjects
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@600&display=swap');
.home {
  padding-top: 1.5rem;
  padding-left: 20vw;
  padding-right: 20vw;
}
.title {
  font-family: 'Fira Sans', sans-serif;
  font-size: 3rem;
  text-align: left;
}
.text {
  font-family: "Fira Code Light", sans-serif;
  font-size: 1.3rem;
  text-align: left;
}

</style>
