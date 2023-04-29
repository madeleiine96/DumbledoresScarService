<script>
// Import to use the router
import { RouterLink } from "vue-router";
</script>

<template>
  <!--  CONTENT WRAPPER START -->
  <section class="px-4 m-auto mt-4 pt-4 wrapper">
    <h2 class="text-center fs-1">Helping you home</h2>

    <p class="m-auto mt-4">
      Welcome to the app that is getting you home. Get quick information about
      the tube services in London. Prefer going by bus? Do not worry, as you can
      get information about all bus services as well. How are you getting home
      today?
    </p>

    <nav
      class="d-flex flex-column align-items-center flex-lg-row justify-content-around my-5"
    >
      <RouterLink
        class="btn btn-outline-secondary btn-lg mb-4 mb-lg-0"
        to="/tube"
        >Tube</RouterLink
      >
      <RouterLink class="btn btn-outline-secondary btn-lg" to="/bus"
        >Bus</RouterLink
      >
    </nav>
  </section>
  <!--  CONTENT WRAPPER END -->
</template>

<style scoped>
.wrapper {
  max-width: 700px;
}

.btn-outline-secondary {
  border-color: #412f78;
  color: #412f78;
  border-width: 3px;
  letter-spacing: 1px;
  font-size: 1.2rem;
  font-weight: 700;
  min-width: 250px;
}
.btn-outline-secondary:hover {
  background-color: #412f78;
  border-color: #412f78;
  color: #f8f8ff;
}
</style>
