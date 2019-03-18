<template>
  <v-app dark>
    <v-navigation-drawer permanent app>
      <Menu :data="data"/>
    </v-navigation-drawer>
    <v-content>
      <Main :data="data"/>
    </v-content>
  </v-app>
</template>

<script>
import json from "./assets/data.json";
import Menu from "./components/Menu";
import Main from "./components/Main";

export default {
  name: "App",
  components: { Menu, Main },
  data: () => ({
    data: json
  })
};
</script>