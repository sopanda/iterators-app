<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Layout/Header";

export default {
  name: "app",
  components: { Header }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");

*,
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Roboto", sans-serif;
}
</style>

