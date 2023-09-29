<script lang="ts" setup>
function generateRandomPhrase(minLength: number, maxLength: number): string {
  const possibleChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ';
  const textLength = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  let result = '';

  for (let i = 0; i < textLength; i++) {
    const randomIndex = Math.floor(Math.random() * possibleChars.length);
    result += possibleChars[randomIndex];
  }

  return result;
}

function generateRandomTexts(): string[] {
  const numTexts: number = 1;
  const texts: string[] = [];

  for (let i = 0; i < numTexts; i++) {
    const minLength = 10;
    const maxLength = 1000;
    const randomPhrase = generateRandomPhrase(minLength, maxLength);
    texts.push(randomPhrase);
  }

  return texts;
}
</script>

<template>
  <div class="post-card">
    <div class="post-card__header">
      <div class="post-card__header--avatar" />
      <span class="post-card__header--tag-name">@username</span>
      <span class="post-card__header--date">Post by @anotherusername 4 days ago</span>
    </div>

    <div class="post-card__content">
      {{ generateRandomTexts() }}
    </div>
    
    <div class="post-card__actions">
      <button>Like</button>
      <button>Dislike</button>
      <button>Comments</button>
      <!-- TODO: <button>More</button> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.post-card {
  width: 600px;
  padding: 1rem;
  margin-bottom: 1rem;
  height: fit-content;
  background-color: white;

  &__header {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &--avatar {
      background-color: #EAEAEA;
      border-radius: 50%;
      height: 40px;
      width: 40px;
    }

    &--tag-name {
      font-size: 1.1rem;
    }

    &--date {
      color: #b6b6b6;
      font-size: 0.9rem;
    }
  }

  &__content {
    padding: 1rem;
    overflow-wrap: break-word;
  }

  &__actions {
    display: flex;
    gap: 1rem;
  }
}
</style>