<!--	<script setup> - это синтаксический сахар,
	обрабатываемый на этапе компиляции, для использования
	Composition API внутри однофайловых компонентов (SFC).
	Это рекомендуемый синтаксис при использовании
	однофайловых компонентов и Composition API.
-->
<script type="module">
import { RouterLink, RouterView } from 'vue-router'

export default {
      name: 'App',
      props: ['cartItemCount'],
      components: { RouterLink, RouterView },
      data() {},
	}
</script>

<template>
   <main>
       <RouterView />
      <!-- or <router-view></router-view> -->
   </main>
 </template>

<style scoped>

</style>
