const button = document.querySelector(".shere-icon");
const socialLink = document.querySelector(".social-links");

button.addEventListener("click", () => {
  socialLink.classList.toggle("active");

  if (button.classList.contains("shere-active")) {
    button.classList.remove("shere-active, shere-active-img");
  } else {
    button.classList.add("shere-active, shere-active-img");
  }
});
