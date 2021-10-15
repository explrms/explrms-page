<template>
  <form class="align-left searchForm">
    <input class="queryInput" v-model="query" placeholder="🔍Search. . .">
  </form>
  <div class="projectList"></div>
  <div :style="project.style" class="projectItem align-left" v-for="project in filterByQuery" :key="project.name">
      <p class="projectName">{{project.name}}</p>
      <p class="projectDescription">{{project.description}}</p>
    <button v-on:click="locationReplace(project.linkTo.url)">{{project.linkTo.name}}</button>
  </div>
</template>

<script>
export default {
  name: "CProjects",
  data () {
    return {
      query: ''
    }
  },
  computed: {
    filterByQuery () {
      const list = this.$store.getters.allProjects;
      return list.filter(item => {
        return item.name.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
      })
    }
  },
  methods: {
    locationReplace: (link) => {
      location.href = link
    }
  },
}
</script>

<style scoped>
.projectList {
}
.projectItem {
  border-radius: 10px;
  box-shadow: rgba(103, 119, 141, 0.68) 0 0 1rem 2px;
  margin-top: 2rem;
  width: 60vw;
  transition: 1s;
}
.projectItem button {
  width: 20%;
  margin-left: 1rem;
  margin-bottom: 1rem;
  background-color: transparent; /* Green */
  border-radius: 10px;
  color: aliceblue;
  padding: 14px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition-duration: 0.4s;
  cursor: pointer;
  border: 2px solid aliceblue;
}
.projectItem button:hover {
  background-color: rgba(240, 248, 255, 0.17);
}
.projectItem:hover {
  transform: scale(1.05);
  transition: 0.5s;
  cursor: pointer;
}
.projectName {
  padding-top: 1rem;
  padding-left: 1rem;
  color: aliceblue;
  font-family: "Fira Sans", sans-serif;
  font-size: 3rem;
}
.projectDescription {
  font-family: "Fira Code Light", sans-serif;
  padding-top: 1.7rem;
  padding-left: 1rem;
  color: aliceblue;
  padding-bottom: 1.7rem;
}
.queryInput {
  border:2px solid #aaa;
  border-radius:4px;
  margin:8px 0;
  outline:none;
  padding:8px;
  box-sizing:border-box;
  transition:.3s;
  width: 25%;
}
.searchForm {
  padding-top: 1rem;
}
.align-left {
  text-align: left;
}
</style>