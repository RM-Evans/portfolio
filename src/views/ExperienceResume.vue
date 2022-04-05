<script setup>
import { ref } from "vue"


const resumeItems = ref([
    {
        resumeEntryDate:"Jan 2021 - July 2021",
        resumeEntryDetails: "Attended University of Utah Full Stack Web Development Bootcamp.",
    },
    {
        resumeEntryDate:"Jan 2021 - Nov 2021", 
        resumeEntryDetails: "Participated in a private mentorship."
    },
    {
        resumeEntryDate:"July 2021 - Nov 2021", 
        resumeEntryDetails: "Developed React Native mobile application prototype for client, with mentorship guidance."
    }, 
    {
        resumeEntryDate:"Sept 2021 - Mar 2022", 
        resumeEntryDetails: "Frontend Developer and UI Designer at Everra."
    },
    // {
    //     resumeEntryDate:"Sept 2021 - Mar 2021", 
    //     resumeEntryDetails: ""
    // },
    // {
    //     resumeEntryDate:"Sept 2021 - Mar 2021", 
    //     resumeEntryDetails: ""
    // },
    // {
    //     resumeEntryDate:"Sept 2021 - Mar 2021", 
    //     resumeEntryDetails: ""
    // },
    // {
    //     resumeEntryDate:"Sept 2021 - Mar 2021", 
    //     resumeEntryDetails: ""
    // },
])
// Property "resumeItem" was accessed during render but is not defined on instance. 
</script>

<template>
    <li v-for="resumeItem in resumeItems" class="resume-items">
    <span class="resume-date">{{ resumeItem.resumeEntryDate }}: </span> {{ resumeItem.resumeEntryDetails }}
        </li>

</template>

<style scoped>
 .resume-items{
    text-align: start;
    padding: 30px;
    list-style: none;
    font-size: 18px;
} 

.resume-date {
    font-weight: bold;
}
</style>