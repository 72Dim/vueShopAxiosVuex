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
         ]
      },
      // albums: {
      albums: [
            {
               artistName: "Taylor Swift",
               artworkUrl60: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/32/b5/6b/32b56b49-0075-7128-e6ec-7c3c4c697242/00843930000821.rgb.jpg/60x60bb.jpg",
               artworkUrl100: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/32/b5/6b/32b56b49-0075-7128-e6ec-7c3c4c697242/00843930000821.rgb.jpg/100x100bb.jpg",
               collectionCensoredName: "Taylor Swift (Bonus Track Version)",
               collectionName: "Taylor Swift (Bonus Track Version)",
               country: "USA",
            },
            {
               artistName: "Maykl Jecson",
               collectionCensoredName: "Maykl Jecson (Bonus Track Version)",
               collectionName: "Taylor Swift (Bonus Track Version)",
               country: "USA",
            },
            {
               artistName: "Tayc Povaliy",
               collectionCensoredName: "Taylor Swift (Bonus Track Version)",
               collectionName: "Taylor Swift (Bonus Track Version)",
               country: "USA",
            },
      ]
      // },
	},
	mutations: {
		'SET_STORE' (state, products) {
         state.products = products;
      },
      'SET_ALBUMS' (state, albums) {   // payload - полезная нагрузка
         console.log(albums);
         state.albums = albums;
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
      },
      addAlbums: function ({ commit }, address) {
         console.log('I am addAlbums from Store');
         axios.get(address)
            .then((response) => {  // обработка успешного запроса
               // console.log(response); // console.log(response.data);
               // console.log(response.data.results);
               commit('SET_ALBUMS', response.data.results);
            })
            .catch(function (error) {
               if (error.response) {
                  /* Запрос был сделан, и сервер ответил
                     кодом состояния, который
                     выходит за пределы 2xx
                  */
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
               } else if (error.request) {
                  /* Запрос был сделан, но ответ не получен
                     `error.request`- это экземпляр XMLHttpRequest
                     в браузере и экземпляр
                     http.ClientRequest в node.js
                  */
                  console.log(error.request);
               } else {
                  /* Произошло что-то при настройке запроса,
                     вызвавшее ошибку
                  */
                  console.log('Error', error.message);
               }
               console.log(error.config);
            }
         );

         // commit('SET_ALBUMS', payload);
      }
	},
	getters: {
      products: state => state.products,
      albums: state => state.albums
	}
});