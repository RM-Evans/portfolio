<script setup>
import { ref } from "vue"


const resumeItems = ref([
    {
        resumeEntryDate:"Jan 2021 - July 2021",
        resumeEntryDetails: "University of Utah Full Stack Web Dev Bootcamp.",
    },
    {resumeEntryDate:"Jan 2021 - Nov 2021"},
    {resumeEntryDate:"July 2021 - Nov 2021"}, 
    {resumeEntryDate:"Sept 2021 - Mar 2021"}
])
// Property "resumeItem" was accessed during render but is not defined on instance. 
</script>

<template>
    <li v-for="resumeItem in resumeItems">
    {{ resumeItem.resumeEntryDate }}
        </li>

</template>

<style scoped>
/* .resume-dates{

} */
</style>