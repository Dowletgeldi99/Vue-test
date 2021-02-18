<template>
  <div class="main">
    <Home />
  </div>
  <div class="footer">
    <Footer />
  </div>
</template>

<script>
  import Home from './components/Home.vue';
  import Footer from './components/Footer.vue';

  export default {
    name: "App",
    components: {
      Footer,
      Home,
    },
  }
</script>