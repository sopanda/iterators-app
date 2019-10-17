<template>
  <b-card
    :img-src="foodItem.url"
    :img-alt="foodItem.title"
    img-top
    tag="article"
    class="text-center card-wrapper"
  >
    <b-card-title class="card-title" :style="{ 'color': foodItem.color}">{{foodItem.title}}</b-card-title>
    <b-card-text class="card-text">Crazy {{foodItem.desc}}! Are fun and melts in your mouth thing!</b-card-text>

    <b-button class="card-btn" :style="{'background-color': foodItem.color}">Looks yummy, want some</b-button>
  </b-card>
</template>

<script>
export default {
  name: "FoodItem",
  props: ["foodItem"]
};
</script>

<style scoped>
.card-wrapper {
  max-width: 357px;
  border-radius: 30px;
  padding-bottom: 20px;
  margin: auto;
}

.card-wrapper img {
  height: 221px;
  object-fit: cover;
  border-radius: 30px 30px 0 0;
}

.card-title {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 1px;
  margin: 30px 0 25px 0;
}

.card-text {
  font-weight: 100;
  font-size: 16px;
  margin: 34px 0;
  color: #35578c;
}

.card-btn {
  max-width: 257px;
  width: 100%;
  font-size: 14px;
  border-radius: 19px;
  padding: 15px;
  border: none;
}
</style>