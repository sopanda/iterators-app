<template>
  <div class="account-wrapper">
    <AccountCard :data="data" />
  </div>
</template>

<script>
import AccountCard from "../components/AccountCard/AccountCard";
import COLORS from "../constants/colors";

export default {
  name: "Summary",
  components: {
    AccountCard
  },
  data() {
    return {
      data: [
        {
          id: 1,
          title: "Starbucks Coffee",
          time: "1502973000",
          color: COLORS.YELLOW
        },
        {
          id: 2,
          title: "H&M",
          time: "1502967600",
          color: COLORS.PURPLE
        },
        {
          id: 3,
          title: "Eye Doctor",
          time: "1502985600",
          color: COLORS.RED
        }
      ]
    };
  }
};
</script>

<style>
.account-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 68px 14px;
}
</style>

