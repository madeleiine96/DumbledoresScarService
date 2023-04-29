<template>
  <!--  CONTENT WRAPPER START -->
  <section class="wrapper px-4 m-auto mt-4 pt-4">
    <h2 class="text-center fs-1 mb-5 pb-3">About Dumbledore's Scar Services</h2>

    <div
      class="d-flex flex-column flex-md-row justify-content-between align-items-center mx-2 mx-sm-5"
    >
      <div class="Profileimg-container me-md-5">
        <img src="../assets/profile.jpg" alt="" class="w-100 h-100" />
      </div>

      <p class="mt-4 text-about">
        Welcome to this app. My name is Madeleine Gustavsson, and I am studying
        to become a web developer. This app is created with Vue and gets
        information from Transport for London via an API.
        <br />
        Hope you enjoy the app, and thank you for visiting.
      </p>
    </div>
  </section>
  <!--  CONTENT WRAPPER END -->
</template>

<style scoped>
.wrapper {
  max-width: 1000px;
}

.Profileimg-container {
  max-width: 340px;
  min-width: 200px;
}
.Profileimg-container img {
  border-radius: 50%;
}
.text-about {
  max-width: 50ch;
  margin: 0 auto;
}

@media screen and (min-width: 767px) {
  .img-container {
    min-width: 300px;
  }
}
</style>
