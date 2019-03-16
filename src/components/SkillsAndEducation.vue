<template>
  <v-container>
    <div class="title accent--text">My Skills</div>
    <div v-for="skill in data.skills" :key="skill">
      <div>{{ skill.name }}</div>
      <v-rating v-model="skill.rating"></v-rating>
    </div>
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