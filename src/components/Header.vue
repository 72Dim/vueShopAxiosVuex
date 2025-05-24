<template>
   <header>
      <!-- <div class="navbar navbar-default" style="background-color: brown;"> -->
      <div class="container text-center" style="background-color: brown;">
         <div class="row" style="margin: 0;">
            <div class="col wrap-for-header" style="float: left;">
               <header class="text-left header-properties">
                  <h1 class="btn btn-default btn-lg" style="margin: 0px;">
							<!-- <router-link to="/" data-infa="работает"
                        <router-link :to="{ name: 'iMain' }" data-infa="работает"
                     -->
                     <router-link :to="{ path: '/' }" tag="a"
                        data-infa="работает">
									{{ formattingLibrary.formatToUpperCase(sitename) }}
                     </router-link>
                  </h1>
               </header>
            </div>
				<div class="col-8 btn btn-default btn-lg current-route-path"
					style="display: inline-block; margin-top: 20px;">
					<strong>Current route path:</strong>
                  {{ formattingLibrary.truncateString(this.$route.fullPath, 46) }}
				</div>
            <div class="col wrap-btn-checkout">
               <div class="nav navbar-nav navbar-right wrap-checkout">
                  <button type="button"
                     class="btn btn-default btn-lg"
                     v-on:click="showCheckout">
                     <span class="glyphicon glyphicon-shopping-cart">
								[{{ cartItemCount }}] Checkout
								<!-- v-on:click="showCheckout">
								   <router-link to="/form" data-infa="работает">
								   <router-link :to="{ path: '/form' }" data-infa="работает">
                           <router-link :to="{ name: 'Form' }" data-infa="работает">
										[] Checkout</router-link>
                        -->
                     </span>
                  </button>
               </div>
               <div class="nav navbar-nav navbar-right wrap-itunes">
                  <button type="button"
                     class="btn btn-default btn-lg btn-itunes"
                     v-on:click="iTunes">
                     <span class="glyphicon ">
								<!-- {{  }} iTunes Search -->
								<!-- v-on:click="showCheckout">
								   <router-link to="/form" data-infa="работает">
								   <router-link :to="{ path: '/form' }" data-infa="работает">
                           <router-link :to="{ name: 'iTunesSearch' }"
                              data-infa="работает"></router-link>
                        -->
								iTunes
                     </span>
                  </button>
               </div>
            </div>
         </div>
      </div>
   </header>
</template>

<script type="module">
   export default {
      name: 'my-header',         // or name: 'Header',
      components: {},
      props: ['cartItemCount'],  // props: {}, \\ []
      data() {
         return {
            sitename: "Petstore.",
         }
      },
      methods: {
         showCheckout() {  // Показать оформление
            /* console.log('I am showCheckout from Header component.');
               this.$router.push({path: '/form'});	// работает
            */
            this.$router.push({name: 'Form'});
         },
         iTunes() {
            this.$router.push({name: 'iTunesSearch'});
         }
      },
   }
</script>

<style scoped>
	/* Атрибут "scoped" ограничивает область видимости CSS
      текущим компонентом.
         Все стили файла app.css подкюченны глобально
      в файле /src/main.js, через инструкцию import
      import './assets/app.css'.
   */
   .wrap-checkout {
      margin-left: 10px;
      margin-right: 0px;
   }
   .wrap-itunes {
      color: blueviolet;
   }
   .btn-itunes {
      color: inherit;
   }
</style>
