<template>
  <div>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
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
  </div>
</template>

<script>
export default {
  name: "menuItem",
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
};
</script>

<style scoped></style>
