<template>
  <v-container-fluid>
    <v-navigation-drawer
      v-if="$vuetify.breakpoint.smAndDown"
      v-model="drawer"
      absolute
      temporary
    >
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <router-link to="/">
            <img
              style="width: 100%; height: auto"
              src="../assets/Pheonixx_logo.svg"
            />
          </router-link>
          <v-list-item>
            <router-link class="padd" style="text-decoration: none" to="/"
              >Home</router-link
            >
          </v-list-item>

          <v-list-item class="list">
            <router-link class="padd" style="text-decoration: none" to="/About"
              >About Us</router-link
            >
          </v-list-item>

          <v-list-item>
            <router-link
              class="padd"
              style="text-decoration: none"
              to="/Services"
              >Our Services</router-link
            >
          </v-list-item>

          <v-list-item>
            <router-link
              class="padd"
              style="text-decoration: none"
              to="/Contact"
              >Contact Us</router-link
            >
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar height="100px">
      <v-row
        no-gutters
        style="display: flex; justify-centent: center; align-items: center"
      >
        <v-col cols="2" v-if="$vuetify.breakpoint.smAndDown">
          <div class="mobile">
            <v-app-bar-nav-icon
              @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>
          </div>
        </v-col>
        <v-col
          :cols="$vuetify.breakpoint.smAndDown ? '10' : '4'"
          style="display: flex; justify-content: start; align-items: center"
        >
          <div>
            <div v-if="!$vuetify.breakpoint.smAndDown">
              <router-link to="/">
                <img
                  align="left"
                  style="width:auto;height:100px"
                src="../assets/Pheonixx_logo.svg"
                />
              </router-link>
            </div>
            <div v-if="$vuetify.breakpoint.smAndDown">
              <img style="width:auto;height:60px" src="../assets/Pheonixx_logo.svg" />
            </div>
          </div>
        </v-col>
        <v-col
          v-if="!$vuetify.breakpoint.smAndDown"
          cols="8"
          style="display: flex; justify-content: end; align-items: center"
        >
          <div style="display: flex; justify-content: end">
            <span v-for="nav in navBars" :key="nav" class="navbar">
              <router-link :to="nav.link">
                {{ nav.name }}
              </router-link>
            </span>
          </div>
        </v-col>
      </v-row>
      <!-- <div class="mobile"></div>
      <div class="flexx">
        <div>
          <router-link to="/"></router-link>
        </div>
        <div class="route desktop pad">
          <router-link
            style="text-decoration: none"
            class="hov padd exact"
            to="/"
            >Home</router-link
          >
        </div>
        <div class="route desktop pad">
          <router-link
            style="text-decoration: none"
            class="hov padd exact"
            to="/About"
            >About Us</router-link
          >
        </div>
        <div class="route desktop pad">
          <router-link
            style="text-decoration: none"
            class="hov padd exact"
            to="/Services"
            >Our Services</router-link
          >
        </div>
        <div class="route desktop pad">
          <router-link
            style="text-decoration: none"
            class="hov padd exact"
            to="/Contact"
            >Contact Us</router-link
          >
        </div>
      </div> -->
    </v-app-bar>
  </v-container-fluid>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      group: null,
      navBars: [
        { name: "Home", link: "/" },
        { name: "About Us", link: "/About" },
        { name: "Our Services", link: "/Services" },
        { name: "Contact Us", link: "/Contact" },
      ],
    };
  },

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style>
p {
  color: #999999;
  font-size: 20px;
  font-weight: 900;
}
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
.flexx {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: end;
  align-items: space-evenly !important;
  text-align: center !important;
}
.v-toolbar--prominent .v-toolbar__content {
  align-items: center !important;
  text-align: center !important;
}
.route {
  width: 10%;
}
.padd {
  color: black;
  font-size: 25px;

  /* margin-top: 50px !important; */
  /* top: 100px !important; */
}
.hov:hover {
  color: blue;
}
.pad {
  padding-top: 1% !important;
}
.navbar {
  text-decoration: none;
  padding: 0 30px;
  font-size: 24px;
  color: black;
}
a {
  background-color: transparent;
  color: black;
  text-decoration: none;
}
a:hover {
  color: lightgreen;
}
</style>
