<template>
  <!--  CONTENT WRAPPER START -->
  <section class="px-4 m-auto wrapper mt-5 pt-5 d-flex flex-column align-items-center">
        
    <h2 >Bus information</h2>
    <p>Search for exemple N11, 45 or 55. </p>

    <!-- FORM TO GET USER INPUT  -->
    <div class="mt-md-3 pt-4 d-flex flex-column flex-md-row justify-content-center align-content-center">
      <input
        type="text"
        name="busNumber"
        placeholder="Write busnumber"
        id="busNumber"
        class="input-box" v-on:keyup.enter="getbusinfo"
      />
      <button v-on:click="getbusinfo" class="btn btn-outline-secondary mt-3 mt-md-0 ms-md-3">Check bus</button>
    </div>


    <!--  OUTPUT FROM API   -->
    <div class="mt-4 mt-md-5 mb-5">
      <p v-for="post in thePosts" v-bind:key="post.id">
        <span v-for="status in post.lineStatuses">

          <!--  IF-CLAUSE - disrupted service -->
          <p class="new-post py-4 px-5 p-md-5 m-2" v-if="status.reason">
            <p class="text-center"><b>{{ post.name }}: {{ status.     statusSeverityDescription }}</b></p>
            <p>{{ status.reason }}</p>
            <br />
            <a
                href="https://tfl.gov.uk/bus/status/"
                class="btn btn-outline-primary w-100"
                >Read more on TfL's website</a
            >
          </p>

          <!--  ELSE-CLAUSE - good service  -->
          <p class="new-post px-5 py-3 m-2 text-center" v-else="status.reason">
            {{ post.name }}:
            {{ status.statusSeverityDescription }}
          </p>
        </span>
      </p>
    </div>

  </section>
  <!--  CONTENT WRAPPER END -->
</template>



<script>
export default {
  data() {
    return {
      thePosts: [],
    };
  },
  methods: {
    getbusinfo: function () {
      // Create a variable with the value from the user
      var busNumber = document.getElementById("busNumber").value;

      // Calling teh API with the correct busnumber
      fetch("https://api.tfl.gov.uk/Line/" + busNumber + "/Status/")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          this.thePosts = json;
        });
        
    },
  },
};
</script>

<style scoped>

/* TYPOGRAPHY */
h2 {
  color: #412f78;
  text-transform: uppercase;
  text-align: center;
  font-size: 2rem;
  letter-spacing: 2px;
  font-weight: 700;
}

/*  BUTTON RESTYLING  */
.btn-outline-primary{
    border-color: #f8f8ff;
    color: #f8f8ff;
    border-width: 3px; 
    letter-spacing: 1px;
    font-size: 1.2rem;
    margin-top: 30px;
    font-weight: 700;
}
.btn-outline-primary:hover{
    background-color: #f8f8ff;
    border-color: #f8f8ff;
    color: #412f78;
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
  font-weight: 700;
}


/*  BOX STYLING */
.new-post {
  background-color: #412f78;
  border-radius: 60px 60px 60px 60px;
  color: #f8f8ff;
  max-width: 500px;
  margin: 0 auto;
}
.input-box{
    border: none;
    border: 3px solid #412f78;
    border-radius: 0.375rem;
    padding: 8px;
}
.input-box:focus{
    outline: none;  
}

/* MEDIA QUERY */
@media screen and (min-width: 1000px) {

  .new-post {
    width: 500px;
  }
  h2 {
    font-size: 2.7rem;
  }
}
</style>
