<template>
  <v-container-fluid>
    <Header />
    <v-layout>
      <img
        class="desktop"
        style="width: 100%; height: auto"
        src="../assets/Desktop_banner.1.jpg"
      />
      <img
        class="mobile"
        style="width: 100%; height: auto"
        src="../assets/phone_banner.1.jpg"
      />
    </v-layout>
    <v-layout>
      <v-container>
        <h1 style="text-align:center" class="h1">Specialising in construction & building services</h1>
        <br />
      </v-container>
    </v-layout>
    <v-layout>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <router-link to="/Loft">
              <!-- <div class="container"> -->
                <!-- <img
                class="image"
                style="height: auto; width: 100%"
                src="../desktopsizeservices.jpg"
              /> -->
                <img
                  class="desktop"
                  style="height: auto; width: 100%"
                  src="../assets/desktopsizeservices.jpg"
                />
                <img
                  class=" mobile"
                  style="height: auto; width: 100%"
                  src="../assets/phonesizeservices.jpg"
                />
                <!-- <div class="middle">
                  <div class="text">
                    <div class="head1">Loft Conversions</div>
                    <div class="text1">
                      Add space with a beautiful master bedroom, new spacious
                      home office or a special dream retreat.
                    </div>
                  </div>
                </div>
              </div> -->
            </router-link>
          </v-col>
          <v-col cols="12" md="4">
            <router-link to="/Extension">
              <!-- <div class="container"> -->
                <img
                  class=" desktop"
                  style="height: auto; width: 100%"
                  src="../assets/desktopsize_services.jpg"
                />
                <img
                  class=" mobile"
                   style="height: auto; width: 100%"
                  src="../assets/phonesize_services.jpg"
                />
                <!-- <div class="middle">
                  <div class="text">
                    <div class="head1">Extension Builds</div>
                    <div class="text1">
                      Why move house when you can add rooms and space, improving
                      your properties value and potential.
                    </div>
                  </div>
                </div>
              </div> -->
            </router-link>
          </v-col>
          <v-col cols="12" md="4">
            <router-link to="/Refurbishments">
              <!-- <div class="container"> -->
                <img
                  class=" desktop"
                  style="height: auto; width: 100%"
                  src="../assets/desktopsize__services.jpg"
                />
                <img
                  class=" mobile"
                  style="height: auto; width: 100%"
                  src="../assets/phonesize__services.jpg"
                />
                <!-- <div class="middle">
                  <div class="text">
                    <div class="head1">Refurbishments</div>
                    <div class="text1">
                      Improving your property can be overwhelming, but we can
                      help you design and deliver your dream.
                    </div>
                  </div>
                </div>
              </div> -->
            </router-link>
          </v-col>
        </v-row>
      </v-container>
    </v-layout>
    <v-layout>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <router-link to="/Bespoke">
              <!-- <div class="container"> -->
                <img
                  class=" desktop"
                  style="height: auto; width: 100%"
                  src="../assets/desktopsize___services.jpg"
                />
                <img
                  class=" mobile"
                  style="height: auto; width: 100%"
                  src="../assets/phonesize___services.jpg"
                />
                <!-- <div class="middle">
                  <div class="text">
                    <div class="head1">Bespoke Finishes</div>
                    <div class="text1">
                      Feature walls, flooring, hand made kitchens, shelving
                      systems, lighting & SMART solutions.
                    </div>
                  </div>
                </div>
              </div> -->
            </router-link>
          </v-col>
          <v-col cols="12" md="4">
            <router-link to="/Kitchen">
              <!-- <div class="container"> -->
                <img
                  class=" desktop"
                  style="height: auto; width: 100%"
                  src="../assets/desktopsize____services.jpg"
                />
                <img
                  class=" mobile"
                  style="height: auto; width: 100%"
                  src="../assets/phonesize____services.jpg"
                />
                <!-- <div class="middle">
                  <div class="text">
                    <div class="head1">Kitchen Fit-outs</div>
                    <div class="text1">
                      We are renowned for our beautifully designed and installed
                      contemporary and traditional kitchens
                    </div>
                  </div>
                </div>
              </div> -->
            </router-link>
          </v-col>
          <v-col cols="12" md="4">
            <router-link to="/Carpentry">
              <!-- <div class="container"> -->
                <img
                  class=" desktop"
                  style="height: auto; width: 100%"
                  src="../assets/desktopsize..services.jpg"
                />
                <img
                  class=" mobile"
                  style="height: auto; width: 100%"
                  src="../assets/phonesize..services.jpg"
                />
                <!-- <div class="middle">
                  <div class="text">
                    <div class="head1">Carpentry</div>
                    <div class="text1">
                      Highly skilled craftsmen with a passion for timber
                      woodwork, joinery and the art or carpentry.
                    </div>
                  </div>
                </div>
              </div> -->
            </router-link>
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
  data() {
    return {
      hover: false,
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
/* .image {
  opacity: 1;
  display: block;
  width: 100%;
  height: 600px;
  transition: 0.5s ease;
  backface-visibility: hidden;
}
.middle {
  transition: 0.5s ease;
  opacity: 0;
  left: 50%;
  position: absolute;
  text-align: center;
  top: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
} */
span {
  font-size: 14px;
}
.cent {
  /* background-image: url('../assets/phone_banner_1(2).jpg'); */
  position: relative;
  text-align: center;
  color: white;
}
.sent {
  opacity: 0.5;
}
/* .centered {
  font-size: 50px;
  color: black;
  left: 0;
  position: absolute;
  text-align: center;
  top: 50%;
  width: 100%;
  opacity: 0.3;
} */
.text {
  color: black;
  font-size: 17px;
}
.container {
  position: relative;
}
/* .container:hover .image {
  opacity: 0.3;
}
.container:hover .middle {
  opacity: 1;
} */
@media only screen and (max-width: 992px) {
  .image {
    height: 400px;
  }
}
@media only screen and (max-width: 767px) {
  .image {
    height: 500px;
  }
}
@media only screen and (max-width: 450px) {
  .image {
    height: 400px;
  }
}
@media only screen and (max-width: 350px) {
  .image {
    height: 300px;
  }
}
</style>
