<template>
  <div id="app">
    <div id="nav">
      <router-link to="/test">Test</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
  name: 'App'
}
</script>


