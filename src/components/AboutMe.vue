<template>
  <v-container grid-list-md fluid>
    <v-layout wrap row>
      <v-layout class="flex-container section" px-2>
        <div class="display-2 font-weight-bold primary--text my-4">Who I am.</div>
        <div>{{ data.summary }}</div>
      </v-layout>
      <v-layout class="flex-container section" px-2>
        <div class="display-2 font-weight-bold primary--text my-4">What I can do for you.</div>
        <div>{{ data.summary2 }}</div>
      </v-layout>
      <v-layout class="flex-container contact" py-4 px-2>
        <v-flex column xs6 text-uppercase primary--text font-weight-medium>
          <div class="mb-3">Location</div>
          <div class="mb-3">Email</div>
          <div class="mb-3">Phone</div>
          <div class="mb-3">Discord</div>
        </v-flex>
        <v-flex subheading column px-2>
          <div class="mb-3">{{ data.location.country }}</div>
          <div class="mb-3">{{ data.contact.email }}</div>
          <div class="mb-3">{{ data.contact.phone }}</div>
          <div class="mb-3">{{ data.contact.discord }}</div>
        </v-flex>
      </v-layout>
      <v-layout column pt-0>
        <span class="text-xs-right display-1">{{ data.occupation }}</span>
        <span class="text-xs-right primary--text headline font-weight-light">{{ data.name }}</span>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.section {
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-flex-direction: column;
  flex-direction: column;

  width: 80vh;
}

.contact .section {
  -webkit-flex-direction: row;
  flex-direction: row;

  width: 80vh;
}
</style>
