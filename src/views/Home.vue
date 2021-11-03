<template>
  <v-container-fluid>
    <Header />
    <v-layout>
      <v-carousel class="desktop" :show-arrows="false">
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
      <v-carousel class="mobile" :show-arrows="false">
        <v-carousel-item
          v-for="(item, i) in chains"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </v-layout>
    <v-layout>
      <v-container>
        <v-row>
          <v-col cols="12" md="12">
            <h1 class="h1">BUILD YOUR DREAM</h1>
            <h2 class="h2">Design & Build Construction Company.</h2>
          </v-col>
        </v-row>
      </v-container>
    </v-layout>
    <br />
    <v-layout>
      <v-container>
        <v-row>
          <v-col cols="12" md="7">
            <h3 class="h3">What we do?</h3>
            <br />
            <h6 class="h6">Loft Conversions</h6>
            <h6 class="h6">
              Add space with a beautiful master bedroom, new spacious home
              office or a special dream retreat.
            </h6>
            <br />
            <h6 class="h6">Extensions</h6>
            <h6 class="h6">
              Why move house when you can add rooms and space, improving your
              properties value and potential.
            </h6>
            <br />
            <h6 class="h6">Refurbishments</h6>
            <h6 class="h6">
              Improving your property can be overwhelming, but we can help you
              design and deliver your dream
            </h6>
          </v-col>
          <v-col cols="12" md="5">
            <img
              class="desktop"
              style="height: auto; width: 100%"
              src="../assets/desktop_size_services.jpg"
            />
            <img
              class="mobile"
              style="height: auto; width: 100%"
              src="../assets/phone_size_services.jpg"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-layout>
    <br />
    <v-layout>
      <v-container>
        <v-row>
          <v-col cols="12" md="7">
            <h3 class="h3">Why choose us?</h3>
            <br />
            <h6 class="h6">
              Our design & build team are highly qualified with a proven track
              record
            </h6>
            <br />
            <h6 class="h6">Professional</h6>
            <h6 class="h6">
              Phoenixx Trading UK Limited fully complies as a principal
              contractor and takes H&S very seriously.
            </h6>
            <br />
            <h6 class="h6">Committed</h6>
            <h6 class="h6">
              We are always happy to use a JCT contract committed to delivering
              your project on time and budget.
            </h6>
            <br />
            <h6 class="h6">Comprehensive</h6>
            <h6 class="h6">
              We cater for all your needs from design, build, interior design
              and after care packages.
            </h6>
          </v-col>
          <v-col cols="12" md="5">
            <img
              class="desktop"
              style="height: auto; width: 100%"
              src="../assets/desktop_size_services2.jpg"
            />
            <img
              class="mobile"
              style="height: auto; width: 100%"
              src="../assets/phone_size_services2.jpg"
            />
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
  data() {
    return {
      items: [
        {
          src: require("@/assets/Desktop_banner_1.jpg"),
        },
        {
          src: require("@/assets/Desktop_banner_2.jpg"),
        },
        {
          src: require("@/assets/Desktop_banner_3.jpg"),
        },
      ],
      chains: [
        {
          src: require("@/assets/phone_banner_1.jpg"),
        },
        {
          src: require("@/assets/phone_banner_2.jpg"),
        },
        {
          src: require("@/assets/phone_banner_3.jpg"),
        },
      ],
    };
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
.h1 {
  font-size: 50px;
  font-weight: 200;
}
.h2 {
  font-size: 40px;
  font-weight: 200;
}
.h3 {
  font-size: 40px;
  font-weight: 200;
}
.h6 {
  font-size: 30px;
  font-weight: 100;
}
.ul1 {
  list-style-type: none;
}
.listed {
  margin-top: 5%;
  font-size: 30px;
  text-align: center;
}
.home {
  text-decoration: none;
  color: black;
}
</style>
