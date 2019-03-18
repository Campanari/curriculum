<template>
  <v-container>
    <div class="display-2 font-weight-bold primary--text my-4">Where I've been.</div>
    <v-timeline>
      <v-timeline-item v-for="experience in data.experience" :key="experience.company" large light>
        <template v-slot:opposite>
          <span>{{ formatDate(experience.from) }}</span>
          <span v-if="experience.to"> - {{ formatDate(experience.to) }}</span>
          <span v-else> - now</span>
        </template>
        <v-card class="elevation-2">
          <v-card-title class="headline">{{ experience.company }}</v-card-title>
          <v-card-text>
            <div class="font-weight-bold">{{ experience.occupation }}</div>
            <div>{{ experience.description }}</div>
          </v-card-text>
          <v-card-actions v-if="experience.link">
            <v-spacer></v-spacer>
            <v-btn flat color="primary" :href="experience.link" target="_blank">Visit</v-btn>
          </v-card-actions>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDate: function(date) {
      const temp = new Date(date);

      return `${temp.getMonth() + 1}/${temp.getFullYear()}`;
    }
  }
};
</script>