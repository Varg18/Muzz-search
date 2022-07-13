<template>
  <v-app style="background-color: #4B5563">
   <v-container grid-list-md>
     <v-layout row wrap>
       <v-flex v-for="user in userProfile" :key="user.id"  xs12 sm10 md8 offset-sm1 offset-md-2 >
         <MenuItem/>
         <v-card flat style="background-color: #4B5563" class="mx-auto" height="800" width="800" >
           <v-list-item>
            <v-img v-model="imageUrl" :src="user.imageURL" style="margin-bottom: 15px; max-width: 150px"/>
           </v-list-item>
           <v-text-field dark outlined disabled :value="user.firstName" type="text" label="Имя"></v-text-field>
           <v-text-field dark outlined disabled :value="user.surName" type="text" label="Фамилия"></v-text-field>
           <v-text-field dark outlined disabled :value="user.birthday" type="text" label="Дата рождения: "></v-text-field>
           <label style="color: white" >Загрузите ваше фото</label> <br/><br/>
           <input @change="downloadAvatar" type="file"/>
         </v-card>
       </v-flex>
     </v-layout>
   </v-container>
  </v-app>
</template>

<script>
import MenuItem from "@/components/MenuItem";
import {getDownloadURL} from "firebase/storage";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import Vue from "vue"
import user from '@/store/user';
export default {
  name: "HomePage",
  components: { MenuItem },
   data() {
     return {
       imageUrl: null
     };
   },
  computed:{
    userProfile() {
      return this.$store.getters.getUserProfile
    }
  },
  methods:{
    downloadAvatar(e) {
      //this.imageUrl = null
      // console.log(e.target.files[0])
      const file = e.target.files[0]
      const storage = getStorage()
      const storageRef = ref(storage,`${user.state.user.uid}/` + file.name )
      // const uploadTask = uploadBytesResumable(storageRef, file);
      // uploadTask.on((snapshot) =>{
      //     console.log(snapshot)
      // })
      // getDownloadURL(uploadTask.snapshot.ref).then((url) =>{
      //   console.log("gfweewgew", url)
      // })
      //-------------------------------------------
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
          () => {

          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              this.imageUrl = downloadURL
              const updateRef = doc(Vue.$db, "users", `${user.state.user.uid}`)
              updateDoc(updateRef,{
                imageURL: this.imageUrl
              })
            });
          }
      );

      // uploadBytes(storageRef, file).then(() => {
      //  alert("Успех")
      // });
      // getDownloadURL(ref(storage, `${user.state.user.uid}/` + file.name)).then((url) => {
      //     this.imageUrl = url
      //     //console.log("gfewgwere",url)
      //     //const avatarUrl = url
      //     //const image = document.getElementById("image")
      //     //image.src = url
      // });
    }
  }
};
</script>

<style scoped></style>
