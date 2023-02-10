import "./assets/app.css";
import "./src/js/faqs.js";
import "./src/js/theme.js";
import "./src/js/solutions.js";

const hamburger = document.querySelector("#hamburger");
const navbar = document.querySelector("#navbar");
const formDemo = document.querySelector("#formDemo");
const demoModal = document.querySelector("#authentication-modal");

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("navbar-active");
});

formDemo.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(formDemo);
    const data = Object.fromEntries(formData);

    fetch('https://hook.us1.make.com/3a7l8yrhup3ac2c65ww4bdebgl424r6t', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => console.log(data))

    demoModal.dia;
})
