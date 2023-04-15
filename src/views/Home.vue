<template>
    <div className="home">
        <p className="title">{{ $t('hiim') }}</p>
        <p className="text">{{ $t('im') }} {{ age }} {{ $t('yearsold') }}</p>
        <p className="text">{{ $t('myprojects') }}</p>
        <CProjects ref="CProjects"/>
    </div>
</template>

<script>
import CProjects from "../components/CProjects";

export default {
    name: 'Home',
    components: {
        CProjects
    },
    computed: {
        age() {
            const birthdate = new Date('2001-05-26');
            const now = new Date();
            const diff = now - birthdate;
            const ageDate = new Date(diff);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        }
    }
}
</script>

<i18n>
{
  "ru": {
    "hiim": "👋Привет, я Даниил Савченков.",
    "im": "Мне",
    "yearsold": ".",
    "myprojects": "Это некоторые из моих проектов, которые расскажут о моей деятельности."
  },
  "en": {
    "hiim": "👋Hi, Im Daniil Savchenkov!",
    "im": "I am",
    "yearsold": "years old.",
    "myprojects": "Here are a few of my projects that may be about my activities."
  }
}
</i18n>

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

@media screen and (max-width: 1000px) {
    .title {
        font-size: 2rem;
        text-align: left;
    }

    .home {
        padding-left: 7vw;
        padding-right: 7vw;
    }

    .text {
        font-size: 1rem;
    }
}
</style>
