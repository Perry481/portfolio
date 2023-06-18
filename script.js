"use strict";
const menu = document.querySelector("#menu-bars");

const header = document.querySelector("header");
const navLink = document.querySelectorAll(".nav-link");
const navBar = document.querySelector(".navbar");

//Menu style
menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
});

window.onscroll = () => {
  menu.classList.remove("fa-times");
  header.classList.remove("active");
};

const hoverAction = function (e) {
  if (e.target.classList.contains("nav-link")) {
    const link = e.target;
    const siblings = link.closest(".navbar").querySelectorAll(".nav-link");
    console.log(siblings);

    const opacityValue = this;
    siblings.forEach(function (e) {
      if (e !== link) {
        e.style.opacity = opacityValue;
        console.log(opacityValue);
      }
    });
  }
};

navBar.addEventListener("mouseover", hoverAction.bind(0.3));

navBar.addEventListener("mouseout", hoverAction.bind(1));

//email section
const sendMail = function () {
  const params = {
    from_name: document.getElementById("fullName").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_azba5q7", "template_8qylpig", params)
    .then(function (res) {
      alert("Success! Thank You For Contacting Me!" + res.status);
    });
};
