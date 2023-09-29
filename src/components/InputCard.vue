<template>
  <div class="input-card">
    <div class="input-card__avatar" />

    <textarea
      rows="2"
      class="input-card__input"
      placeholder="Share your stoke 🏄‍♂️ !"
    />

    <button class="input-card__button">
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