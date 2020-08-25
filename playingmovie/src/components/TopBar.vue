<template>
    <div class="topnav">
        <router-link to="/" class='p-0 navbar-logo'>
          <img class="navbar-logo" src="../../public/img/mylogo.png" alt="mylogo">
        </router-link>
        <input class='filter' placeholder="Search">
    </div>
</template>

<style>
.filter {
  border: none;
  margin-right: 1rem;
}
input:focus{
  outline: none;
}
.topnav {
  background-color: rgba(255, 255, 255, .9);
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
  transform: scale(1.2);
}
</style>

