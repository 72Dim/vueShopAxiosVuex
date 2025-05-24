<template>
   <div class="page" style="margin: 0 0 10px 0;"><!-- <div class="page-show-product"> -->
      <!-- <my-header data-infa="работает" :cartItemCount="cartItemCount"> </my-header> -->
		<div class="container text-center">
         <div class="grey lighten-3 card-artist">
            <div class="container-fluid"
               style="min-height: 0;"
               grid-list-lg>
               <div class="row artist">
                  <div class="artist-description">
                     <div class="headline">
                        <h4>{{ title }}</h4>
                        <p>{{ artistName }}</p>
                     </div>
                  </div>
                  <div class="artist-photo">
                     <img :src="image" alt="">
                        <!-- height="100px"
                        contain> -->
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script type="module">
export default {
      props: ['title', 'image', 'artistName', 'url'],
   }
</script>

<style scoped>
   .card-artist {
      max-width: 500px;
      margin: auto;
   }
   .artist {
      background-color: gray;
      border: 15px solid lightgray;
      color: lightgray;
   }
   .artist-description {
      display: inline-block;
      vertical-align: middle;
   }
   .headline {

   }
   .artist-photo {
      display: inline-block;
      vertical-align: middle;
   }
</style>