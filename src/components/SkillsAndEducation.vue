<template>
  <v-container>
    <div class="display-2 font-weight-bold primary--text my-4">What I know.</div>
    <v-layout row>
      <v-flex xs6 mx-4>
        <span class="sheet headline font-weight-medium mb-4 mx-4 primary--text">My Education</span>
        <v-flex class="ma-4 md6" v-for="education in data.education" :key="education.title">
          <v-layout row>
            <span class="primary mr-2" style="width: 3px;"></span>
            <v-layout column>
              <span>{{ education.company }}</span>
              <span
                class="primary--text headline font-weight-bold text-xs-right"
              >{{ education.title }}</span>
              <span
                class="text-xs-right"
              >{{ formatDate(education.from) }} - {{ formatDate(education.to) }}</span>
            </v-layout>
          </v-layout>
        </v-flex>
      </v-flex>
      <v-flex xs6>
        <span class="headline font-weight-medium mb-4 primary--text">My Skills</span>
        <v-layout wrap>
          <v-flex v-for="skill in data.skills" :key="skill.name">
            <v-subheader>{{ skill.name }}</v-subheader>
            <v-rating readonly color="primary" background-color="secondary" v-model="skill.rating"></v-rating>
          </v-flex>
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
  },
  methods: {
    formatDate: function(date) {
      return new Date(date).getFullYear();
    }
  }
};
</script>