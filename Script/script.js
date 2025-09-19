let elt = document.getElementById('aboutMyselfTitle')
let elt2 = document.getElementById('language')
let elt3 = document.getElementById('myProjects')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animation_entrance_2');
        } 
    });
});

observer.observe(elt);
observer.observe(elt2);
observer.observe(elt3);