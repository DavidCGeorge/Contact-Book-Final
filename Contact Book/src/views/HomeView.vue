<template>
  <div>
    <h1>Contact List</h1>
    <div>
      <input v-model="searchQuery" placeholder="Search contacts..." />
    </div>
    <div v-if="sortedContacts.length">
      <ul>
        <li v-for="contact in sortedContacts" :key="contact.id">
          <router-link :to="`/viewcontact/${contact.id}`">
            {{ contact.firstName }} {{ contact.lastName }}
          </router-link>
          <button @click="deleteContact(contact.id)">Delete</button>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No contacts found.</p>
    </div>

    <router-link to="/addcontact">Add New Contact</router-link>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
export default {
  setup() {
   const contacts = ref([]);
   const searchQuery = ref('');
    onMounted(() => {
      contacts.value = JSON.parse(localStorage.getItem('contacts') || '[]');
    });

    const deleteContact = (id) => {
      const updatedContacts = contacts.value.filter(contact => contact.id !== id);
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));
      contacts.value = updatedContacts; 
    };

    const searchContacts = computed(() => {
      const query = searchQuery.value.toLowerCase();
      return contacts.value.filter(contact =>
        contact.firstName.toLowerCase().includes(query) ||
        contact.lastName.toLowerCase().includes(query)
      );
    });

    const sortedContacts = computed(() => {
      return searchContacts.value.sort((a, b) => {
        if (a.lastName < b.lastName) return -1;
        if (a.lastName > b.lastName) return 1;
        return 0;
      });
    });

    return { contacts, searchQuery, deleteContact, sortedContacts };
  }
};
</script>

<style scoped>
button {
  color: rgb(81, 0, 255);
}
</style>