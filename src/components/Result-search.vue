<template>
   <div class="page"><!-- <div class="page-show-product"> -->
      <my-header data-infa="работает"
			:cartItemCount="cartItemCount">
		</my-header>
		<div class="container text-center">
         <h3>
            Search result for the query {{ decodeURI($route.params.id) }}<br>
            consists of {{ albumData.length }} albums
         </h3>
         <div v-if="albumData">
            <div v-for="(album, index) in albumData">
               <Card
                  :title ="album.collectionCensoredName"
                  :image ="album.artworkUrl100"
                  :artistName ="album.artistName"
                  :url ="album.artistViewUrl" />
            </div>
         </div>
      </div>
   </div>
</template>

<script type="module">
   import MyHeader from './Header.vue';
   import Card from './Card.vue';
   export default {
      name: '',
      components: { Card },
      data() {
         return {
            // albums: [
            //    {
            //       artistName: "Taylor Swift",
            //       artworkUrl60: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/32/b5/6b/32b56b49-0075-7128-e6ec-7c3c4c697242/00843930000821.rgb.jpg/60x60bb.jpg",
            //       artworkUrl100: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/32/b5/6b/32b56b49-0075-7128-e6ec-7c3c4c697242/00843930000821.rgb.jpg/100x100bb.jpg",
            //       collectionCensoredName: "Taylor Swift (Bonus Track Version)",
            //       collectionName: "Taylor Swift (Bonus Track Version)",
            //       country: "USA",
            //    },
            //    {
            //       artistName: "Maykl Jecson",
            //       collectionCensoredName: "Maykl Jecson (Bonus Track Version)",
            //       collectionName: "Taylor Swift (Bonus Track Version)",
            //       country: "USA",
            //    },
            //    {
            //       artistName: "Tayc Povaliy",
            //       collectionCensoredName: "Taylor Swift (Bonus Track Version)",
            //       collectionName: "Taylor Swift (Bonus Track Version)",
            //       country: "USA",
            //    },
            // ]
            // albums: null
         }
      },
      methods: {},
      // created: function () {
      //    console.log(this.$store.getters.albums);  // видит
      //    this.albums = this.$store.getters.albums;
      //    console.log(this.albums);                 // видит
      // },
      computed: {
         albumData() {
            console.log('I am computed.albumData'); // это видит
            console.log(this.$store.getters.albums); // видит
            // this.albums = this.$store.getters.albums;
            // return this.albums; // отсюда работает
            return this.$store.getters.albums;
         }
      }
   }
</script>

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