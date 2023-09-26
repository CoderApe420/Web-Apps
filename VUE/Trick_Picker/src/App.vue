<template>
  <img alt="Skate Logo" src="./assets/skate_logo.png" height="180">
  <TrickPicker msg="Welcome to Skateboard Trick Picker"/>
</template>

<script>
import TrickPicker from './components/Trick_Picker.vue'

export default {
  name: 'App',
  components: {
    TrickPicker
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
