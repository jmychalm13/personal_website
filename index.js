/* eslint-disable camelcase */
const open_btn = document.querySelector(".open-btn");
const close_btn = document.querySelector(".close-btn");
const nav = document.querySelectorAll(".nav");
const dropdown = document.getElementById("dropdown");
const projects = document.getElementById("projects");

dropdown.addEventListener("click", () => {
  projects.classList.toggle("hidden");
});

open_btn.addEventListener("click", () => {
  nav.forEach((nav_el) => nav_el.classList.add("visible"));
});

close_btn.addEventListener("click", () => {
  nav.forEach((nav_el) => nav_el.classList.remove("visible"));
});
