import { createStore } from 'vuex'
import axios from 'axios'

export const store = createStore({
	state: {
      products: {
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
	mutations: {
		'SET_STORE' (state, products) {
			state.products = products;
		}
	},
	actions: {
      initStore: ({ commit }) => {
         // console.log(store.getters.products);   // просматриваем store.state.products
			axios.get('/static/products.json')
			.then((response) => {
				// console.log(response.data.products);   // просматриваем Ответ на запрос
				commit('SET_STORE', response.data.products);
			});
		}
	},
	getters: {
		products: state => state.products
	}
});