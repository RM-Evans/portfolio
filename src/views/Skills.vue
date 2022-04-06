<script setup>
import { ref } from "vue"
import { Icon } from '@iconify/vue';

const coreSkills = ref([
    {skill:"Javascript"}, {skill:"HTML"}, {skill:"CSS"},
])

const frameworkSkills = ref([
    {skill:"Vue"},{skill:"Nuxt"},{skill:"React"},{skill:"React Native"},{skill:"Node.js"},{skill:"Tailwind"}
])
</script>

<template>
    <div id="skills-block">  
    <h2>Skills and Proficiencies</h2>

    <ul class="skill-list">
        <h3>Core</h3>
        <li v-for="coreSkill in coreSkills"><span class="list-style"></span>{{coreSkill.skill}}</li>
    </ul>
    <!-- <Icon icon="akar-icons:circle" /> -->
    <ul class="skill-list">
        <h3>Frameworks</h3>
        <li v-for="frameworkSkill in frameworkSkills">{{frameworkSkill.skill}}</li>
    </ul>
    </div>
</template>

<style scoped>
#skills-block {
    text-align: start;
    padding: 30px 50px;
    font-size: 1.8vw;
}

#skills-block h2 {
    text-decoration: underline solid;
}
.skill-list {
    list-style: circle;
    font-size: 1.5vw;
    padding-top: 30px;
}

.skill-list li {
    list-style-position: inside;
    padding-top: 10px;
    margin-left: 2px;
}

/* .list-style svg {
    height: 10px;
    width: 10px;
    padding: 0 10px 0 0;
} */

@media (max-width:1800px){
    .skill-list {
    font-size: 2.1vw;
}
#skills-block{
    font-size: 2.4vw;

}
}

@media (max-width:1000px){
    .skill-list {
    font-size: 18px;
}
#skills-block{
    font-size: 20px;

}
}

</style>