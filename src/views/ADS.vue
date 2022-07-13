<template>
  <v-app style="background-color: #4B5563">
    <v-toolbar style="background-color: #4B5563" max-height="60" flat>
      <v-btn dark text @click.prevent="signedOut">Выйти</v-btn>
      <v-app-bar-nav-icon dark  @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
<!--      <v-autocomplete-->
<!--        class="autocomplete"-->
<!--        clearable-->
<!--        dense-->
<!--        filled-->
<!--        rounded-->
<!--        solo-inverted-->
<!--        label="Выберите город"-->
<!--        dark-->
<!--      ></v-autocomplete>-->
      <vLabel />
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-btn text v-for="(item, i) in items" :key="`items${i}`" :to="item.route">
        <v-icon left v-html="item.icon"></v-icon>
        {{ item.title }}
      </v-btn>
    </v-navigation-drawer>

    <ads-list/>

  </v-app>
</template>

<script>
import vLabel from "../components/vLabel.vue";
import AdsList from "@/components/AdsList";
import { getAuth, signOut } from "firebase/auth";
export default {
  name: "ADS",
  components: {
    vLabel,
    AdsList
  },
  data() {
    return {
      drawer: null,
      items: [
        {title: "Объявления", icon: "mdi-view-dashboard", route: "/ads"},
        // { title: "Мои сообщения", icon: "mdi-forum" },
        {title: "О себе", icon: "mdi-account-details", route: "/HomePage"},
        // { title: "Сообщества", icon: "mdi-account-group" },
      ],
    };
  },
  methods: {
    signedOut() {
      const auth = getAuth();
      signOut(auth).then(() => {
        this.$router.push("/SignIn")
      }).catch((error) => {
        console.log(error)
      });

    }
  },
}
</script>

<style scoped>
.autocomplete {
  margin-top: 20px;
  max-width: 250px;
}
</style>
