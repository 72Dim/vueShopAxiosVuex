<template>
   <div class="page"><!-- <div class="page-show-product"> -->
      <my-header data-infa="работает"></my-header>
		<div class="container text-center">
         <h1>Search iTunes</h1>
         <br/>
         <form @submit.prevent="submit">
            <input placeholder="Enter Artist Name"
               v-model="search" autofocus />
         </form>
      </div>
   </div>
</template>

<script type="module">
import MyHeader from './Header.vue';
export default {
   data() {
      return {
            componentForAction: 'Search Artist Name',
         }
      }
   }
</script>

<style scoped>

</style>