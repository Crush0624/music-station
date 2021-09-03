<template>
  <m-header></m-header>
  <router-view />
</template>
<script>
import { defineComponent } from "@vue/composition-api";
import Header from "@/components/header/header";

export default defineComponent({
  components: {
    MHeader: Header,
  },
  setup() {},
});
</script>
>
<style>
</style>
