var kinet = new Kinet({
  acceleration: 0.05,
  friction: 0.20,
  names: ["x", "y"],
});

var circle = document.getElementById('circle');

var cards = document.querySelectorAll('.card');

var grid = document.querySelector('.grid-container');

cards.forEach(card => {
    card.addEventListener("mouseenter", function(){
        circle.classList.add("hovering")
    });
    
    card.addEventListener("mouseleave", function(){
        circle.classList.remove("hovering")
    });
});

kinet.on('tick', function(instances) {
    if (circle.classList.contains("hovering")){
        circle.style.transform = `translate3d( calc(${ (instances.x.current) }px), calc(${ (instances.y.current) }px), 0) rotateX(${ (instances.x.velocity/2) }deg) rotateY(${ (instances.y.velocity/2) }deg)`;
    }else{
        circle.style.transform = `translate3d( calc(${ (instances.x.current) }px + 10px), calc(${ (instances.y.current) }px + 10px), 0) rotateX(${ (instances.x.velocity/2) }deg) rotateY(${ (instances.y.velocity/2) }deg)`;
    }
});

document.addEventListener('mousemove', function (event) {
    kinet.animate('x', event.clientX - window.innerWidth/2);
    kinet.animate('y', event.clientY - window.innerHeight/2);
});

const aboutSection = document.querySelector(".about-section");
const contactsSection = document.querySelector(".contacts-section");
const projectsSection = document.querySelector(".projects-section");

cards.forEach(card => {
    card.addEventListener("click", function(){
        
        switch (card.classList[1]) {
            case "about":
                grid.classList.add("hidden");
                grid.classList.remove("show");
                gridHide();
                aboutSection.classList.add("show");
                
                break;
            case "contacts":
                grid.classList.add("hidden");
                grid.classList.remove("show");
                gridHide();
                contactsSection.classList.add("show");
                
                break;
            case "projects2":
                grid.classList.add("hidden");
                grid.classList.remove("show");
                gridHide();
                projectsSection.classList.add("show");
                
            break;
        }
    })

})

function gridHide(){
    let timeout = setTimeout(function(){
        grid.style.display = "none";
        stopGridHide()
        function stopGridHide(){
            clearTimeout(timeout);
        }
    }, 300);
}

backSectionButtons = document.querySelectorAll(".back-button-section");

backSectionButtons.forEach(button => {
    button.addEventListener("click", function(){
        grid.classList.remove("hidden");
        grid.classList.add("show");

        aboutSection.classList.remove("show")
        contactsSection.classList.remove("show")
        projectsSection.classList.remove("show")
    })
});


$( ".button_sm_inner" ).mouseenter(function(e) {
    var parentOffset = $(this).offset(); 
   
    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".sm_button_circle").css({"left": relX, "top": relY });
    $(this).prev(".sm_button_circle").removeClass("desplode-circle");
    $(this).prev(".sm_button_circle").addClass("explode-circle");
 
 });
 
 $( ".button_sm_inner" ).mouseleave(function(e) {
 
      var parentOffset = $(this).offset(); 
 
      var relX = e.pageX - parentOffset.left;
      var relY = e.pageY - parentOffset.top;
      $(this).prev(".sm_button_circle").css({"left": relX, "top": relY });
      $(this).prev(".sm_button_circle").removeClass("explode-circle");
      $(this).prev(".sm_button_circle").addClass("desplode-circle");
 
 });

let myMail = document.getElementById("myMail");

myMail.addEventListener("click", function(){

    const copyText = "salvatore.milone@outlook.it";
    navigator.clipboard.writeText(copyText);
    alert("Copied: " + copyText);

});