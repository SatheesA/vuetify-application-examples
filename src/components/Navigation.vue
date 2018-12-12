<template>
  <v-navigation-drawer
    stateless
    value="true"
    v-model="drawer"
    permanent
    absolute
  >
<v-list-tile
          v-for="item in items"
          :key="item.title"
          :to="item.url"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "dashboard", url:'/'},
        { title: "Layouts", icon: "web", url: '/layouts' }
      ],
      right: null
    };
  }
};
</script>
