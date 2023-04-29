<script>
// Import to use the router
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <!--  WRAPPER  -->
  <div class="pt-4 pb-2">
    <!--  START HEADER  -->
    <header
      class="d-flex flex-column flex-md-row align-items-center justify-content-between mx-5 mx-xl-5 px-xl-5"
    >
      <!--  Site identity, hidden -->
      <h1 class="d-none">Dumbledore's Scar Services</h1>

      <!--  LOGO, links to Home  -->
      <div class="img-container">
        <RouterLink to="/"
          ><img src="../src/assets/logo.png" alt="Logotype" class="w-100"
        /></RouterLink>
      </div>

      <!-- START NAV -->
      <nav
        class="d-flex flex-column align-items-center flex-md-row justify-content-around mt-5 mt-md-0"
      >
        <RouterLink
          class="btn btn-outline-secondary mb-4 mb-md-0 me-md-3 me-xl-5 w-100"
          to="/tube"
          >Tube</RouterLink
        >
        <RouterLink class="btn btn-outline-secondary w-100" to="/bus"
          >Bus</RouterLink
        >
      </nav>
      <!-- END NAV -->
    </header>
    <!--  END HEADER  -->

    <!--  START MAIN CONTENT  -->
    <main class="py-4">
      <RouterView />
    </main>
    <!--  END MAIN CONTENT  -->

    <!--    START FOOTER    -->
    <footer
      class="d-flex flex-column flex-sm-row justify-content-center align-items-center footer-top"
    >
      <RouterLink
        to="/about"
        class="text-muted text-decoration-none fs-6 mt-sm-3 order-sm-2 ps-sm-5 about-link"
        >About</RouterLink
      >
      <span class="text-muted mt-1 mt-sm-3 pe-sm-5 fs-6 order-sm-1"
        >&copy; 2023 Madeleine Gustavsson</span
      >
    </footer>
    <!--    END FOOTER    -->
  </div>
  <!--  END WRAPPER  -->
</template>

<style scoped>
/*  Restyle of buttons from BS  */
.btn-outline-secondary {
  border-color: #412f78;
  color: #412f78;
  border-width: 3px;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 1px;
  min-width: 200px;
}

.btn-outline-secondary:hover {
  background-color: #412f78;
  border-color: #412f78;
  color: #f8f8ff;
}

/*  FOOTER STYLING */
.footer-top {
  margin-top: 15vh;
}

.about-link:hover {
  text-decoration: underline !important;
}

/*  HEADER STYLING */
.img-container {
  max-width: 200px;
}

@media screen and (max-width: 767px) {
  header nav {
    width: 100%;
    width: 100%;
    max-width: 350px;
  }
}
</style>
