<template>
  <b-button class="account-btn" :style="{'background-color': item.color}">
    <div class="left-group">
      <div>{{item.title}}</div>
      <span>{{Number(item.time) | moment("h:mmA, DD-MM-YYYY") }}</span>
    </div>

    <font-awesome-icon icon="arrow-right" class="arrow" />
  </b-button>
</template>

<script>
export default {
  name: "AccountItem",
  props: ["item"]
};
</script>

<style>
.account-btn {
  max-width: 271px;
  width: 100%;
  border-radius: 31px;
  padding: 21px;
  border: 0;
}

.left-group {
  float: left;
  text-align: left;
  padding-left: 15px;
  line-height: 1;
}

.left-group > div {
  font-size: 14px;
  text-transform: capitalize;
}

.left-group > span {
  font-size: 10px;
  opacity: 0.5;
  text-transform: uppercase;
}

.arrow {
  position: absolute;
  right: 12%;
  top: 50%;
  transform: translate(-12%, -50%);
}
</style>