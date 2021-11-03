<template>
  <v-container-fluid>
    <Header />
    <v-layout>
      <img
        class="desktop"
        style="width: 100%; height: auto"
        src="../assets/Desktopbanner_1.jpg"
      />
      <img
        class="mobile"
        style="width: 100%; height: auto"
        src="../assets/phone_banner1(1).jpg"
      />
    </v-layout>
    <v-layout>
      <v-container>
        <v-container>
        <v-row>
        <v-col cols="12" md="12" style="background-color: #d3d3d3">
          <h1 class="h11">Extensions</h1>
          <h6 class="h111">Improving your properties value and potential.</h6>
          <h6 class="h66">
            Why move house when you can add space, improving your properties
            value and potential. Specialising in single storey, double storey
            and wrap around extensions we can help you design and construct the
            best solution for your property. House extensions come in many
            different shapes and sizes, whether you live in a house with a
            garden or a town house with limited extra outdoor space building an
            extra room is always a possibility.
          </h6>
          <h6 class="h66">
            Your home reflects your personality and a home extension allows you
            to develop a space that is as individual as you are. Whether you
            will be extending the kitchen, adding a side return or wrap around
            extension, we are here to make your vision become a reality
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
            <h1 class="h11">Single Storey Extensions</h1>
            <h6 class="h66">
              We can design and build rear, side, or wrap around residential &
              commercial extensions Single storey extensions are very popular,
              as they are relatively easy to realise, and if they don’t exceed a
              certain size, they might not necessarily require planning
              permission.
            </h6>
            <h6 class="h66">
              They can also visually open up the house and connect it with the
              garden. We like to use sliding glass doors or walls to make the
              most of the outdoor space as well as the natural light.
            </h6>
          </v-col>
          <v-col cols="12" md="6" style="background-color: #d3d3d3">
            <h1 class="h11">Double Storey Extensions</h1>
            <h6 class="h66">
              A cost-effective double storey extension could make more sense
              than moving if you need space. Double storey extensions can add a
              significant amount of living space to your home. You could add a
              bedroom on the first floor while extending your kitchen or dining
              room downstairs.
            </h6>
            <h6 class="h66">
              However, as you are making a significant change to the exterior of
              your house, you will almost certainly be required to obtain
              planning permission.
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
            <h1 class="h11">Over-structure Extensions</h1>
            <h6 class="h66">
              Extending over the top of an existing structure such as a garage,
              kitchen, living or dining room. If your house has an attached
              garage or other single storey structure, extending above this
              could be an excellent option for creating extra living space on
              the first floor.
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
  .h111{
  font-size: 20px;
  text-align: center;
}
 
}
@media only screen and (min-width: 767px) {
  .mobile {
    display: none;
  }
  .h111{
    font-size: 30px;
    text-align: center;
  }

}

</style>
