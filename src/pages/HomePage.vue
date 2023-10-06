<script lang="ts" setup>
import InputCard from '@/components/InputCard.vue';
import PostCard from '@/components/PostCard.vue';
import { db } from '@/mock/database';
import { useRouter } from 'vue-router';

const router = useRouter();

const onSignIn = (): void => {
  router.push({ name: 'sign-in' });
};

const onSignUp = (): void => {
  router.push({ name: 'sign-up' });
};

const getAuthorTagName = (authorUuid: string): string => {
  const author = db.User.find(({ uuid }) => uuid === authorUuid)!;
  return author.tag_name;
};
</script>

<template>
  <div>
    <header class="header">
      <div class="header__content">
        <div class="header__content--actions">
          <button @click="onSignIn">
            Sign in
          </button>
          <button @click="onSignUp">
            Sign up
          </button>
        </div>
      </div>
    </header>

    <div class="wrapper">
      <div class="wrapper__content">
        <InputCard />

        <PostCard
          v-for="post in db.Post"
          :key="post.uuid"
          :tag-name="getAuthorTagName(post.author_uuid)"
          :date="post.created_at"
          :content="post.content"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  height: 60px;
  width: 100vw;
  background-color: white;

  &__content {
    display: flex;
    padding: 1rem;
    align-items: center;
    justify-content: flex-end;
    overflow-x: auto;

    &--actions {
      display: flex;
      gap: 1rem;
    }
  }
}

.wrapper {
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
</style>@/mock/database