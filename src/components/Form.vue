<!-- <template>
   <div class="page-show-product">
      <router-view data-infa="работает">
         <my-header :cartItemCount="cartItemCount"></my-header>
      </router-view>
      <!-- <my-header data-infa="работает" :cartItemCount="cartItemCount"></my-header> --

		<div class="container text-center">
			<!-- <div v-for="product in sortedProducts"> --
				<div v-for="product in products" class="row">
-->

<template>
   <div class="page"><!-- <div class="form-order-product"> -->
      <my-header data-infa="работает"
			:cartItemCount="cartItemCount">
		</my-header>
		<div class="container text-center">
			<div class="row">
				<div class="form-order-product">
					<div class="page-checkout">
						<!-- Start Checkout page -->
						<div class="col-md-6">
							<strong>First name:</strong>
							<input v-model.trim.lazy="order.firstName" class="form-control" />
						</div>
						<div class="col-md-6">
							<strong>Last name:</strong>
							<input v-model.trim="order.lastName" class="form-control" />
						</div>
						<div class="form-group">
							<div class="col-md-12">
								<strong>Adress:</strong>
								<div class="col-md-12">
										<input v-model="order.adress" class="form-control" />
								</div>
							</div>
						</div>
						<div class="form-group">
							<div class="col-md-12">
								<strong>City:</strong>
								<div class="col-md-12">
										<input v-model="order.city" class="form-control" />
								</div>
							</div>
						</div>
						<div class="form-group">
							<div class="col-md-2">
								<strong>State:</strong>
								<select v-model="order.state" class="form-control">
										<option disabled value="">State</option>
										<!-- <option v-bind:value="states.AL">AL</option> -->
										<option v-for="(state, key) in states" v-bind:value="state">
											{{key}}
										</option>
								</select>
							</div>
						</div>
						<div class="form-group">
							<div class="col-md-6">
								<strong>Zip / Postal Code:</strong>
								<input v-model.number="order.zip" class="form-control" type="number" />
							</div>
						</div>
						<div class="form-group">
							<div class="col-md-6 boxes">
								<input type="checkbox" id="gift" value="true" v-bind:true-value="order.sendGift"
										v-bind:false-value="order.dontSendGift" v-model="order.gift">
								<label for="gift">Ship As Gift?</label>
							</div>
						</div>
						<div class="form-group">
							<div class="col-md-6 boxes">
								<input type="radio" id="home" value="Home" v-model="order.method">
								<label for="home">
										Home
								</label>
								<input type="radio" id="business" value="Business" v-model="order.method">
								<label for="business">
										Business
								</label>
							</div>
						</div>
						<div class="form-group">
							<!-- <div class="col-md-6"> -->
							<div class="col-md-12">
								<div class="form-group-wrapper">
										<button type="submit" class="btn btn-primary submit"
											v-on:click="submitForm">
											Place order
										</button>
								</div>
							</div>
						</div>
						<div class="col-md-12 verify">
							<pre>
								First name: {{order.firstName}}
								Last name: {{order.lastName}}
								Adress: {{order.adress}}
								City: {{order.city}}
								Zip value: {{order.zip}}
								Zip type: {{typeof(order.zip)}}
								State: {{order.state}}
								Method: {{order.method}}
								Gift: {{order.gift}}
							</pre>
						</div>
					</div><!-- End Checkout page -->
				</div>
			</div>
		</div>
   </div>
</template>

<!-- <script setup> --><!-- <script type="importmap"> -->
<script type="module">
import MyHeader from './Header.vue'; // работает
// import MyHeader from '/src/components/Header.vue' //? работает

   export default {
      name: 'Form',
		components: { 'my-header': MyHeader },
      props: ['cartItemCount'],
      data() {
         return {
            order: {
               firstName: '',
               lastName: '',
               adress: '',
               city: '',
               zip: '',
               state: '',
               method: 'Home',
               Home: 'Home Address',
               Business: 'Business Address',
               // gift: true, // false
               gift: 'Send As A Gift',
               sendGift: 'Send As A Gift',
               dontSendGift: 'Do not send as a gift',
            },
            states: {
               AK: 'Alaska',
               AL: 'Alabama',
               AR: 'Arisona',
               CA: 'California',
               NV: 'Nevada'
            },
				computed: { // вычисляемые
					cartItemCount: function () {
						return cart.length || '';
					},
					// canAddToCart: function (product) {
					// 	// console.log('I am canAddToCart. cart.length: '+cart.length);
					// 	if ( 0 < cart.length ) {
					// 		return true;
					// 	}
					/*	console.dir(product);
						console.log(this.cartItemCount);
						console.log(this.product.availableInventory);
						return this.product.availableInventory > this.cartItemCount;
					*/
					// }
				},
         }
      },
      method: {
         SubmitForm() {
            alert('Submitted');
         }
      }
   }
   /* Ваш импортированный компонент не отображается в шаблоне. Вы можете:
      Используйте автоматически импортированный компонент как<SpecialHeader>
      Переименовать <script> в <script setup> (что автоматически
		открывает импорт в шаблон) добавить функцию настройки
		export default defineComponent({ setup() { return { Header } } }),
		чтобы выставлять его вручную
   */
</script>

   <!--  -->
   <style scoped>
      /* Атрибут "scoped" ограничивает область
         видимости CSS текущим компонентом
            Все стили файла app.css подкюченны
         глобально в файле /src/main.js.
      */
   </style>
