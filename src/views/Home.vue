<template>
  <b-container>
    <Food :food="food" />
  </b-container>
</template>

<script>
import Food from "../components/Food/Food";

import COLORS from "../constants/colors";

export default {
  name: "Home",
  components: { Food },
  data() {
    return {
      food: [
        {
          id: 1,
          title: "breakfast",
          desc: "breakfast",
          url:
            "https://cdn.pixabay.com/photo/2019/09/05/21/08/breakfast-4455048_960_720.jpg",
          color: COLORS.RED
        },
        {
          id: 2,
          title: "desserts",
          desc: "desserts",
          url:
            "https://cdn.pixabay.com/photo/2016/03/26/00/54/sweets-1279875_960_720.jpg",
          color: COLORS.YELLOW
        },
        {
          id: 3,
          title: "asian fusion",
          desc: "noodles",
          url:
            "https://upload.wikimedia.org/wikipedia/commons/d/d2/Nepalese_Thuppa.jpg",
          color: COLORS.GREEN
        }
      ]
    };
  }
};
</script>

<style>
</style>

