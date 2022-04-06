<script setup>
import Experience from "./Experience.vue"
import { Icon } from '@iconify/vue';
import Skills from "./Skills.vue";

</script>
<template>
    <!-- <p>HOME PAGE</p> -->
    <div class="landing">
<div id="landing-intro">
    <h2 id="landing-greeting">Hello!</h2>

    <h2 id="landing-name">I'm Michael Evans</h2>

    <h2 class="landing-skill">I am a <span class="semibold-text">Front End Developer</span> and <span class="semibold-text">Designer</span></h2>

    <!-- <h2 class="landing-skill">Designer</h2> -->
    <div id="social-icon-container">
        <a class="social-icon" href="https://linkedin.com/in/richard-michael-evans"><Icon icon="jam:linkedin-square" /></a>
        <a class="social-icon" href="https://github.com/RM-Evans"><Icon icon="foundation:social-github" /></a>
        <a class="social-icon" href="https://www.instagram.com/michaelucky13/"><Icon icon="akar-icons:instagram-fill" /></a>
    </div>
</div>
</div>
<Skills />
<Experience />

</template>

<style scoped>
.semibold-text {
    font-weight: 600;
}
.landing{
/* min-height: calc(100vh - 100px); */

/* border: red 1px solid; */
padding: 20px 50px 20px  ;
}

#landing-intro{
display: flex;
flex-direction: column;
text-align: left;
font-size: 3vw;

}




#landing-greeting {
    font-weight: 500;
    padding: 20px 0;
}


#landing-name {
    font-weight: 500;
    padding-bottom: 40px;
}

.landing-skill {
font-weight: 500;
line-height: 1.69em;
}

#social-icon-container {
    display: flex;

    justify-content: space-around;
    padding: 150px 0 0;
    /* border: red 1px solid; */

}

#social-icon-container a,
#social-icon-container a:visited  {
    color: #202124;
}
.social-icon svg {
    /* border: red 1px solid; */
    width: 11vw;
    height: 11vw;
}

@media (min-width:1000px) {
    #social-icon-container {
    padding: 200px 0 0;
}
}

@media (max-width:850px) {
    #social-icon-container {
    padding: 20vh 0 0;
}}


@media (max-width:700px){
#landing-intro{
    font-size: 5vw;
}
.social-icon svg {
    /* border: red 1px solid; */
    width: 20vw;
    height: 20vw;

}
    #social-icon-container {
    padding: 12vh 0 0;
}
}

@media (min-width:1400px) {
    #social-icon-container {
    padding: 50px 0 0;
}}

@media (max-width:450px) {
    #social-icon-container {
    padding: 20vh 0 0;
}
.landing{
min-height: calc(100vh - 100px);

}
}


</style>