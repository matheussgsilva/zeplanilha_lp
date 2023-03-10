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
const buyBtnHeader = document.querySelector("#buyBtnHeader");
const buyBtnMain = document.querySelector("#buyBtnMain");
const buyBtnFinal = document.querySelector("#buyBtnFinal");
const buyBtnMobile = document.querySelector("#buyBtnMobile");
const modalText = document.querySelectorAll(".modal-text");

const url = new URL(window.location);
const path = url.search;

window.onload = function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    }(window,document,'script','dataLayer','GTM-TCR5WHF');


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
    const dataUtm = {...data, 'utm':path}
    
    fetch('https://hook.us1.make.com/3a7l8yrhup3ac2c65ww4bdebgl424r6t', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataUtm)
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
  let success = document.querySelector("#successAlert");
  let close = document.querySelector("#closeAlert");
  let successParagraph = document.createElement("p");
  let alertParagraph = document.createElement("p");
  let textEmail = document.createTextNode("Seu email foi inserido com sucesso!");
  let textCloseModal = document.createTextNode("Voc?? j?? pode fechar essa janela e verificar o seu email.")
  successParagraph.appendChild(textEmail);
  success.appendChild(successParagraph);
  alertParagraph.appendChild(textCloseModal);
  close.appendChild(alertParagraph);
  hiddeModalText();
};

function hiddeModalText() {
  for(let i=0; i<modalText.length; i++){
    modalText[i].classList.add("hidden");
  }
};

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
    mybutton.classList.remove("sm:hidden");
    mybutton.classList.remove("xs:hidden");
    mybutton.classList.add("sm:inline-block");
    mybutton.classList.add("xs:inline-block");
  } else {
    mybutton.classList.remove("sm:inline-block");
    mybutton.classList.remove("xs:inline-block");
    mybutton.classList.add("sm:hidden");
    mybutton.classList.add("xs:hidden");
  }
};

buyBtnHeader.addEventListener("click", ()=> {
  if (path === "") {
    buyBtnHeader.setAttribute("href", "https://seguro.zeplanilha.com/r/ABE0WSGLNP?utm_source=direto&utm_campaign=direto")
  } else {
    buyBtnHeader.setAttribute("href", `https://seguro.zeplanilha.com/r/ABE0WSGLNP${path}`)
  }
});

buyBtnMain.addEventListener("click", ()=> {
  if (path === "") {
    buyBtnMain.setAttribute("href", "https://seguro.zeplanilha.com/r/ABE0WSGLNP?utm_source=direto&utm_campaign=direto")
  } else {
    buyBtnMain.setAttribute("href", `https://seguro.zeplanilha.com/r/ABE0WSGLNP${path}`)
  }
});

buyBtnFinal.addEventListener("click", ()=> {
  if (path === "") {
    buyBtnFinal.setAttribute("href", "https://seguro.zeplanilha.com/r/ABE0WSGLNP?utm_source=direto&utm_campaign=direto")
  } else {
    buyBtnFinal.setAttribute("href", `https://seguro.zeplanilha.com/r/ABE0WSGLNP${path}`)
  }
});

buyBtnMobile.addEventListener("click", ()=> {
  if (path === "") {
    buyBtnMobile.setAttribute("href", "https://seguro.zeplanilha.com/r/ABE0WSGLNP?utm_source=direto&utm_campaign=direto")
  } else {
    buyBtnMobile.setAttribute("href", `https://seguro.zeplanilha.com/r/ABE0WSGLNP${path}`)
  }
});