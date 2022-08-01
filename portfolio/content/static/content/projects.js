document.addEventListener('DOMContentLoaded', function() {
    show_all()
});

function show_all() {
    const highlightedItems = document.querySelectorAll(".proj");
    highlightedItems.forEach(function(project) {
    project.style.display = "block";
    });
    const otherhighlightedItems = document.querySelectorAll(".display-select");
    otherhighlightedItems.forEach(function(project) {
    if (project.id === "all"){
        project.style.borderBottom="3px solid red";        
    } else {
        project.style.borderBottom="none";        
        project.style.textDecoration = "none";
    }
    }); 
}

function show_web() {
    const highlightedItems = document.querySelectorAll(".proj");
    highlightedItems.forEach(function(project) {
    if (project.classList.contains('web')){
        project.style.display = "block";
    } else {
        project.style.display = "none"; 
    }
    });
    const otherhighlightedItems = document.querySelectorAll(".display-select");
    otherhighlightedItems.forEach(function(project) {
    if (project.id === "web"){
        project.style.borderBottom="3px solid red";        
    } else {
        project.style.borderBottom="none";        
        project.style.textDecoration = "none";
    }
    }); 
}

function show_python() {
    const highlightedItems = document.querySelectorAll(".proj");
    highlightedItems.forEach(function(project) {
    if (project.classList.contains('python')){
        project.style.display = "block";
    } else {
        project.style.display = "none"; 
    }
    });
    const otherhighlightedItems = document.querySelectorAll(".display-select");
    otherhighlightedItems.forEach(function(project) {
    if (project.id === "python"){
        project.style.borderBottom="3px solid red";        
    } else {
        project.style.borderBottom="none";        
        project.style.textDecoration = "none";
    }
    }); 
}