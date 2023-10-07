<script lang="ts" setup>
import InputCard from '@/components/InputCard.vue';
import PostCard from '@/components/PostCard.vue';
import { db } from '@/mock/database';

const getAuthorTagName = (authorUuid: string): string => {
  const author = db.User.find(({ uuid }) => uuid === authorUuid)!;
  return author.tag_name;
};
</script>

<template>
  <div class="home-page">
    <InputCard />

    <PostCard
      v-for="post in db.Post"
      :key="post.uuid"
      :tag-name="getAuthorTagName(post.author_uuid)"
      :date="post.created_at"
      :content="post.content"
    />
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  height: 100%;
  width: 600px;
  padding-top: 30px;
}
</style>
