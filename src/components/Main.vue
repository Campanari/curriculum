<template>
  <v-container py-0>
    <LandingPage :data="data"/>
    <v-divider></v-divider>
    <AboutMe id="about-me" :data="data"/>
    <v-divider></v-divider>
    <Experience id="experience" :data="data"/>
    <v-divider></v-divider>
    <SkillsAndEducation id="skills-and-education" :data="data"/>
    <v-divider></v-divider>
    <Contact id="contact" :data="data"/>
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