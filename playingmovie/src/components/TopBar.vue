<template>
    <div class="topnav">
        <a class="active" href="#home">Home</a>
        <a href="#news">News</a>
        <div class="dropdown">
        <span>Mouse over me</span>
        <div class="dropdown-content">
            <p>Hello World!</p>
        </div>
        </div>
        <a href="#about">About</a>
    </div>
</template>

<style>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
.topnav {
  background-color: rgba(255, 124, 124, 0.37);
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  border-radius: 0 0 10px 10px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
  background-color: #4CAF50;
  color: white;
}
</style>

