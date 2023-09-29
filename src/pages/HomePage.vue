<script lang="ts" setup>
import InputCard from '@/components/InputCard.vue';
import PostCard from '@/components/PostCard.vue';

const numCards = 20;
</script>

<template>
  <div>
    <header />

    <div class="wrapper">
      <div class="wrapper__content">
        <InputCard />

        <PostCard
          v-for="card in numCards"
          :key="card"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
header {
  top: 0;
  position: fixed;
  height: 60px;
  width: 100vw;
  background-color: white;
}

.wrapper {
  margin-top: 60px;
  height: calc(100vh - 60px);
  width: 100vw;
  display: flex;
  overflow: hidden auto;
  justify-content: center;
  background-color: #EAEAEA;

  &__content {
    height: 100%;
    width: 600px;
    padding-top: 30px;
  }
}
</style>