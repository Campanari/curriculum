<template>
  <v-list dense class="pt-0">
    <v-list-tile>
      <v-list-tile-title class="accent--text">{{ initials }}</v-list-tile-title>
    </v-list-tile>
    <v-list-tile>
      <v-list-tile-title>{{ data.name }}</v-list-tile-title>
    </v-list-tile>
    <v-list-tile>
      <v-list-tile-title>{{ data.occupation }}</v-list-tile-title>
    </v-list-tile>
    <v-divider/>
    <v-list-tile>
      <v-list-tile-title>About me</v-list-tile-title>
    </v-list-tile>
    <v-list-tile>
      <v-list-tile-title>Experience</v-list-tile-title>
    </v-list-tile>
    <v-list-tile>
      <v-list-tile-title>Skills & Education</v-list-tile-title>
    </v-list-tile>
    <v-list-tile>
      <v-list-tile-title>Contact</v-list-tile-title>
    </v-list-tile>
  </v-list>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    initials: function() {
      return name
        .split(" ")
        .map(value => value.substring(0, 1).toUpperCase())
        .reduce((accumulator, currentValue) => accumulator + currentValue);
    },
    hasName: function() {
      return !!this.data.name;
    },
    hasSummary: function() {
      return !!this.data.name;
    },
    hasOccupation: function() {
      return !!this.data.occupation;
    },
    hasExperience: function() {
      return this.data.experience.length > 0;
    },
    hasSkillsAndEducation: function() {
      return this.data.skills.length > 0 || this.data.education.length > 0;
    },
    hasContact: function() {
      return !!this.data.phone || !!this.data.email;
    }
  }
};
</script>