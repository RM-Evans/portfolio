<script setup>
import Experience from "./Experience.vue"
</script>
<template>
    <!-- <p>HOME PAGE</p> -->
    <div class="landing">
<div id="landing-intro">
    <h2 id="landing-greeting">Hello!</h2>

    <h1 id="landing-name">I'm Michael Evans</h1>

    <h2 class="landing-skill">I am a <span class="semibold-text">Front End Developer</span> and <span class="semibold-text">Designer</span></h2>

    <!-- <h2 class="landing-skill">Designer</h2> -->
</div>
</div>

<Experience />

</template>

<style scoped>
.semibold-text {
    font-weight: 600;
}
.landing{
min-height: calc(100vh - 100px);
/* min-width: 100vw;
min-height: 100vh; */
border: red 1px solid;
padding: 0 30px;
}
#landing-intro{
display: flex;
flex-direction: column;
text-align: left;
font-size: 3.5vw;
/* 
padding: 5vw 10vw; */
}

#landing-greeting,
#landing-name {
    padding-bottom: 20px;
}



#landing-greeting {
    font-weight: 500;
}


#landing-name {
    font-weight: 700;
}

.landing-skill {
font-weight: 500;
padding-bottom: 10px;
}
</style>