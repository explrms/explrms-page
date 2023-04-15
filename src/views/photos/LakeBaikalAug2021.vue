<template>
  <title>Галерея</title>
  <h1 class="page-title">{{$t('Lake Baikal')}}, {{$t('Aug')}} 2021</h1>
  <vue-picture-swipe class="gallery-thumbnail" :items=items></vue-picture-swipe>
</template>

<script>
import VuePictureSwipe from 'vue3-picture-swipe';
export default {
  name: "LakeBaikalAug2021",
  components: { VuePictureSwipe },
  data() {
    return {
      items: [{
        src: 'https://i.postimg.cc/PxMcXV0Y/r-QMcj5z-N54o.jpg',
        thumbnail: 'https://i.postimg.cc/52q8RczB/r-QMcj5z-N54o.png',
        w: 2560,
        h: 1181,
      },
        {
        src: 'https://i.postimg.cc/4NRwdRzc/G-f-Pz92-HQQk.jpg',
        thumbnail: 'https://i.postimg.cc/qqyLL1dg/G-f-Pz92-HQQk.png',
        w: 2560,
        h: 1398,
      },
        {
          src: 'https://i.postimg.cc/xCkgk0xv/x2m-LRfn-Vkz-I.jpg',
          thumbnail: 'https://i.postimg.cc/8k6tNzrD/x2m-LRfn-Vkz-I.png',
          w: 2560,
          h: 1473,
        },
      ]};
  }
}
</script>

<i18n>
{
  "ru": {
    "Lake Baikal": "ОЗЕРО БАЙКАЛ",
    "Aug": "АВГ"
  },
  "en": {
    "Lake Baikal": "LAKE BAIKAL",
    "Aug": "AUG"
  }
}
</i18n>

<style scoped>
.gallery-thumbnail {
  padding-top: 2rem;
}
</style>
