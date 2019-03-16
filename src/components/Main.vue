<template>
  <v-container>
    <LandingPage :data="data"/>
    <v-divider></v-divider>
    <AboutMe :data="data"/>
    <v-divider></v-divider>
    <Experience :data="data"/>
    <v-divider></v-divider>
    <SkillsAndEducation :data="data"/>
    <v-divider></v-divider>
    <Contact :data="data"/>
  </v-container>
</template>

<script>
import LandingPage from "./LandingPage";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Experience from "./Experience";
import SkillsAndEducation from "./SkillsAndEducation";

export default {
  components: {
    LandingPage, AboutMe, Contact,
    Experience, SkillsAndEducation
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
</script>