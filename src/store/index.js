import Vue from "vue";
import Vuex from "vuex";
import userModule from "./user";
import generalModule from "./general";
import Ads from "./ads"
import userProfile from './userProfile';


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {userModule, generalModule, Ads, userProfile}
});
