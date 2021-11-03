<template>
  <v-container-fluid>
    <Header />
    <v-layout>
      <v-row>
        <v-col cols="12" md="12">
          <img
            class="desktop"
            style="width: 100%; height: auto"
            src="../assets/Desktop_banner1.jpg"
          />
          <img
            class="mobile"
            style="width: 100%; height: auto"
            src="../assets/phone_banner1.jpg"
          />
        </v-col>
      </v-row>
    </v-layout>
    <v-layout>
      <v-container>
        <h1 class="h11">
          Contact Us for the best solution for your building project.
        </h1>
      </v-container>
    </v-layout>
    <v-layout>
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <span class="span1">Address:</span><br />
            <span class="span2"
              >Phoenixx Trading UK Limited,<br />
              378a Brigstock Road, <br />Thornton Heath CR7 7JF </span
            ><br /><br />
            <span class="span1">Contact:</span><br />
            <span class="span2">Tel: 0208 058 4046</span><br />
            <span class="span2">E: info@phoenixxtrading.co.uk</span>
          </v-col>
          <v-col cols="12" md="6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.5082349473273!2d-0.11559248463412561!3d51.39371562683046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487606de9fe68141%3A0xd0bb4eb78de1c3f2!2s378A%20Brigstock%20Rd%2C%20Thornton%20Heath%20CR7%207JF%2C%20UK!5e0!3m2!1sen!2sin!4v1635836318050!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
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
              <router-link to="/Services" class="home"
                ><li class="listed">Our Services</li></router-link
              >
            </ul>
          </v-col>
          <v-col cols="12" md="4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.5082349473273!2d-0.11559248463412561!3d51.39371562683046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487606de9fe68141%3A0xd0bb4eb78de1c3f2!2s378A%20Brigstock%20Rd%2C%20Thornton%20Heath%20CR7%207JF%2C%20UK!5e0!3m2!1sen!2sin!4v1635836318050!5m2!1sen!2sin"
              width="100%"
              height="100%"
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
.span1 {
  font-size: 50px;
}
.span2 {
  font-size: 40px;
}
@media only screen and (max-width: 767px) {
  .desktop {
    display: none;
  }
  .h11{
font-size: 30px;
text-align: center;
  }
    .span2{
    font-size: 26px;
  }
  .span1{
    font-size: 38px;
  }
}
@media only screen and (min-width: 767px) {
  .mobile {
    display: none;
  }

}
</style>
