<script lang="ts" setup>
import moment from 'moment';

const props = defineProps<{
  tagName: string;
  date: string;
  content: string;
}>();
</script>

<template>
  <div class="post-card">
    <div class="post-card__header">
      <div class="post-card__header--avatar" />
      <span class="post-card__header--tag-name">{{ props.tagName }}</span>
      <span class="post-card__header--date">Post {{ moment(date).fromNow() }}</span>
    </div>

    <div class="post-card__content">
      {{ props.content }}
    </div>
    
    <div class="post-card__actions">
      <button>Like</button>
      <button>Dislike</button>
      <button>Comments</button>
      <button>Report</button>
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