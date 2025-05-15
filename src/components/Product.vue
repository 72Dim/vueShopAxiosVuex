<template>
	   <div class="page"><!-- <div class="form-order-product"> -->
			<my-header data-infa="работает"
				:cartItemCount="cartItemCount">
			</my-header>
			<div class="container text-center">
				<div class="row">
					<h2 class="h2red">I am Product Component.</h2>
				</div>
			</div>
		</div>

</template>

<script type="module">
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
			this.product =  {
				id: 1001,
				title: "Cat Food, 25lb bag",
				description: "A 25 pound bag of <em>irresistible</em>,"
					+ "organic goodness for your dog.",
				price: 2000,
				image: "/static/images/Cat.png",
				availableInventory: 10,
				rating: 1
			};
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