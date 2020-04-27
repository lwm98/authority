<!-- a -->
<template>
  <div>
    aaa
    <button v-auth="['user','admin']">普通人都可以使用的按钮</button>
    <Authorized :authority="['admin']">
      <div class="" >这段话你有权限看到吗</div>
    </Authorized>

      <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang="scss" scoped></style>
