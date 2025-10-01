let elt = document.getElementById("aboutMyselfTitle");
let elt2 = document.getElementById("language");
let elt3 = document.getElementById("myProjects");
let elt4 = document.getElementById("animaDiv");
let elt5 = document.getElementById("welcomeDiv");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animation_entrance_2");
    }
  });
});

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("dedans");
      entry.target.classList.add("-translate-y-1000");
      entry.target.classList.add("duration-3000");
    }
  });
});

function delayAnimation(value, classe) {
  setTimeout(() => {
    value.classList.add(classe);
    value.classList.remove("hidden");
  }, 700);
}

function onStart() {
  delayAnimation(elt5, "animation_entrance");
  observer.observe(elt);
  observer.observe(elt2);
  observer.observe(elt3);
  observer2.observe(elt4);
}

onStart();
