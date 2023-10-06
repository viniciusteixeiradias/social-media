<script lang="ts" setup>
import { ref } from 'vue';

const postContent = ref<string>('');

const onClick = (): void => {
  alert(postContent.value);
  postContent.value = '';
};
</script>

<template>
  <div class="input-card">
    <div class="input-card__avatar" />

    <textarea
      v-model="postContent"
      autofocus
      rows="2"
      class="input-card__input"
      placeholder="Share your stoke 🏄‍♂️ !"
    />

    <button
      class="input-card__button"
      @click="onClick"
    >
      Post >
    </button>
  </div>
</template>

<style lang="scss" scoped>
.input-card {
  width: 600px;
  display: flex;
  gap: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: white;
  align-items: center;

  &__avatar {
    background-color: #EAEAEA;
    border-radius: 50%;
    height: 40px;
    width: 40px;
  }

  &__input {
    flex: 1;
  }

  &__button {
    width: auto;
  }
}
</style>