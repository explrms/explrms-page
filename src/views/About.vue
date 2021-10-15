<template>
  <div class="about">
      <p class="title">👇There are some social and other links that can tell about me:</p>
    <div class="wrapper">
      <div class="icon facebook">
        <div class="tooltip">Facebook</div>
        <span><i class="fab fa-facebook-f"></i></span>
      </div>
      <div class="icon spotify" v-on:click="locationHref('https://open.spotify.com/user/mq2insxy4ozv8gaxmlfk7zeg0')">
        <div class="tooltip">Spotify</div>
        <span><i class="fab fa-spotify"></i></span>
      </div>
      <div class="icon instagram" v-on:click="locationHref('https://www.instagram.com/explrms/')">
        <div class="tooltip">Instagram</div>
        <span><i class="fab fa-instagram"></i></span>
      </div>
      <div class="icon github" v-on:click="locationHref('https://github.com/explrms')">
        <div class="tooltip">Github</div>
        <span><i class="fab fa-github"></i></span>
      </div>
      <div class="icon vk" v-on:click="locationHref('https://vk.com/explrms')">
        <div class="tooltip">VK</div>
        <span><i class="fab fa-vk"></i></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  mounted() {
    let fontAwesome = document.createElement('script');
    fontAwesome.setAttribute('src', 'https://kit.fontawesome.com/6caf03d455.js');
    fontAwesome.setAttribute('crossorigin', 'anonymous');
    document.head.appendChild(fontAwesome);
  },
  methods: {
    locationHref: link => {
      location.href=link
    }
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

.title {
  font-family: 'Fira Sans', sans-serif;
  font-size: 3rem;
  text-align: left;
}
.about {
  padding-top: 1.5rem;
  padding-left: 15vw;
  padding-right: 15vw;
}
/*
    Auther: Abdelrhman Said
*/

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:focus,
*:active {
  outline: none !important;
  -webkit-tap-highlight-color: transparent;
}

html,
body {
  display: grid;
  height: 100%;
  width: 100%;
  font-family: "Poppins", sans-serif;
  place-items: center;
  background: linear-gradient(315deg, #ffffff, #d7e1ec);
}

.wrapper {
  margin-top: 3rem;
  display: inline-flex;
}

.wrapper .icon {
  position: relative;
  background-color: #ffffff;
  border-radius: 50%;
  padding: 15px;
  margin: 10px;
  width: 75px;
  height: 75px;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .tooltip {
  position: absolute;
  top: 0;
  font-size: 14px;
  background-color: #ffffff;
  color: #ffffff;
  padding: 5px 8px;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .tooltip::before {
  position: absolute;
  content: "";
  height: 8px;
  width: 8px;
  background-color: #ffffff;
  bottom: -3px;
  left: 50%;
  transform: translate(-50%) rotate(45deg);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .icon:hover .tooltip {
  top: -45px;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.wrapper .icon:hover span,
.wrapper .icon:hover .tooltip {
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
}

.wrapper .facebook:hover,
.wrapper .facebook:hover .tooltip,
.wrapper .facebook:hover .tooltip::before {
  background-color: #3b5999;
  color: #ffffff;
}

.wrapper .spotify:hover,
.wrapper .spotify:hover .tooltip,
.wrapper .spotify:hover .tooltip::before {
  background-color: #1FD45E;
  color: #ffffff;
}

.wrapper .instagram:hover,
.wrapper .instagram:hover .tooltip,
.wrapper .instagram:hover .tooltip::before {
  background-color: #e1306c;
  color: #ffffff;
}

.wrapper .github:hover,
.wrapper .github:hover .tooltip,
.wrapper .github:hover .tooltip::before {
  background-color: #333333;
  color: #ffffff;
}

.wrapper .vk:hover,
.wrapper .vk:hover .tooltip,
.wrapper .vk:hover .tooltip::before {
  background-color: #0077FF;
  color: #ffffff;
}

</style>
