<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="navbar">
      <b-navbar-brand to="/">Iterators</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" class="toggler"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">Food</b-nav-item>
          <b-nav-item to="/summary">Account summary</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.navbar {
  background-color: #4f3dd5;
}

.toggler {
  border: 0;
}
</style>