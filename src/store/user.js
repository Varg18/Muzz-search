import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import Vue from "vue";


export default {

  state: {
    user: {
      isAuthenticated: false,
      uid: null,
    }
  },
  mutations: {
    SET_USER(state, payload){
      state.user.isAuthenticated = true
      state.user.uid = payload
    },
    UNSET_USER(state){
      state.user.isAuthenticated = false
      state.user.uid = null
    }
  },
  actions: {
    SIGNUP({ commit }, payload) {
      const auth = getAuth();
      commit("SET_PROCESSING", true);
      commit("CLEAR_ERROR")
      createUserWithEmailAndPassword(auth, payload.email, payload.password)
        .then((userCredential) => {
          setDoc(doc(Vue.$db, "users", userCredential.user.uid), {
            firstName: payload.firstName,
            surName: payload.surName,
            birthday: payload.birthday,
          }).then(r => console.log(r))
           commit("SET _PROCESSING", false);
        })
        .catch((error) => {
          commit("SET_PROCESSING", false)
          commit("SET_ERROR", error.message)
        });
    },
    SIGNIN({commit}, payload) {
      const auth = getAuth()
      commit("SET_PROCESSING", true)
      commit("CLEAR_ERROR")
      signInWithEmailAndPassword(auth, payload.email, payload.password)
          .then((userCredential) => {
            userCredential.user
            commit("SET_PROCESSING", false)
          })
          .catch((e) =>{
            commit("SET_PROCESSING",false)
            commit("SET_ERROR",e.message)
          })
    },
    STATE_CHANGED({commit}, payload){
      if(payload){
        commit("SET_USER", payload.uid)
      }else {
          commit("UNSET_USER")
      }
    }
  },
  getters:{
    isUserAuthenticated:(state) => state.user.isAuthenticated
  }
};
