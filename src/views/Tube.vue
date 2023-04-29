<template>
  <!--  CONTENT WRAPPER START -->
  <section class="px-4 m-auto mt-5 pt-5">

    <!--  CONTENT FROM API - DISRUPTED-->  
    <h2>Services with <span class="text-decoration-underline">Disruption</span></h2>
    <div class="mt-4 mb-5 d-flex flex-wrap justify-content-center ">
        <p v-for="post in thePosts" v-bind:key="post.id" class="d-flex flex-column flex-md-row flex-md-wrap justify-content-center" >
          <span v-for="status in post.lineStatuses">
            <p class="new-post py-4 px-5 p-md-5 m-2 min-height-post d-flex flex-column justify-content-between" v-if="status.reason">
              {{ status.reason }}
              <br />
              <a href="https://tfl.gov.uk/tube-dlr-overground/status/"
                      class="btn btn-outline-primary w-100 margin-button">Read more on TfL's website</a
              >
            </p>
          </span>
        </p>
    </div>
    
    <!--  CONTENT FROM API - GOOD SERVICE-->
    <h2 class="mt-5 pt-5">Services with <span class="text-decoration-underline">Good Service</span></h2>
    <div class="new-post p-4 mb-5 mt-4">
      <div v-for="post in thePosts" v-bind:key="post.id">
        <p v-for="status in post.lineStatuses">
            <p v-if="!status.reason" class="border-bottom pb-2 ">
              {{ post.name }}:
              {{ status.statusSeverityDescription }}
            </p>
        </p>
      </div>
    </div>

  </section>
  <!--  CONTENT WRAPPER END -->
</template>
      

<script>
  export default {
    created() {
      // Calling teh API for statuses
      fetch(
            "https://api.tfl.gov.uk/Line/victoria,circle,district,metropolitan,dlr,central,hammersmith-city,jubilee,northern,piccadilly,waterloo-city,tram,bakerloo/Status/"
      )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.thePosts = json;
      });
    },
    data() {
      return {
        thePosts: [],
      };
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

/*  BOX STYLING */
.new-post {
  background-color: #412f78;
  border-radius: 60px 60px 60px 60px;
  color: #f8f8ff;
  max-width: 500px;
  margin: 0 auto;
}

/*  BUTTON RESTYLING  */
.btn-outline-primary{
  border-color: #f8f8ff ;
  color: #f8f8ff  ;
  border-width: 3px; 
  letter-spacing: 1px ;
  font-size: 1.2rem;
  margin-top: 30px;
  font-weight: 700 ;
}
.btn-outline-primary:hover{
  background-color: #f8f8ff ;
  border-color: #f8f8ff;
  color: #412f78;
}
      
/*  MEDIA QUERY  */
@media screen and (min-width: 1000px) {
  .min-height-post{
    min-height: 420px;
  }

  .margin-button{
    margin-bottom: 30px;
  }
      
  .new-post{
    width:500px;
  }

  h2{
    font-size: 2.7rem;
  }
}
</style>
      
      
      