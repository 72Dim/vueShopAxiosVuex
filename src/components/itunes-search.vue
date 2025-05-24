<template>
   <div class="page"><!-- <div class="page-show-product"> -->
      <my-header data-infa="работает"></my-header>
		<div class="container text-center">
         <div class="col-md-12 verify">
            <!-- <h1>Search iTunes</h1> -->
            <h2>{{ componentForAction }}</h2>
            <!-- <br/> -->
            <div>
               <form data-infa="@submit.prevent='submit'"
                  data-action="URI-адрес программы обработчика на сервере"
                  data-method="GET | POST">
                  <!-- <pre>
                     Find an artist: {{ searchRequest.artist }}
                  </pre> -->
                  <input placeholder="Enter Artist Name"
                     v-model="searchRequest.artist" autofocus />
                  <button type="button"
                     class="btn btn-primary submit btn-search"
                     v-on:click="searchArtist(searchRequest.artist)">
                     <!--  data-type="submit|reset|button|menu"
                           autofocus="false"
                           data-disabled="false"
                           form=""
                           formaction=""
                           formenctype="application/x-www-form-urlencoded"
                           formmethod="get | post">
                     -->
                     Search Artist
                  </button>
                  <strong class="artist-check">
                     Artist: {{ searchRequest.artist }}
                  </strong>
               </form>
               <!-- <div class="col-md-12 verify"> -->
            </div>
               <!-- <pre>
                  Find an artist: {{ searchRequest.artist }}
               </pre> -->
            <!-- </div> -->
            <RouterView />
            <!-- or <router-view></router-view> -->
         </div>
      </div>
   </div>
</template>

<script type="module">
import axios from 'axios';
import MyHeader from './Header.vue';
import { store } from '@/store/store';
export default {
   name: 'iTunesSearch',
   components: { MyHeader },
   data() {
      return {
         componentForAction: 'Search in the iTunes by artist name',
         searchRequest: {
            artist: '',
         }
      }
   },
   methods: {
      showResult(name) {
         console.log(this.$store.getters.albums); // видит
         this.$router.push({name: 'Results', params: { id: name }});
      },
      searchArtist(name) {
         // console.log('Hellow from form ' + name);
         // console.log(encodeURI(name)); // console.log(encodeURIComponent(name));
         let urlName = encodeURI(name);
         let params = '/search?term='+urlName+'&entity=album';
         // console.log(params); // '/search?term=Taylor%20Swift&entity=album'
         let payload = 'https://itunes.apple.com' + params;
         this.showResult(urlName);
         this.$store.dispatch('addAlbums', payload);
      }
   }
}
</script>

<style style scoped>
   .btn-search {
      display: inline-block;
      padding: 2px 10px;
      margin: 4px 10px;
   }
   .artist-check {
      width: auto;
      height: 20px;
      border: 1px solid black;
      padding: 3px 10px;
   }

</style>
<!--
   data: {resultCount: 37, results: Array(37)}
   {
      amgArtistId: 816977
      artistId: 159260351
      artistName: "Taylor Swift"
      artistViewUrl: "https://music.apple.com/us/artist/taylor-swift/159260351?uo=4"
      artworkUrl60: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/32/b5/6b/32b56b49-0075-7128-e6ec-7c3c4c697242/00843930000821.rgb.jpg/60x60bb.jpg"
      artworkUrl100: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/32/b5/6b/32b56b49-0075-7128-e6ec-7c3c4c697242/00843930000821.rgb.jpg/100x100bb.jpg"
      collectionCensoredName: "Taylor Swift (Bonus Track Version)"
      collectionExplicitness: "notExplicit"
      collectionId: 1440913923
      collectionName: "Taylor Swift (Bonus Track Version)"
      collectionPrice: 9.99
      collectionType: "Album"
      collectionViewUrl: "https://music.apple.com/us/album/taylor-swift-bonus-track-version/1440913923?uo=4"
      copyright: "℗ 2008 Apollo A-1 LLC"
      country: "USA"
      currency: "USD"
      primaryGenreName: "Country"
      releaseDate: "2006-10-24T07:00:00Z"
      trackCount: 15
      wrapperType: "collection"
   }
-->