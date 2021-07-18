<template>
  <header class="header">
<router-link to="/">
<h1><span>Movie</span>Theater </h1>
</router-link>
    <nav class="header__menu">
      <router-link to="/" class="header__link">Home</router-link>
      <router-link to="/about" class="header__link">About</router-link>
      <router-link to="/contact" class="header__link">Contact</router-link>

    </nav>
  </header>
</template>
<style lang="scss">
* {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: 'Fira Sans', sans-serif;

&::selection {
  background:transparentize(#42b883, 0.5);
}
}
body {
background-color:#AEB6BF;
}
a{
 text-decoration:none; 
}
.header{
  display:flex;
  justify-content: space-between;
  padding: 30px 40px;
  background-color: #fff;
  box-shadow: 0px 0px 6px rgba(0,0,0,0.1);
  
  flex-grow: 1;
  min-height: 80px;
  flex-direction: row;
  align-items: stretch;
  
  &__menu {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  &__link {
    margin: 0 20px;
    padding: 10px 20px;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;

    border-radius: 6px;
    background-color: transparent;

    color:  rgb(197, 18, 18);
    text-decoration: none;
    text-transform: uppercase;

    transition: background-color 0.4s ease-out;

    &:hover {
      color: darken( rgb(197, 18, 18), 20%);
      text-decoration: underline;
    }

    &.router-link-active {
      background-color: darken( rgb(197, 18, 18), 20%);
      color: white;
    }
  }}

  h1{
 color:rgb(48, 43, 43);
 font-size:28px;
     span{
       color:#cc2323;
     }
     
  }
  .menu{
  display:inline-block;
  padding-left: 25px;

  }
</style>
