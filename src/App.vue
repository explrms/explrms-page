<template>
  <CHeader />
  <router-view/>
</template>


<script>
import CHeader from "./components/CHeader";
import '@/assets/css/_main.css';
export default {
  components: {CHeader}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap');
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  padding: 30px;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
}

.nav a.router-link-exact-active {
  color: #42b983;
}
</style>
