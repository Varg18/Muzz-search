import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth, onAuthStateChanged } from "firebase/auth"

Vue.config.productionTip = false

const firebaseConfig = {
    apiKey: "AIzaSyB1oR2dJSlm0910O2Oy3LhwjjBUU4YYLSI",
    authDomain: "backenddiplomv2-eb281.firebaseapp.com",
    projectId: "backenddiplomv2-eb281",
    storageBucket: "backenddiplomv2-eb281.appspot.com",
    messagingSenderId: "337068084013",
    appId: "1:337068084013:web:e4e2d3b33d5da3541521a4"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

Vue.$db = db

  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App),
    created() {
        const auth = getAuth();
        const vm = this
        onAuthStateChanged(auth, (user) => {
            vm.$store.dispatch("STATE_CHANGED", user)
                .then(r => {
                    console.log(r)
                })
        });
        this.$store.dispatch("LOAD_ADS")
             .then(r =>{
                 console.log(r)
             })
        this.$store.dispatch("LOAD_PROFILE")
            .then(r => {
                console.log(r)
            })
    }
  }).$mount('#app')
