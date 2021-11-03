<template>
  <v-container-fluid>
    <Header />
    <v-layout>
      <img
        class="desktop"
        style="height: auto; width: 100%"
        src="../assets/Desktop_banner 1.jpg"
      />
      <img
        class="mobile"
        style="height: auto; width: 100%"
        src="../assets/phone_banner 1.jpg"
      />
    </v-layout>
    <v-layout>
      <v-container>
        <v-row>
          <v-col cols="12" md="12">
            <h1 class="h1">
              Our design & build team are highly qualified with a proven track
              record
            </h1><br>
            <h6 class="h6">Professional</h6>
            <h6 class="h6">
              Phoenixx Trading UK Limited fully complies as a principal
              contractor and takes H&S very seriously.
            </h6><br>
            <h6 class="h6">Committed</h6>
            <h6 class="h6">We are always happy to use a JCT contract committed to delivering your project on time and budget.</h6><br>
            <h6 class="h6">Comprehensive</h6>
            <h6 class="h6">We cater for all your needs from design, build, interior design and after care packages.</h6><br>
            <h6 class="h6">Stress-free</h6>
            <h6 class="h6">Complete peace of mind and stress free project, with your own designated project manager and foreman.</h6><br>
            <h6 class="h6" >Courteous</h6>
            <h6 class="h6">When it comes to working by neighbouring properties, we're empathetic, courteous and compliant.</h6><br>
            <h6 class="h6">Experienced</h6>
            <h6 class="h6">With years of experience, our clients have confidence in our knowledge, and our reviews speak for themselves.</h6>
          </v-col>
        </v-row>
      </v-container>
    </v-layout>
     <v-layout style="background-color: #d3d3d3">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <router-link to="/">
            <img
              style="height: auto; width: 100%"
              src="../assets/Pheonixx logo.svg"
            />
            </router-link>
          </v-col>
          <v-col cols="12" md="4">
            <ul class="ul1">
              <router-link to="/" class="home"
                ><li class="listed">Home</li></router-link
              ><br />
              <router-link to="/About" class="home"
                ><li class="listed">About Us</li></router-link
              ><br />
              <router-link to="/Contact" class="home"
                ><li class="listed">Contact Us</li></router-link
              >
            </ul>
          </v-col>
          <v-col cols="12" md="4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.5082349473273!2d-0.11559248463412561!3d51.39371562683046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487606de9fe68141%3A0xd0bb4eb78de1c3f2!2s378A%20Brigstock%20Rd%2C%20Thornton%20Heath%20CR7%207JF%2C%20UK!5e0!3m2!1sen!2sin!4v1635836318050!5m2!1sen!2sin"
              width="100%"
              height="auto"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </v-col>
        </v-row>
      </v-container>
    </v-layout>
  </v-container-fluid>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style>
@media only screen and (max-width: 767px) {
  .desktop {
    display: none;
  }
}
@media only screen and (min-width: 767px) {
  .mobile {
    display: none;
  }
}
</style>
