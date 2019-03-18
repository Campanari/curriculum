<template>
  <v-container>
    <v-layout row>
      <v-flex xs6 px-2>
        <div class="display-2 font-weight-bold primary--text my-4">Who I am.</div>
        <div>{{ data.summary }}</div>
        <div class="display-2 font-weight-bold primary--text my-4">What I can do for you.</div>
        <div>{{ data.summary2 }}</div>
      </v-flex>
      <v-flex px-2>
        <v-layout>
          <v-flex xs4 text-uppercase primary--text font-weight-medium>
            <div class="mb-3">Location</div>
            <div class="mb-3">Email</div>
            <div class="mb-3">Phone</div>
            <div class="mb-3">Discord</div>
          </v-flex>
          <v-flex subheading column>
            <div class="mb-3">{{ data.location.country }}</div>
            <div class="mb-3">{{ data.contact.email }}</div>
            <div class="mb-3">{{ data.contact.phone }}</div>
            <div class="mb-3">{{ data.contact.discord }}</div>
          </v-flex>
        </v-layout>
        <v-spacer/>
        <v-layout column>
          <span class="text-xs-right display-1">{{ data.occupation }}</span>
          <span class="text-xs-right primary--text headline font-weight-light">{{ data.name }}</span>
        </v-layout>
      </v-flex>
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