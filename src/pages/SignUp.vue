<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

interface Form {
  username: string;
  email: string;
  password: string;
  confirmPassword: string
}

const router = useRouter();

const form = ref<Form>({
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
});

const onSignIn = (): void => {
  router.push({ name: 'sign-in' });
};

const onSubmit = (): void => {
  alert(`Username: ${form.value.username} \nEmail: ${form.value.email} \nPassword: ${form.value.password} \nConfirm Password: ${form.value.confirmPassword}`);
};
</script>

<template>
  <form
    class="sign-up"
    @submit="onSubmit"
  >
    <div>
      <label for="username">Username:</label>
      <input
        id="username"
        v-model="form.username"
        type="text"
        name="username"
        required
        minlength="3"
      >
    </div>

    <div>
      <label for="email">E-mail:</label>
      <input
        id="email"
        v-model="form.email"
        type="email"
        name="email"
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

      <label for="confirm-pass">Confirm Password:</label>
      <input
        id="confirm-pass"
        v-model="form.confirmPassword"
        type="password"
        name="password"
        minlength="8"
        required
      >
    </div>

    <div class="sign-up__actions">
      <button
        type="button"
        @click="onSignIn"
      >
        Sign In
      </button>
      <button type="submit">
        Submit
      </button>
    </div>
  </form>
</template>

<style scoped lang="scss">
.sign-up {
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