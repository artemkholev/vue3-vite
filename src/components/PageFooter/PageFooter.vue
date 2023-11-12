<template>
  <footer @click="emits('footerEmit', 'my-footer')" class="footer">
    Footer
  </footer>
</template>

<script setup lang="ts">
import { toRefs } from "vue";
import type { IPropsFooter, IFooterEmits } from "./PageFooter.types"

const props = withDefaults(defineProps<IPropsFooter>(), {
  user: () => {
    return {user, age}
  }
}) ;

const { user } = toRefs(props);

const emits = defineEmits<IFooterEmits>();

console.log(props.user);

</script>

<style src="./PageFooter.style.scss" lang="scss" scoped></style>

