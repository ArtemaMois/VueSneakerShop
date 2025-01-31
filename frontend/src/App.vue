<template>
    <div>
        <div id="app">
          <my-navbar class="navbar"></my-navbar>
          <my-sidebar></my-sidebar>
          <div class="container">
          <router-view></router-view>
          </div>
        </div>
    </div>
</template>
<script>
import MyNavbar from '@/components/MyNavbar.vue';
import MySidebar from './components/MySidebar.vue';
export default {
  components: {
    MySidebar,
    MyNavbar
  }
}
</script>

<style>

* {
  padding: 0;
  margin: 0;
}
a{
  text-decoration: none;
  color: transparent
}
input, input:hover, input:focus, input:active {
  border: none;
  outline: none;
  all: unset;
}
.container{
  padding-inline: 60px;
}
button{
  border: none;
  color: transparent;
  background-color: transparent;
  padding: 0;
  margin: 0;
}

@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
</style>
