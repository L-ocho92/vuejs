<template>
    <div v-for="Journeaux in journal" :key="Journeaux.contact">
        {{ Journeaux.contact.pseudo }}
        {{ Journeaux.contact.numero }}
    </div>
</template>
<script>
export default {
     computed: {
        journal(){
            return this.$store.state.journal
        }
     }
}
</script>
<style>
    
</style>