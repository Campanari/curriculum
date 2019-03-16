<template>
  <v-timeline>
    <v-timeline-item v-for="experience in data.experience" :key="experience" color="red lighten-2" large>
      <template v-slot:opposite>
        <span>{{ experience.from }}</span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="headline">{{ experience.company }}</v-card-title>
        <v-card-text>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
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