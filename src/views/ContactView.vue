<template >
    <div v-for="contact in contacts" :key="contact.pseudo" class="contact">
      
        <h2> {{ contact.pseudo }}</h2>
        <span> {{ contact.peuso }}</span>
        <button @click="ajoutJournal(contact)">Appuyez</button>
    </div>
</template>
<script>

export default {
    name:'ContactView',
    computed:{
        contacts(){
            return this.$store.state.contacts
        }
    },
    methods: {
        ajoutJournal(contact) {
            this.$store.commit ('ajoutJournal',{
            contact,Date
            })
        }
    }
}
</script>
<style>
    
</style>