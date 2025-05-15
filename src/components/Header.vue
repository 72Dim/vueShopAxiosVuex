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
									{{ sitename }}
                     </router-link>
                  </h1>
               </header>
            </div>
				<div class="col-8 btn btn-default btn-lg current-route-path"
					style="display: inline-block; margin-top: 20px;">
					<strong>Current route path:</strong> {{ $route.fullPath }}
				</div>
            <div class="col wrap-btn-checkout">
               <div class="nav navbar-nav navbar-right for-btn-checkout">
                  <button type="button"
                     class="btn btn-default btn-lg"
                     v-on:click="showCheckout">
                     <span class="glyphicon glyphicon-shopping-cart">
								[{{ cartItemCount }}] Checkout
								<!-- [{{ ()=>{return cart.length || '';} }}] Checkout -->
								<!-- [{{ cart.length }}] Checkout -->
								<!-- [{{ cartCount }}] Checkout
								   <router-link to="/form" data-infa="работает">
								   <router-link :to="{ path: '/form' }" data-infa="работает">
                           <router-link :to="{ name: 'Form' }" data-infa="работает">
										[] Checkout</router-link>
                        -->
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
      props: ['cartItemCount'],  // or props: {},
      data() {
         return {
            sitename: "Petstore.", // continuation
         }
      },
      methods: {
         showCheckout() {
            /* console.log('I am showCheckout.');
               this.$router.push({path: '/form'});	// работает
            */
            this.$router.push({name: 'Form'});
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
</style>
