<template>
  <v-app class="SignUp">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="CardReg">
            <h1 class="Reg">Регистрация</h1>
            <v-alert type="warning" :value="error">{{ error }}</v-alert>
            <v-card-text>
              <v-form ref="form" v-model="valid">
                <v-text-field dark name="firstName" label="Ваше имя" type="text" v-model="firstName"></v-text-field>
                <v-text-field dark name="surName" label="Ваша фамилия" type="text" v-model="surName"></v-text-field>
                <div>
                  <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field dark v-model="birthday" label="Дата рождения" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                    </template>
                    <v-date-picker v-model="birthday" :active-picker.sync="activePicker" :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)" min="1950-01-01" @change="save"
                    ></v-date-picker>
                  </v-menu>
                </div>

                <v-text-field dark name="email" label="E-mail" type="email" v-model="email"
                              :rules="emailRules"></v-text-field>
                <v-text-field dark name="password" label="Password" type="password" v-model="password"
                              :rules="passRules"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn rounded class="mx-auto btnReg" @click.prevent="signUp" :disabled="processing || !valid">Зарегистрироваться</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>


export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      password: "",
      firstName: "",
      surName: "",
      activePicker: null,
      birthday: null,
      menu: false,
      valid: false,
      emailRules: [
        (v) => !!v || "Введите e-mail",
        (v) => /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(v) || "Неправильно введён e-mail"
      ],
      passRules: [
        (v) => !!v || "Введите пароль",
        (v) => (v && v.length >= 6) || "Пароль должен быть более 6 символов"
      ],
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
    },

  },
  watch: {
    isUserAuthenticated(val) {
      if (val === true) {
        this.$router.push("/HomePage");
      }
    },
    menu (val) {
      val && setTimeout(() => (this.activePicker = 'YEAR'))
    },
  },
  methods: {
     signUp() {
      this.$store.dispatch("SIGNUP", {email: this.email, password: this.password, firstName: this.firstName, surName: this.surName, birthday: this.birthday });
    },
    save (date) {
      this.$refs.menu.save(date)
    },
  },
};
</script>

<style scoped lang="sass">
.SignUp
  background-color: #4B5563
.CardReg
  background-color: #4B5563
.Reg
  color: white
  margin-left: 15px
.btnReg
  background: rgb(179,157,219)
  background: linear-gradient(120deg, rgba(179,157,219,1) 40%, rgba(159,168,218,1) 78%)
</style>
