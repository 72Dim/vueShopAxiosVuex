import { createApp } from "vue";
import router from "./router";
import { store } from ".store/store.js";

import App from "./App.vue";
import Header from './components/Header.vue' //? работает
import Form from './components/Form.vue'
import Main from './components/Main.vue'
import './assets/app.css'

const app = createApp({
	el: '#app',
	router: router,
	store, // ES-6 сокращённая форма записи
	template: '<App/>',
	components: {
		App,
		Header,
      Form,
      Main
	}
})
/* Сравнение синтаксисов Vue JS
	https://habr.com/ru/articles/690508/
*/

/* Отображает страницу приветствия
	import './assets/main.css'

	import { createApp } from 'vue'
	import App from './App.vue'
	import router from './router'

	const app = createApp(App)

	app.use(router)

	app.mount('#app')
*/