import { createApp } from "vue";
import router from "./router";
import { store } from "./store/store.js";

import App from "./App.vue";
import Main from './components/Main.vue'
import Header from './components/Header.vue'
import Form from './components/Form.vue'
import Product from './components/Product.vue'
import './assets/app.css'

/* console.log(router); для настройки
   console.log(router.getRoutes());
   console.log(store);
*/

const formattingLibrary = {   //  formattingLibrary.formatToUpperCase()
   formatPrice: function (price) {  // Возвращ. отформатир. цену, как $20.00
      if (!parseInt(price)) { return ";" }
      if (price > 99999) {
         var priceString = (price / 100).toFixed(2);
         var priceArray = priceString.split("").reverse();
         var index = 3;
         while (priceArray.length > index + 3) {
            priceArray.splice(index + 3, 0, "`");
            index += 4;
         }
         return "$" + priceArray.reverse().join("");
      } else {
         return "$" + (price / 100).toFixed(2);
      }
   },
   formatToUpperCase: function (params) { // Возвращ. отформатир. текст как ТЕКСТ
      return params.toUpperCase();
   }
};

const app = createApp({
   el: '#app',
   router: router,
   store,   // согласно стандарту ES-6 сокращённая форма записи
   template: '<App/>',  // or'<App></App>',
   components: {
      App,
      Main,
      Header,
      Form,
      Product
   }
});
// app.config.performance = true; // включает компиляцию и др.
/* Эта опция конфигурации учитывается только при использовании полной сборки
   app.config.compilerOptions.isCustomElement смотри vite.config.js
*/
app.config.globalProperties.formattingLibrary = formattingLibrary;
/* регистрация глобальных свойств, доступ к которым может быть
   получен для любого экземпляра компонента внутри приложения.
*/
/* console.log() - для настройки
   console.log(app.config);
   console.log(app.config.performance);
   console.log(app.config.globalProperties);
*/
app.use(router);
app.use(store);

app.mount('#app');

/* Сравнение синтаксисов Vue JS
	https://habr.com/ru/articles/690508/
   Публичное название проекта
   firebsae: project-881663215012
   Add Firebase to your web application
*/
