 //import {collection, getDocs} from "firebase/firestore";
import { doc, getDoc} from "firebase/firestore";
import Vue from "vue"
import {getAuth} from 'firebase/auth';

export default {
    state: {
        userProfile: []
    },
    mutations: {
        SET_PROFILE(state, payload) {
            state.userProfile = payload
        }
    },
    actions: {
        async LOAD_PROFILE({commit}) {
            const auth = getAuth()
            auth.onAuthStateChanged(async (user) => {
                if (user) {
                    const docRef = doc(Vue.$db, "users", user.uid)
                    const querySnapshot = await getDoc(docRef)
                    if (querySnapshot.exists()) {
                        let userProfile = []
                        let profile = {
                            firstName: querySnapshot.data().firstName,
                            surName: querySnapshot.data().surName,
                            birthday: querySnapshot.data().birthday,
                            imageURL: querySnapshot.data().imageURL
                        }
                        userProfile.push(profile)
                        commit("SET_PROFILE", userProfile)
                    }
                }

            })
            // const querySnapshot = await getDocs(collection(Vue.$db, "users"));

            // if (querySnapshot.exists()) {
            //     console.log("Document data:", querySnapshot.data());
            // } else {
            //     console.log("No such document!", );
            // }
            // let userProfile = []
            // querySnapshot.forEach(s => {
            //     const data = s.data()
            //     let profile = {
            //          id: s.id,
            //          firstName: data.firstName,
            //          surName: data.surName,
            //          birthday: data.birthday,
            //          imageURL: data.imageURL
            //      }
            //      userProfile.push(profile)
            //  })
            // commit("SET_PROFILE", userProfile)
        }
    },
    getters: {
        getUserProfile: (state) => state.userProfile
    }
}