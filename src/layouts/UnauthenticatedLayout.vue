<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const onHome = (): void => {
  router.push({ name: 'home' });
};
</script>

<template>
  <div class="unauthenticated-layout">
    <header class="unauthenticated-layout__header">
      <div class="unauthenticated-layout__header--content">
        <button @click="onHome">
          Home
        </button>
      </div>
    </header>

    <div class="unauthenticated-layout__wrapper">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.unauthenticated-layout {
  &__header {
    height: 60px;
    width: 100vw;
    background-color: white;

    &--content {
      display: flex;
      padding: 1rem;
      align-items: center;
    }
  }

  &__wrapper {
    height: calc(100vh - 60px);
    width: 100vw;
    display: flex;
    overflow: hidden auto;
    justify-content: center;
    background-color: #EAEAEA;
  }
}
</style>
