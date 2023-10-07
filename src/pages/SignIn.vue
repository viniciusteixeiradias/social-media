<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

interface Form {
  username: string;
  password: string;
}

const router = useRouter();

const form = ref<Form>({
  username: '',
  password: ''
});

const onSignUp = (): void => {
  router.push({ name: 'sign-up' });
};

const onSubmit = (): void => {
  alert(`Username: ${form.value.username} \nPassword: ${form.value.password}`);
};
</script>

<template>
  <form
    class="sign-in"
    @submit="onSubmit"
  >
    <div>
      <label for="username">Username or E-mail:</label>
      <input
        id="username"
        v-model="form.username"
        type="text"
        name="username"
        required
      >
    </div>

    <div>
      <label for="pass">Password:</label>
      <input
        id="pass"
        v-model="form.password"
        type="password"
        name="password"
        minlength="8"
        required
      >
    </div>

    <div class="sign-in__actions">
      <button
        type="button"
        @click="onSignUp"
      >
        Sign Up
      </button>
      <button type="submit">
        Submit
      </button>
    </div>
  </form>
</template>

<style scoped lang="scss">
.sign-in {
  label {
    display: block;
  }
  
  button,
  label {
    margin-top: 1rem;
  }

  &__actions {
    display: flex;
    justify-content: space-between;
  }
}
</style>