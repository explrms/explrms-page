<template>
  <title>Галерея</title>
  <h1 class="page-title">{{$t('albums')}}</h1>
  <div class="d-flex flex-wrap gallery-albums">
    <router-link class="router-link" to="/photos/lake-baikal-aug-2022">
      <div class="album-pic mid lake-baikal-aug-2022">
        <h2 class="album-title">{{$t('Lake Baikal')}}</h2>
        <h6 class="album-description">{{$t('August')}}, 2022</h6>
      </div>
    </router-link>
    <router-link class="router-link" to="/photos/lake-baikal-aug-2021">
      <div class="album-pic mid lake-baikal-aug-2021">
        <h2 class="album-title">{{$t('Lake Baikal')}}</h2>
        <h6 class="album-description">{{$t('August')}}, 2021</h6>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Photos",
}
</script>

<i18n>
{
  "ru": {
    "albums": "АЛЬБОМЫ",
    "Lake Baikal": "Озеро Байкал",
    "August": "Август"
  },
  "en": {
    "albums": "ALBUMS",
    "Lake Baikal": "Lake Baikal",
    "August": "August"
  }
}
</i18n>

<style scoped>
.router-link {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.page-title {
  font-weight: 800;
  font-size: 3rem;
}

.album-pic {
  cursor: pointer;
  display: block;
  width: 30rem;
  max-width: 80vw;
  height: 15rem;
  margin: 10px 0 0 10px;
  position: relative;
  float: left;
  transition: 0.2s;
}
.lake-baikal-aug-2022 {
  background:
      linear-gradient(
          rgba(0, 0, 0, 0.35),
          rgba(0, 0, 0, 0.3)
      ),
      url('https://i.postimg.cc/mkS300z1/Tu-Bi-Ucj2rtw.jpg');
  background-size: cover;
}
.lake-baikal-aug-2021 {
  background:
      linear-gradient(
          rgba(0, 0, 0, 0.35),
          rgba(0, 0, 0, 0.3)
      ),
      url('https://sun9-73.userapi.com/impg/xjctrav4CY3KzdHz925QbEuuytgua12Vi6G_Pw/Z6T9ltT79Wg.jpg?size=2560x1440&quality=96&sign=0d066c81d09e43d9099fd31afa38218b&type=album');
  background-size: cover;
}
.mid h2 {
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  color: white;
  text-transform: uppercase;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 2rem;
  transform: translate(-50%, -50%);
  transition: 0.2s;
}

.mid h6 {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: rgba(255, 255, 255, 0);
  text-transform: uppercase;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 1rem;
  transform: translate(-50%, -50%);
  transition: 0.2s;
}

.mid:hover h2 {
  transform: translate(-50%, -70%);
  font-size: 3rem;
}

.mid:hover {
  transform: scale(105%);
}

.mid:hover h6 {
  color: #d7e1ec;
  transform: translate(-50%, 250%);
}

.gallery-albums {
  padding-top: 2rem;
  width: 86%;
  padding-left: 7%;
  padding-right: 7%;
}
</style>
