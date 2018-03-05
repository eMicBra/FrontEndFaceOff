<template>
  <div id="app">
    <app-navigation></app-navigation>
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/Navbar'

export default {
  name: 'App',
  components: {
    appNavigation: NavBar
  }
}
</script>

<style>
  #app {
    margin: 0;
    padding: 10px;
    height: 100%;
    background-color: #000;
    color: #fff;
    text-align: center;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
