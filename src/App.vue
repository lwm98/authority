<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div class="mg"></div>

    <lwm-aa>
      <div>这里用这个权限组件搞一下</div>
    </lwm-aa>
    <div class="mg"></div>
    <lwm-bb></lwm-bb>
  </div>
</template>

<script>
import a from "./components/a.vue";
import b from "./components/b.vue";

export default {
  name: "App",
  components: {
    "lwm-aa": a,
    "lwm-bb": b,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.mg {
  margin: 15px 0;
}
</style>
