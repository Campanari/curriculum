<template>
  <v-layout column align-center py-5>
    <span class="display-3 font-weight-black primary--text mb-2 text-uppercase">{{ initials }}</span>
    <span class="display-1 mb-2">{{ data.name }}</span>
    <span class="title font-weight-light mb-3">{{ data.occupation }}</span>
    <v-btn flat @click="$vuetify.goTo('#about-me', options)">About me</v-btn>
    <v-btn flat @click="$vuetify.goTo('#experience', options)">Experience</v-btn>
    <v-btn flat @click="$vuetify.goTo('#skills-and-education', options)">Skills & Education</v-btn>
    <v-btn flat @click="$vuetify.goTo('#contact', options)">Contact</v-btn>
  </v-layout>
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
      return this.data.name
        .split(" ")
        .map(value => value[0])
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
    },
    options: function() {
      return {
        duration: 300,
        offset: 0
      };
    }
  }
};
</script>