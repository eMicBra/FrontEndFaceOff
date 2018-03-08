<!-- MyComponent.vue -->

<!-- template -->
<template>
  <div class="vueNav">

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand navTitle" href="#">Chuck Norris Vue(s)</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link to='/' class="nav-link">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{name: 'search' }" class="nav-link">Joke Search</router-link>
      </li>  
      <li class="nav-item">
        <router-link to='/History' class="nav-link">History</router-link>
      </li>
      <!-- <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li> -->
      <!-- <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li> -->
    </ul>
  </div>
</nav>

  </div>
</template>

<!-- js -->
<script>
export default {
  name: 'Nav',
  props: ['message'],
  created () {
    console.log('NavBar created!')
  }
}
</script>

<!-- css -->
<style>
.navTitle {
  font-size: x-large;
  }
.router-link-exact-active {
  color: #fff !important;
}
.mr-auto, .mx-auto {
    margin-right: inherit!important; 
}
</style>
