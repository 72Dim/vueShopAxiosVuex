import { createRouter, createWebHistory } from 'vue-router'

// import App from '/src/App.vue'            // работает
import Main from '../components/Main.vue' // работает
import Form from '../components/Form.vue' // работает
import MyHeader from '../components/Header.vue' // работает
import Product from '../components/Product.vue' //
import iTunesSearch from '../components/iTunes-search.vue'
import ResultSearch from '../components/Result-search.vue'

/* //* Смотрим, что возвращает import
   let url = import.meta.env.BASE_URL;
   console.log('import.meta.env.BASE_URL: '+url );
	// import.meta.env.BASE_URL: /
   console.log(import('/src/App.vue')); // работает
*/

// export const router = createRouter({
const router = createRouter({
   mode: 'history',
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {  path: '/',
         name: 'iMain',
         component: Main
      },
      {  path: '/form',
			name: 'Form',
         component: Form
      },
      {  path: '/header',
			name: 'Header',
         component: MyHeader
      },
      {
         path: '/product/:id', // product/1001
			name: 'Id',
         component: Product
      },
      {
         path: '/iTunes/search',   // domain/searchINiTunes
         name: 'iTunesSearch',
         component: iTunesSearch,
         children: [
            {
               path: 'results/:id', // domain/searchINiTunes/results/Taylor%20Swift
               name: 'Results',
               component: ResultSearch,
               props:true
            }
         ]
      }
   ]
})
export default router

/* //* import, export and export default
   Вы можете использовать import и export инструкции только внутри
   модулей, внутри обычных скриптов они работать не будут.
   <script type="module" src="main.js"></script>

   Именованная форма более применима для экспорта нескольких величин.
   Во время импорта, можно будет использовать одно и то же имя,
   чтобы обратиться к соответствующему экспортируемому значению.

   Касательно экспорта по умолчанию(default ), он может быть только
   один для каждого отдельного модуля(файла). Дефолтный экспорт может
   представлять собой функцию, класс, объект или что - то другое.
   Это значение следует рассматривать как "основное", так как его будет
   проще всего импортировать.

	<script setup> - это синтаксический сахар,
	обрабатываемый на этапе компиляции, для использования
	Composition API внутри однофайловых компонентов (SFC).
	Это рекомендуемый синтаксис при использовании
	однофайловых компонентов и Composition API.
*/