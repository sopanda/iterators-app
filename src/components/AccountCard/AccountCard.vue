<template>
  <b-card tag="article" class="text-center card-wrapper">
    <b-card-title class="card-title">Your account summary</b-card-title>
    <div v-for="item in data" :key="item.id" class="single-item">
      <AccountItem :item="item" />
    </div>
  </b-card>
</template>

<script>
import AccountItem from "./AccountItem/AccountItem";

export default {
  name: "AccountCard",
  components: { AccountItem },
  props: ["data"]
};
</script>

<style scoped>
.card-wrapper {
  max-width: 357px;
  height: 100%;
  width: 100%;
  border-radius: 30px;
  padding: 16px 0;
}

.card-title {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 16px;
  color: #35578c;
  letter-spacing: 2px;
  margin-bottom: 26px;
}

.single-item {
  position: relative;
}

.single-item:not(:last-child) {
  margin-bottom: 21px;
}
</style>