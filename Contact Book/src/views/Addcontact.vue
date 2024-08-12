<template>
  <div>
    <h1>Add New Contact</h1>
    <form @submit.prevent="addContact">
      <div>
        <label for="firstName">First Name:</label>
        <input v-model="contact.firstName" type="text" id="firstName" required />
      </div>
      <div>
        <label for="lastName">Last Name:</label>
        <input v-model="contact.lastName" type="text" id="lastName" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input v-model="contact.email" type="email" id="email" required />
      </div>
      <button type="submit">Add Contact</button>
    </form>
    <router-link to="/">Back to Contact List</router-link>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
  setup() {
    const contact = ref({
      firstName: '',
      lastName: '',
      email: ''
    });
    const router = useRouter();
    const addContact = () => {
    const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    const newContact = {
        ...contact.value,
        id: new Date().toISOString()
      };
      contacts.push(newContact);
      localStorage.setItem('contacts', JSON.stringify(contacts));
      router.push('/');
    };
    return { contact, addContact };
  }
};
</script>

<style scoped>

</style>