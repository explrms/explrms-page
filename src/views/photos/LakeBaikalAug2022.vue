<template>
  <title>Галерея</title>
  <h1 class="page-title">{{$t('Lake Baikal')}}, {{$t('Aug')}} 2022</h1>
  <vue-picture-swipe class="gallery-thumbnail" :items=items></vue-picture-swipe>
</template>

<script>
import VuePictureSwipe from 'vue3-picture-swipe';
export default {
  name: "LakeBaikalAug2022",
  components: { VuePictureSwipe },
  data() {
    return {
      items: [{
        src: 'https://i.postimg.cc/mkS300z1/Tu-Bi-Ucj2rtw.jpg',
        thumbnail: 'https://i.postimg.cc/q75pGR1z/Tu-Bi-Ucj2rtw.jpg',
        w: 2560,
        h: 1152,
      },
        {
        src: 'https://i.postimg.cc/W17GtRX9/6lk-Q8v-PH6-Fw.jpg',
        thumbnail: 'https://i.postimg.cc/zfjgDnD4/6lk-Q8v-PH6-Fw.jpg',
        w: 2560,
        h: 1152,
      },
        {
          src: 'https://i.postimg.cc/hGzt6Tz9/fv2-w0-FVwl-A.jpg',
          thumbnail: 'https://i.postimg.cc/9FgV2zj1/fv2-w0-FVwl-A.jpg',
          w: 2560,
          h: 1152,
        },
        {
          src: 'https://i.postimg.cc/mkcjFdtP/b9-Nk-I9d-W7-0.jpg',
          thumbnail: 'https://i.postimg.cc/ZRjYyc1z/rsz-1b9nki9dw7-0.png',
          w: 2560,
          h: 1700,
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
