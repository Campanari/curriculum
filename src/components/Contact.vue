<template>
  <v-container>{{ data }}</v-container>
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