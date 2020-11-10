<template>
  <div>
    <Navbar></Navbar>
    <main role="main" class="container">
      <router-view></router-view>
    </main>
  </div>
</template>

<style>

body{
  padding: 5rem;
}

.starter-template{
  padding: 3rem 1.5rem;
  text-align: center;
}

</style>

<script>

import Navbar from './components/navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>