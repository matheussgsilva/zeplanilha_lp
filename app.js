import "./assets/app.css";
import "./src/js/faqs.js";
import "./src/js/solutions.js";
import 'flowbite';
import { Modal } from "flowbite";

const hamburger = document.querySelector("#hamburger");
const navbar = document.querySelector("#navbar");
const formDemo = document.querySelector("#formDemo");
const demoModal = document.querySelector("#authentication-modal");
const mybutton = document.querySelector("#btn-back-to-top");
const toast = document.querySelector("#toast-success");

const modal = new Modal(demoModal)

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("navbar-active");
});

formDemo.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(formDemo);
    const data = Object.fromEntries(formData);
    

    //https://hook.us1.make.com/3a7l8yrhup3ac2c65ww4bdebgl424r6t
    fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(alert(),
        toast.classList.remove("hidden"),
        closeModal()
    )
    .catch(error => console.log(error))    

})

function closeModal () {
    setTimeout(() => {
        toast.classList.add("hidden");
      }, "3000")
}

function alert() {
    let success = document.querySelector("#successAlert")
    let paragraph = document.createElement("p");
    let text = document.createTextNode("Sucesso!");
    paragraph.appendChild(text)
    success.appendChild(paragraph);
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 220 || document.documentElement.scrollTop > 220) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}
