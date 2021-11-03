<template>
  <v-container-fluid>
    <Header />
    <v-layout>
      <img
        class="desktop"
        style="height: auto; width: 100%"
        src="../assets/Desktopbanner1.jpg"
      />
      <img
        class="mobile"
        style="height: auto; width: 100%"
        src="../assets/phonebanner1.jpg"
      />
    </v-layout>
    <v-layout>
      <v-container>
        <v-container>
        <v-row>
        <v-col cols="12" md="12" style="background-color: #d3d3d3">
          <h1 class="h11">Loft Conversions</h1>
          <h6 class="h66">
            A cost effective solution for additional space. We can help you
            design the best loft space layout to suit your property and daily
            lifestyle requirements.
          </h6>
          <h6 class="h66">
            The loft space of your property is an untouched gem for most
            homeowners, which gives you the opportunity to change that unused
            area of dead space into a much needed practical room, office,
            bedroom or studio space.
          </h6>
        </v-col>
        </v-row>
        </v-container>
      </v-container>
    </v-layout>
    <v-layout>
      <v-container>
        <v-container>
        <v-row>
          <v-col cols="12" md="6" style="background-color: #ffcc99">
            <h1 class="h11">Velux Loft Conversions</h1>
            <h6 class="h66">
              Velux windows are cost-effective and create natural light and
              ventilation without the price tag. Normally with Velux window loft
              conversions you don’t need planning permission. This includes
              other Velux products like the Cabrio balcony design, which is also
              a great option for dwellings in non-conservation areas.
            </h6>
          </v-col>
          <v-col cols="12" md="6" style="background-color: #d3d3d3">
            <h1 class="h11">Dormer Loft Conversion</h1>
            <h6 class="h66">
              Dormers can be placed on the front, side or rear of the property,
              which is the most popular design build.
            </h6>
            <h6 class="h66">
              An extension to your roof giving more headroom and greater loft
              space, dormer loft conversions can accommodate windows and French
              doors. Velux windows can also be placed on the front of the roof
              creating natural light and ventilation to all rooms.
            </h6>
          </v-col>
        </v-row>
        </v-container>
      </v-container>
    </v-layout>
    <v-layout>
      <v-container>
        <v-container>
        <v-row>
          <v-col cols="12" md="6" style="background-color: #d3d3d3">
            <h1 class="h11">Hip to Gable Loft Conversions</h1>
            <h6 class="h66">
              Extending your existing hip ended roof into a gable ended roof
              gives more headroom and greater loft space.
            </h6>
            <h6 class="h66">
              This type of loft conversion extends your property on the sloping
              side, effectively replacing the sloping roof with a vertical wall
              (the gable) at the end to the same height as the ridge.
            </h6>
          </v-col>
          <v-col cols="12" md="6" style="background-color: #ffcc99">
            <h1 class="h11">Mansard Loft Conversions</h1>
            <h6 class="h66">
              By raising one of the pitched sides, the attic space is
              immediately transformed into a spacious living area.
            </h6>
            <h6 class="h66">
              The nature of the Mansard conversion means that, unlike
              hip-to-gable extensions, they are suitable for terraced housing as
              well as detached and semi-detached properties.
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
  components: { Header },
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
.h11 {
  text-align: center;
}
.h66 {
  text-align: center;
  font-size: 30px;
  font-weight: 100;
}
</style>
