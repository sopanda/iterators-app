<template>
  <b-row>
    <b-col md="6" lg="4" v-for="foodItem in food" :key="foodItem.id" class="mb-4 mt-4">
      <FoodItem v-bind:foodItem="foodItem" />
    </b-col>
  </b-row>
</template>

<script>
import FoodItem from "./FoodItem/FoodItem";
export default {
  name: "Food",
  components: {
    FoodItem
  },
  props: ["food"]
};
</script>

<style scoped>
</style>