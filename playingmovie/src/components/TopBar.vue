<template>
    <div class="topnav">
        <router-link to="/" class='p-0'>
          <img class="navbar-logo" src="../../public/img/mylogo.png" alt="mylogo">
        </router-link>
        <input class='filter' placeholder="Filter">
    </div>
</template>

<style>
.filter {
  border-radius: 10px;
  margin-right: 2rem;
}
.topnav {
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  border-radius: 0 0 10px 10px;
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
    height:28vh
}
</style>

