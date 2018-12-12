<template>
  <div>
    <slot />
    <div id="back-button">
      <v-btn href="/" fab dark small color="primary">
        <v-icon dark>home</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<style>
#back-button {
  position: fixed;
  bottom: -4px;
  left: 10px;
}
</style>
