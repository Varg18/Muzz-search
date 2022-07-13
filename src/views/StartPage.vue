<template>
  <v-app class="Page">
    <!--          <v-card flat> &lt;!&ndash;  &ndash;&gt;-->
    <v-img :src="require('@/assets/Muzz.svg')">
      <v-img class="mx-auto" :src="require('@/assets/Register.svg')" @click="goRegistration"/>
      <div class="backForward">-->
        <v-flex xs12 sm8 md4>
          <v-img class="Back my-auto" :src="require('@/assets/Back.svg')" max-width="90" max-height="90"/>
        </v-flex>
        <v-flex xs12 sm8 md4>
          <v-img class="Forward my-auto " :src="require('@/assets/Forward.svg')" max-width="90" max-height="90"/>
        </v-flex>
      </div>
      <v-flex xs12 sm8 md4>;
        <v-img class="mx-auto" style="margin-top: 220px" :src="require('@/assets/Authentication.svg')" max-width="90"
               max-height="90" @click="goAuthentication"/>
      </v-flex>
    </v-img>
  </v-app>
</template>

<script>
export default {
  name: "StartPage",
  data() {
    return {}
  },
  methods: {
    goRegistration() {
      this.$router.push("/SignUp")
    },
    goAuthentication() {
      this.$router.push("SignIn")
    }
  },
};
</script>

<style scoped lang="sass">
.Page
  background-position: center center
  background-repeat: no-repeat
  background-attachment: fixed
  background-size: cover
  background-color: #4B5563

</style>
