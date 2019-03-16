<template>
  <v-container>
    <div class="title accent--text">{{ data.name }}</div>
    <div class="title">{{ data.occupation }}</div>
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
}
</script>