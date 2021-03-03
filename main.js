var nav = document.getElementById("nav");
var button = document.getElementById("ham");
var about = document.getElementById('nav-about');
var project = document.getElementById('nav-projects');
var contact = document.getElementById('nav-contact');


button.addEventListener('click', ()=>{
    if (nav.className === "show"){
        nav.className = "hide"
    } else{
        nav.className = "show"
    }
})

about.addEventListener('click', () => {
    nav.className = 'hide';
});

project.addEventListener('click', () => {
    nav.className = 'hide';
});

contact.addEventListener('click', () => {
    nav.className = 'hide';
});

