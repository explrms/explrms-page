<template>
  <div class="header-gradient">
    <img class="header-logo" src="../assets/img/bolt_black_24dp.svg" alt="logo"><div class="header-text">EXPLRMS</div>
    <div class="nav-menu">
      <router-link class="router-link" to="/">
        <img class="router-link-img" src="../assets/img/home-icon.png" alt="home">
      </router-link>
      <router-link class="router-link" to="/about">
        <img class="router-link-img" style="padding-left: 1rem" src="../assets/img/info-icon.png" alt="about">
      </router-link>
    </div>
    <LocaleSwitcher/>
  </div>
</template>

<script>
import LocaleSwitcher from "@/components/LocaleSwitcher";
export default {
  name: "CHeader",
  components: {LocaleSwitcher}
}
</script>

<style scoped>
.header-gradient {
  display: flex;
  align-items: center;
  height: 10rem;
  background: rgb(0,172,255);
  background: linear-gradient(145deg, rgb(58, 60, 61) 0%, rgb(35, 34, 34) 100%);
  box-shadow: rgba(103, 119, 141, 0.68) 0 0 1rem 2px;
  border-radius: 0 0 20px 20px;
}
.header-text {
  padding-left: 9vw;
  font-family: 'Rubik Mono One', sans-serif;
  color: #ffd800;
  font-size: 3rem;
  margin-left: 2rem;
}
.header-logo {
  padding-left: 9vw;
  margin-left: 2rem;
  transform: scale(3);
}
.router-link-img {
  width: 3rem;
  fill: #ffd800;
}
.router-link {
  color: antiquewhite;
}
.nav-menu {
  padding-left: 5vw;
}
</style>