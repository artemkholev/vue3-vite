<template>
  <div class="wrapper">
    <PageHeader @incrCountEmit="(value) => console.log('emit', value)" :nameComponent="tesrVar"/>
    <PageContent>
      <p>{{'name ' + user.name }}</p>
      <p @click="incrAge">{{'age ' + user.age }}</p>
      <p>{{'doubleAge ' + doubleAge }}</p>
      <p>{{ emitData }}</p>
      <template #bottomSlot>
        <p>Bottom Slot Content</p>
      </template>
    </PageContent>
    <PageFooter @footer-emit="(value) => {emitData = value, console.log('footerEmit ', value)}" 
      :user="user"
      :
      />
  </div>
</template>


<script setup lang="ts">
import PageContent from '@/components/PageContent.vue';
import PageFooter from './components/PageFooter/PageFooter.vue';
import PageHeader from '@/components/PageHeader.vue';
import { ref, computed, watch } from 'vue';
import { type IUser } from './views/App.types';

const tesrVar = ref('HeaderTest');

const user = ref<IUser>({
  name: 'Serg',
  age: 38
})

const emitData = 

const incrAge = () => {
  user.value.age++;
}

//computed 
const doubleAge = computed(() => {
  return user.value.age * 2;
})

watch(user,
  (newUser, oldUser) => {
    console.log(newUser.age + " " + oldUser.age)
  },
  { deep: true })
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}

.content {
  flex-grow: 1;
}
</style>
