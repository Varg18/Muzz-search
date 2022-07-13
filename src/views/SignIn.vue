<template>
  <v-app class="SignIn">
    <v-container fluid fill-height>
      <v-btn class="btnStartPage" @click="goStartPage">На главную</v-btn>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="CardAuth">
            <h1 class="Auth">Авторизация</h1>
            <v-alert type="warning" :value="error">{{ error }}</v-alert>
            <v-card-text>
                <v-form ref="form" v-model="valid">
                  <v-text-field dark label="E-mail" type="email" required :rules="emailRules" v-model="email"></v-text-field>
                  <v-text-field dark label="Password" type="password" required :rules="passRules" v-model="password" ></v-text-field>
                </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn rounded class="mx-auto btnAuth" @click.prevent="signIn" :disabled="processing || !valid" >Войти</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>

export default {
  name: "SignIn",
  data() {
    return {
      email: "",
      password: "",
      valid:false,
      emailRules: [
        (v) => !!v || "Введите e-mail",
        (v) => /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(v) || "Неправильно введён e-mail"
      ],
      passRules: [
        (v) => !!v || "Введите пароль",
        (v) => (v && v.length >= 6) || "Пароль должен быть более 6 символов"
      ]
    };
  },
  computed: {
    error() {
      return this.$store.getters.getError;
    },
    processing() {
      return this.$store.getters.getProcessing;
    },
    isUserAuthenticated() {
      return this.$store.getters.isUserAuthenticated;
    }
  },
  watch: {
    isUserAuthenticated(val) {
      if (val === true) {
        this.$router.push("/HomePage");
      }
    }
  },
  methods: {
    signIn() {
      this.$store.dispatch("SIGNIN", { email: this.email, password: this.password });
    },
    goStartPage(){
      this.$router.push("/StartPage")
    }
  }
};
</script>

<style scoped lang="sass">
.SignIn
  background-color: #4B5563
.btnStartPage
  background: rgb(179,157,219)
  background: linear-gradient(120deg, rgba(179,157,219,1) 40%, rgba(159,168,218,1) 78%)
.CardAuth
  background-color: #4B5563 !important
.Auth
  color: white
  margin-left: 15px
.btnAuth
  background: rgb(179,157,219)
  background: linear-gradient(120deg, rgba(179,157,219,1) 40%, rgba(159,168,218,1) 78%)
</style>
