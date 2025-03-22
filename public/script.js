// About Me page

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


/* Side memu */
function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");    
    
}

// Close the menu when a nav link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("menu").classList.remove("show");        
    });
});


// Google spreadsheet

const scriptURL = 'https://script.google.com/macros/s/AKfycbzkitIlsJNm5mxvm8AvM8Rbw4BidneIP45_MBswE0Wdus5DRdh9BkyZIdJxgeaEA-JX/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})