import "./assets/app.css";
import "./src/js/faqs.js";
import "./src/js/solutions.js";
import 'flowbite';

const hamburger = document.querySelector("#hamburger");
const navbar = document.querySelector("#navbar");
const formDemo = document.querySelector("#formDemo");
const mybutton = document.querySelector("#buyButton");
const modalButton = document.querySelector("#modalButton");
const mockup = document.querySelector("#videoMockup");
const video = document.querySelector("#videoDemo");

mockup.addEventListener("click", () => {
  video.classList.remove("hidden");
  mockup.classList.add("hidden");
})

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
    .then(alert(),
        disableButton()
    )
    .catch(error => console.log(error))    

})

function disableButton() {
  modalButton.classList.add("cursor-not-allowed");
  modalButton.setAttribute("disabled", "disabled");
}

function alert() {
    let success = document.querySelector("#successAlert")
    let paragraph = document.createElement("p");
    let textEmail = document.createTextNode("Seu email foi inserido com sucesso! Você já pode fechar essa janela e verificar o seu email.");
    paragraph.appendChild(textEmail);
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


