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


// To make the site return to the home page upon refresh
window.onload = function() {
    window.location.href = "#header";
};

// Google spreadsheet

// const scriptURL = 'https://script.google.com/macros/s/AKfycbzkitIlsJNm5mxvm8AvM8Rbw4BidneIP45_MBswE0Wdus5DRdh9BkyZIdJxgeaEA-JX/exec'
// const form = document.forms['submit-to-google-sheet']
// const msg = document.getElementById("msg")

// form.addEventListener('submit', e => {
//   e.preventDefault()
//   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//     .then(response => {
//         msg.innerHTML = "Message sent successfully"
//         setTimeout(function(){
//             msg.innerHTML = ""
//         },5000)
//         form.reset()
//     })
//     .catch(error => console.error('Error!', error.message))
// })


// Formspree submission

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form[name='submit-to-google-sheet']");
    const msg = document.getElementById("msg");    
    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent default form submission

        const formData = new FormData(form);

        // Send form data to Formspree
        fetch(form.action, {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json",
            },
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                msg.innerHTML = "Message sent successfully!";
                form.reset(); // Clear form inputs
            } else {
                msg.innerHTML = "Error sending message. Try again.";
            }

            // Hide message after 3 seconds
            setTimeout(() => {
                msg.innerHTML = "";
            }, 3000);
        })
        .catch(error => {
            console.error("Error:", error);
            msg.innerHTML = "Something went wrong. Please try again.";
        });
    });
});
