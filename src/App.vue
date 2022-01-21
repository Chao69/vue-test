<template>
  <div id="app">
    <Navbar />
    <router-link to="/test">Test</router-link>
    <main class="mt-5 bg-white">
      <router-view />
    </main>
  </div>
</template>
<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>


