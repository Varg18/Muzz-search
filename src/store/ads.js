import {collection, getDocs} from "firebase/firestore";
import Vue from "vue"

export default {
    state: {
        ads: []
    },
    mutations: {
        SET_ADS(state, payload) {
            state.ads = payload
        }
    },
    actions: {
        async LOAD_ADS({commit}) {
            const querySnapshot = await getDocs(collection(Vue.$db, "ADS"));
            let ads = []
            querySnapshot.forEach(s => {
                const data = s.data()
                let AD = {
                    id: s.id,
                    title: data.title,
                    description: data.description,
                    emailReply: data.emailReply,
                    image: data.image,
                    interests: data.interests.slice(),
                    city: data.city
                }
                ads.push(AD)
            })
            commit("SET_ADS", ads)
        }
    },
    getters: {
        getAds: (state) => state.ads
    }
}