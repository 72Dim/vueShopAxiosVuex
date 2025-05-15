<!--	<script setup> - это синтаксический сахар,
	обрабатываемый на этапе компиляции, для использования
	Composition API внутри однофайловых компонентов (SFC).
	Это рекомендуемый синтаксис при использовании
	однофайловых компонентов и Composition API.
-->
<!-- <script setup> -->

<script type="module">
import { RouterLink, RouterView } from 'vue-router'

export default {
      name: 'App',
      props: ['cartItemCount'],
      data() {},
	}
</script>

<template>
   <main>
      <router-view></router-view>
      <!-- I am is App.vue -->
   </main>
 </template>

<style scoped>

</style>
