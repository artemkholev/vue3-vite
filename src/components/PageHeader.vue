<template>
  <header
    :class="{header: true, greenColor: isRed}" 
    :style="styles"
  >
    {{ nameComponent + count }}
    <button class="button" @click.stop="increment">{{ count || "increment"}}</button>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    nameComponent: {
      type: String,
      required: false,
      default: "Header"
    }
  },
  emits: ['incrCountEmit'],
  data() {
    return {
      count: 0,
      isRed: false
    }
  },
  methods: {
    increment() {
      this.count++;
      this.$emit('incrCountEmit', this.count)
    }
  },
  computed: {
    doubleCount() {
      return this.count * 2
    },
    styles() {
      return {backgroundColor: this.isRed ? 'red' : 'grey' , ['--button-color'] : this.isRed ? 'geen' : 'yellow'}
    }
  },
  watch: {
    count(newCount, oldCount) {
      console.log("new ", newCount);
      console.log("Old ", oldCount);
      this.isRed = !this.isRed;
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #333;
    color: #fff;
    font-style: 32px;
    font-weight: 700;
}

.button {
  padding: 5px;
  border: none;
  border-radius: 5px;
  margin-left: 5px;
  background-color: var(--button-color);
}

.greenColor {
  color: green;
}
</style>