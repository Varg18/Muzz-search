<template>
  <v-container grid-list-md >
    <v-layout row wrap>
      <v-flex v-for="ad in ads" :key="ad.id" xs12 sm10 md8 offset-sm1 offset-md-2>
        <v-card elevation="2" class="black--text cardColor">
          <v-container fluid>
            <v-layout row>
              <v-flex xs4 md3>
                <v-img :src="ad.image"/>
              </v-flex>
              <v-flex xs8 md9 >
                <v-card-title>
                  <div class="headline">{{ad.title}}</div>
                </v-card-title>
                <v-card-subtitle>{{ad.description}}</v-card-subtitle>
                <v-spacer/>
                <v-card-text>
                  Инструмент(ы): {{getAdsInterests(ad.interests)}} <br> Город: {{ad.city}} <br> Обратная связь: {{ad.emailReply}}
                </v-card-text>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "AdsList",
  computed:{
    ads() {
      return this.$store.getters.getAds
    }
  },
  methods:{
    getAdsInterests(interests){
      return interests.join(" , ")
    }
  }
}
</script>

<style scoped lang="sass">
.cardColor
  background: rgb(179,157,219)
  background: linear-gradient(120deg, rgba(179,157,219,1) 10%, rgba(159,168,218,1) 78%)
</style>