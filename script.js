/* heder toggle */
let menubtn = document.getElementById('menubtn')

menubtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

//typing effect
let typed = new Typed('.auto-input',{
    strings:['Web Developer!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop:true,
})

//Active link state on scrool

//get all links
let navlinks = document.querySelectorAll('nav ul li a')
//get all sections
let sections = document.querySelectorAll('section')
console.log(sections)

window.addEventListener('scroll', function (){
    const scrollPos = window.scrollY
    sections.forEach(section => {
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
            navlinks.forEach(link => {
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                }
            });
        }

    });
    
});


//projetcs
document.addEventListener("DOMContentLoaded", function() {
    const projectsContainer = document.getElementById('projects');
    const showMoreBtn = document.getElementById('show-more-btn');
    const projects = document.querySelectorAll('.project');
    const numProjectsToShow = 6;
    let currentDisplayIndex = numProjectsToShow;
  
    // Hide projects beyond the initial set
    projects.forEach((project, index) => {
      if (index >= numProjectsToShow) {
        project.style.display = 'none';
      }
    });
  
    // Show more projects when button clicked
    showMoreBtn.addEventListener('click', function() {
      const projectsToShow = Array.from(projects).slice(currentDisplayIndex, currentDisplayIndex + numProjectsToShow);
      projectsToShow.forEach(project => {
        project.style.display = 'block';
      });
  
      currentDisplayIndex += numProjectsToShow;
  
      // Hide "Show More" button if no more projects to show
      if (currentDisplayIndex >= projects.length) {
        showMoreBtn.style.display = 'none';
      }
    });
  });