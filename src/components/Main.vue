<template>
   <div class="page"><!-- <div class="page-show-product"> -->
      <!-- <my-header data-infa="работает" :cartItemCount="cartItemCount"></my-header> -->
      <my-header data-infa="работает"
			:cartItemCount="cartItemCount">
		</my-header>
		<div class="container text-center">
			<!-- <div v-for="product in sortedProducts"> -->
				<div v-for="product in products" class="row">
					<div data-column="1" class="col products-for-animals"
						data-infa="<figure></figure><img v-bind:src='product.image' alt='Cat'">
						<img :src="product.image" alt="Animal">
					</div>
					<div data-column="2" class="col-8 text-center about-product">
						<h1 v-text="product.title"></h1>
						<p v-html="product.description"></p>
						<p v-text="product.price"></p>
						<button class="btn btn-primary btn-lg"
                     v-on:click="addToCart(product)"
                     v-if="canAddToCart">
                     Add to cart
                  </button>
                  <button v-else class="btn btn-primary btn-lg"
                     disabled="true">
							Add to cart
						</button>

						<!-- v-on:click="addToCart(product)"> -->
						<!-- <button class="btn btn-primary btn-lg"
							v-on:click="addToCart(product)"
							v-if="canAddToCart(product)">
								Add to cart
						</button> -->
						<!-- <span class="inventary-message"
							v-if="product.availableInventory - cartCount(product.id) === 0">
							All Out!
						</span>
						<span class="inventary-message"
							v-else-if="product.availableInventory - cartCount(product.id) < 5">
							Only {{product.availableInventory - cartCount(product.id)}} left!
						</span>
						<span class="inventary-message"
							v-else>
							Buy Now!
						</span> -->
						<div class="rating"
							data-infa="<span v-bind:class=`{'rating-active': checkRating(n)}`
									v-for=`n in 5`>☆</span> v-for=`n in 5`>
								v-bind:class=`{'rating-active': checkRating(n)}`">
							<span v-for="n in 5" class="rating-active">
								<svg v-if="checkRating(n, product)"
									class="bi bi-star-fill"
									xmlns="http://www.w3.org/2000/svg" width="16" height="16"
									fill="currentColor" viewBox="0 0 16 16">
									<path
										d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
								</svg>
								<svg v-else
									class="bi bi-star"
									xmlns="http://www.w3.org/2000/svg" width="16" height="16"
									fill="currentColor" viewBox="0 0 16 16">
									<path
										d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
								</svg>
							</span>
						</div>
					</div>
					<div dtat-column="3" class="col text-center test-computed-properties">
						<span data-infa="вычисляемые свойства">
							Test computed properties.
						</span>
						<p>Area is equal to: <b>{{ area }}</b></p>
						<button v-on:click="length += 1">Add length</button>
						<button v-on:click="width  += 1">Add width</button>
					</div>
					<hr />
				</div>
			<!-- </div> -->
		</div>
   </div><!-- End page showProduct -->
</template>

<script type="module">
   // import axios from 'axios';
   import MyHeader from './Header.vue';
	// import MyHeader from './components/Header.vue' //? работает

   var APP_LOG_LIFECYCLE_EVENTS = false; // or false webstore.order.method
	const cart = [1001, 1002, 1003];
   export default {
      name: 'iMain',
		components: { MyHeader },
      // props: {	cartItemCount: },
		props: [ 'width', 'length'],
      data() {
         return {
            width: 3,
            length:5,
            // cart: [1001, 1002, 1003],
            products: [
               {
                  id: 1001,
                  title: "Cat Food, 25lb bag",
                  description: "A 25 pound bag of <em>irresistible</em>,"
                     + "organic goodness for your dog.",
                  price: 2000,
                  image: "/static/images/Cat.png",
                  availableInventory: 10,
                  rating: 1
               },
               {
                  id: 1002,
                  title: "Strong dog",
                  description: "A 25 pound bag of <em>irresistible</em>,"
                     + "organic goodness for your dog.",
                  price: 2000,
                  image: "/static/images/Dog.png",
                  availableInventory: 7,
                  rating: 1
               },
               {
                  id: 1003,
                  title: "Yarn",
                  description: "A 25 pound bag of <em>irresistible</em>,"
                     + "organic goodness for your dog.",
                  price: 2000,
                  image: "/static/images/Cat_myau.png",
                  availableInventory: 99,
                  rating: 4
               },
               {
                  id: 1004,
                  // title: "Laser Pointer",
                  title: "Kitty Litter",
                  description: "A 25 pound bag of <em>irresistible</em>,"
                     + "organic goodness for your dog.",
                  price: 2000,
                  image: "/static/images/Smol_cat.png",
                  availableInventory: 11,
                  rating: 5
               },
               {
                  id: 1005,
                  title: "Kind",
                  description: "A 25 pound bag of <em>irresistible</em>,"
                     + "organic goodness for your dog.",
                  price: 2000,
                  image: "/static/images/Frands.png",
                  availableInventory: 25,
                  rating: 1
               }
            ],
         }
      },
      filters: {},
      methods: {
         addToCart: function (prod) { // Срабатывает по клику на кн. Add to cart
            // console.log(prod);
				this.cart.push(prod.id);
         },
         /* Сокращённый синтаксис объявления методов
            по ES6 or ES2015 без function ниже:
            Срабатывает после клика по кн. корзиы
            Тернальная операция переключает между true и false
         */
         showCheckout() {
            this.showProduct = this.showProduct ? false : true;
         },

         submitForm() { // Для теста кнопки
            alert('Submitted');
         },
         checkRating(n) {
            // return this.product.rating - n >= 0;
         }
      },
      computed: { // вычисляемые
         area: function () {
            return this.width * this.length;
         },
         cartItemCount: function () {
            // console.log('I am cartItemCount from Main.vue.');
            // return this.cart.length || '';
            return cart.length || '';
				
         },
         canAddToCart: function (product) {
            // console.log('I am canAddToCart. cart.length: '+this.cart.length);
            // if ( 0 < this.cart.length ) {
            //    return true;
            // }
            if ( 0 < cart.length ) {
               return true;
            }

            // console.dir(product);
            // console.log(this.cartItemCount);
            // console.log(this.product.availableInventory);
            // return this.product.availableInventory > this.cartItemCount;
         }
      },
      watch: { // смотреть, наблюдать
         length: function (newVal, oldVal) {
            console.log('The old value of length was: ' + oldVal
                  + '\nThe new value of length is: ' + newVal
            );
         },
         width: function (newVal, oldVal) {
            console.log('The old value of width was: ' + oldVal
                  + '\nThe new value of width is: ' + newVal
            );
         },
         area: function (newVal, oldVal) {
            console.log('The old value of area was: ' + oldVal
                  + '\nThe new value of area is: ' + newVal
            );
         }
      },
      filters: {},
      // created: function() {
      //    axios.get('/static/products.json')
      //       .then((response) => {
      //          this.products = response.data.products;
      //          console.log(this.products);
      //    });
      // },

      beforeUpdate: function () {
         console.log('All those data changes happend '
            + 'before the output gets updated.'
         );
      },
      // Test huki
      beforeCreate: function () {
         if (APP_LOG_LIFECYCLE_EVENTS) {
            console.log("beforeCreate");
         }
      },
      created: function () {
         if (APP_LOG_LIFECYCLE_EVENTS) {
            console.log("created");
         }
      },
      beforeMount: function () {
         if (APP_LOG_LIFECYCLE_EVENTS) {
            console.log("beforeMount");
         }
      },
      mounted: function () {
         if (APP_LOG_LIFECYCLE_EVENTS) {
            console.log("mounted");
         }
      },
      beforeUpdate: function () {
         if (APP_LOG_LIFECYCLE_EVENTS) {
            console.log("beforeUpdate");
         }
      },
      updated: function () {
         if (APP_LOG_LIFECYCLE_EVENTS) {
            console.log("updated:");
         }
      },
      beforeDestroy: function () {
         if (APP_LOG_LIFECYCLE_EVENTS) {
            console.log("beforeDestroy");
         }
      },
      destroyed: function () {
         if (APP_LOG_LIFECYCLE_EVENTS) {
            console.log("destroyed");
         }
      },
   }
</script>

<style scoped>
	/* Все стили файла app.css подкюченны глобально в файле /src/main.js, */
</style>