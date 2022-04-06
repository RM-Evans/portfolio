<script setup>
import ExperienceResume from './ExperienceResume.vue';
</script>
<template>
    <div id="experience-block">  
    
    
    <h2>Experience</h2>
    <ExperienceResume />
    <!-- <button>Learn More</button> -->
</div>
</template>

<style scoped>
#experience-block {
    text-align: start;
    padding: 20px 50px;
    /* min-height: 100vh; */
    font-size: 1.8vw;
}

#experience-block h2 {
    text-decoration: underline solid;
}

@media (max-width:1800px){
    .skill-list {
    font-size: 2.1vw;
}
#experience-block{
    font-size: 2.4vw;

}
}

@media (max-width:1000px){
    .skill-list {
    font-size: 18px;
}
#experience-block{
    font-size: 20px;

}
}
</style>