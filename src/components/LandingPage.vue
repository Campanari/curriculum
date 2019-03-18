<template>
  <v-container pa-0 grid-list-md responsive style="height: 100vh;">
    <v-layout row wrap fill-height justify-end align-end text-xs-right>
      <v-flex xs12>
        <div class="text-xs-right text-uppercase display-3">{{ data.name }}</div>
        <div class="primary--text text-xs-right text-uppercase display-4">{{ data.occupation }}</div>
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

