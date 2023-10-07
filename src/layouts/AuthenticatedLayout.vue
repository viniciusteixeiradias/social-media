<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const onSignIn = (): void => {
  router.push({ name: 'sign-in' });
};

const onSignUp = (): void => {
  router.push({ name: 'sign-up' });
};
</script>

<template>
  <div class="authenticated-layout">
    <header class="authenticated-layout__header">
      <div class="authenticated-layout__header--content">
        <div class="authenticated-layout__header--content--actions">
          <button @click="onSignIn">
            Sign in
          </button>
          <button @click="onSignUp">
            Sign up
          </button>
        </div>
      </div>
    </header>

    <div class="authenticated-layout__wrapper">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.authenticated-layout {
  &__header {
    height: 60px;
    width: 100vw;
    background-color: white;

    &--content {
      display: flex;
      padding: 1rem;
      align-items: center;
      justify-content: flex-end;

      &--actions {
        display: flex;
        gap: 1rem;
      }
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
