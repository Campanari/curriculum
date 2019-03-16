<template>
  <v-container>
    <div class="accent--text">Who I am.</div>
    <div style="color: rgb(255, 255, 255);">{{ data.summary }}</div>
    <div style="color: rgb(255, 170, 00);">What I can do for you.</div>
    <div style="color: rgb(255, 255, 255);">{{ data.summary2 }}</div>
    <div style="text-transform: uppercase; color: rgb(255, 170, 00);">Location</div>
    <div style="color: rgb(255, 255, 255);">{{ data.location.country }}</div>
    <div style="text-transform: uppercase; color: rgb(255, 170, 00);">Email</div>
    <div style="color: rgb(255, 255, 255);">{{ data.contact.email }}</div>
    <div style="text-transform: uppercase; color: rgb(255, 170, 00);">Phone</div>
    <div style="color: rgb(255, 255, 255);">{{ data.contact.phone }}</div>
    <div style="text-transform: uppercase; color: rgb(255, 170, 00);">Discord</div>
    <div style="color: rgb(255, 255, 255);">{{ data.contact.discord }}</div>
    <div class="accent--text">{{ data.occupation }}</div>
    <div style="color: rgb(255, 170, 00);">{{ data.name }}</div>
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