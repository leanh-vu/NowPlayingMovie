<template>
    <div class="topnav">
      <div class='logo-container'>
        <router-link to="/" class='p-0 navbar-logo'>
            <img class="navbar-logo" src="../../public/img/mylogo.png" alt="mylogo">
        </router-link>
        <div class='cinema-text'>
          CINEMA
        </div>
    </div>
    </div>
</template>

<style>
.logo-container {
  display: flex;
  align-items: center;
  border-radius: 10px;
  font-family:Arial, Helvetica, sans-serif;
}
.cinema-text {
  display: block;
  color: white;
  font-weight: bold;
  border: 2px solid;
  border-radius: 5px;
  padding: 0 0.5rem;
  height: fit-content;
  transition: .5s ease;
}
.filter {
  border: none;
  margin-right: 1rem;
}
input:focus{
  outline: none;
}
.topnav {
  background-color: rgba(255, 255, 255, 0);
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  border-radius: 0 0 5px 5px;
}
.m-0 {
  margin: 0
}
.p-0 {
  padding: 0!important
}
.navbar-logo {
  display: block;
  height: 5vh;
  transition: .5s ease;
  padding-left: 2rem;
}
.navbar-logo :hover{
  transform: scale(1.5);
}
</style>

