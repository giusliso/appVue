<template>
  <div class="home">
      <img class = "robot" src = "../assets/robot-home.png" aria-hidden="true" />
      <div>Get started build first robot</div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.home {
  text-align: center;
}
.robot {
  height: 00px;
}

</style>
