document.addEventListener("DOMContentLoaded", function() {
    const orbit = document.querySelector('.orbit');
    const banner = document.querySelector('.banner');
    const header = document.querySelector('.top-header');
    const table = document.querySelector('.timetable');
    const arrow = document.querySelector('.arrow');
    const menu = document.querySelector('.menu');
    const info = document.querySelector('.info-responsive');
    const link = document.querySelector('.nav-bar');
    const interior = document.querySelector('.interior-menu');
    const media = document.querySelector('.map-col');

    let click;

    // Event listeners for mouse events
    orbit.addEventListener('mousedown', () => {
        click = setTimeout(() => {
            orbit.classList.add('night');
            banner.classList.add('night');
            header.classList.add('night');
            table.classList.add('night');
            arrow.classList.add('night');
            menu.classList.add('night');
            info.classList.add('night');
            link.classList.add('night');
            interior.classList.add('night');
            media.classList.add('night');
        }, 1000);
    });
});

function validate() { 
    let name = 
        document.getElementById("name").value; 
    let subject = 
        document.getElementById("subject").value; 
    let phone = 
        document.getElementById("phone").value; 
    let email = 
        document.getElementById("email").value; 
    let message = 
        document.getElementById("message").value; 
    let error_message = 
        document.getElementById("error_message"); 
  
    error_message.style.padding = "10px"; 
  
    let errors = []; 
  
    if (name.length < 5) { 
        errors.push("Please Enter a valid Name");} 
    if (subject.length < 10) { 
        errors.push("Please Enter a Correct Subject");} 
    if (isNaN(phone) || phone.length != 10) { 
        errors.push("Please Enter a valid Phone Number");} 
    if (email.indexOf("@") == -1 || email.length < 6) { 
        errors.push( 
            "Please Enter a valid Email");} 
    if (message.length <= 40) { 
        errors.push( 
            "Please Enter More Than 40 Characters");} 
  
    if (errors.length > 0) { 
        error_message.innerHTML = 
            errors.join("<br>"); 
        return false;} 
    else { 
        alert( 
            "Form Submitted Successfully!"); 
        return true;}}