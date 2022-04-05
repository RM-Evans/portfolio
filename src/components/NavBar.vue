<script setup>

</script>

<template>
<header class="nav-bar">
    <!-- <img src="../assets/SIGNATURE.png" id="header-icon" > -->
    <h2 id="header-icon">Michael Evans</h2>

    <ul id="nav-link-container">
    <li class="nav-links"><router-link to="/" class="link-text">HOME</router-link></li>
    <li class="nav-links"><router-link to="About" class="link-text">ABOUT</router-link></li>
    </ul>
    <button class="hamburger-menu"><img src="../assets/menu_black_24dp.svg"></button>
<!-- 750px hamburger -->
    
</header>


</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
/* @import url('https://fonts.googleapis.com/css2?family=Alata&display=swap'); */
.nav-bar{
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    
}

#header-icon {
    /* height: 60px;
    padding: 10px; */
    padding: 30px 10px 0;
}

#nav-link-container{

    display: flex;
    list-style: none;
}



.nav-links {
    font-family: 'Alata', sans-serif;
    font-size: 25px;
    font-weight: bold;
    text-decoration: none;

    padding: 20px 30px;
}

.router-link{
    padding: 15px;
    text-decoration: none;
    color: black;
}

/* .link-text {

    background-color: #e9e9ff;
    transition: width 2s, height 2s, background-color 2s, transform 2s;
} */
.link-text:hover{
border-bottom: 3px black solid;

}

.link-text:visited {
color: black;
}

.router-link-exact-active {  
    
    border-bottom: 3px black solid;
}

.hamburger-menu {
    color: #000;
    border: solid black 1px;
    border: none;
    background:none;
    margin: 10px 10px 0;
    height: 70px;
    width: 70px;
    border-radius: 30%;
    cursor: pointer;

    
    
}
.hamburger-menu img {
    height: 40px;
    width: 40px;
}

@media (min-width: 800px) {
    .hamburger-menu {
        display: none;
}
}

@media (max-width:800px ){
#nav-link-container { 
display: none;
}
}



</style>