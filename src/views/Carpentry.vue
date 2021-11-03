<template>
  <v-container-fluid>
    <Header />
    <v-layout>
      <img
        style="width: 100%; height: auto"
        src="../assets/Desktopbanner__1.jpg"
      />
      <img
        style="width: 100%; height: auto"
        src="../assets/phone_banner___1.jpg"
      />
    </v-layout>
    <v-layout>
      <v-container>
        <v-container>
        <v-row>
        <v-col cols="12" md="12" style="background-color: #d3d3d3">
          <h1 class="h11">Carpentry</h1>
          <h6 class="h66">
            Highly skilled craftsmen with a passion for timber woodwork, joinery
            and the art or carpentry. There aren't many household items,
            furnishings or fixings that can't be crafted from wood. We can build
            and install your standard flat pack items, but we also pride
            ourselves in offering bespoke carpentry to suit your home.
          </h6>
          <h6 class="h66">
            We can offer solutions for the following; Stair cases, bookcases,
            hidden storage, shelving units, wardrobes, doors, door frames,
            skirting & architrave, flooring, kitchens, worktops, loft hatches &
            ladders, roofing, decking and so much more. Just ask!
          </h6>
        </v-col>
        </v-row>
        </v-container>
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
              <router-link to="/Services" class="home"
                ><li class="listed">Our Services</li></router-link
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
