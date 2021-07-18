<template>
  <div class="content">
    <HeaderComponent />
    <router-view />
  </div>
</template>

<script>
import HeaderComponent from "./components/Header.vue";
export default {
  components: { HeaderComponent },
  setup() {
    return {};
  },
};
</script>

<style lang="scss">
.content {
}
</style>
