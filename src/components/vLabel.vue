<template>
  <v-row class="vLabel">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn rounded class="btnColor black--text" dark v-bind="attrs" v-on="on">
          Создать объявление
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Форма подачи объявления</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Описание" v-model="title"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="О себе" v-model="description"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Укажите Город" v-model="city" type="text"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field type="text" v-model="emailReply" label="Введите e-mail для отклика"></v-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <v-autocomplete
                    :items="[
                    'Барабаны',
                    'Бас-гитара',
                    'Электрогитара(Rythm position)',
                    'Электрогитара(Solo position)',
                    'Клавишные',
                    'Вокал',
                    'Скрипка',
                    'DJ',
                  ]"
                    label="Interests"
                    multiple
                    v-model="interests"
                ></v-autocomplete>
              </v-col>
              <input @change="downloadImage" type="file">
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Закрыть
          </v-btn>
          <v-btn color="blue darken-1" text @click.prevent="Submit">
            Создать
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import {collection, addDoc} from "firebase/firestore";
import Vue from "vue"
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from 'firebase/storage';
import user from '@/store/user';

export default {
  name: "vLabel",
  data: () => ({
    title: "",
    description: "",
    emailReply: "",
    image: "",
    interests: [],
    city: "",
    dialog: false,
  }),
  methods: {
    Submit() {
      addDoc(collection(Vue.$db, "ADS"), {
        title: this.title,
        description: this.description,
        emailReply: this.emailReply,
        interests: this.interests,
        city: this.city,
        image: this.image
      });
    },
    downloadImage(e){
      const file = e.target.files[0]
      const storage = getStorage()
      const storageRef = ref(storage,`${user.state.user.uid}/` + file.name )
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
          () => {

          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              this.image = downloadURL
            });
          }
      );
    },
  }
};
</script>

<style scoped lang="sass">
.vLabel
  margin-left: 15px
.btnColor
  background: rgb(179,157,219)
  background: linear-gradient(120deg, rgba(179,157,219,1) 10%, rgba(159,168,218,1) 78%)
</style>
