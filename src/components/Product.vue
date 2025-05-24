<template>
   <div class="page"><!-- <div class="form-order-product"> -->
      <my-header data-infa="работает"
         :cartItemCount="cartItemCount">
      </my-header>
      <div class="container text-center">
         <div class="row">
            <h2 class="h2red">I am Product Component.</h2>
            <h1>Product id: {{ $route.params.id }}</h1>
            <div class="row">
               <div class="col-md-5 col-md-offset-0">
                  <img :src="product.image" alt="animal">
               </div>
               <div class="col-md-6 col-md-jffset-0 description">
                  <h1 v-text="product.title"></h1>
                  <p v-html="product.description"></p>
                  <p v-bind:data-price="formattingLibrary.formatPrice(product.price)">
                     {{ formattingLibrary.formatPrice(product.price) }}
                  </p>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script type="module">
	import axios from 'axios';
import MyHeader from './Header.vue'; // работает

	export default {
		name: 'Product',
		components: {'my-header': MyHeader},
		props: ['cartItemCount'],
		data() {
			return {
				product: ''
			}
		},
      created: function () {
         console.log(this.$store.getters.products);
         this.product = this.$store.getters.products
            .filter(product => product.id == this.$route.params.id)[0];
            console.log(this.product);
         }
      }
</script>

<style lang="css" scoped>
	/* Атрибут "scoped" ограничивает область
		видимости CSS текущим компонентом
			Все стили файла app.css подкюченны
		глобально в файле /src/main.js.
	*/
	.h2red {
		color: red;
	}
</style>