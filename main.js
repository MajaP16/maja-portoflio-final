document.addEventListener("DOMContentLoaded", function () {
  // Send message via mailto
  window.sendMessage = function (event) {
    event.preventDefault();

    const nameInput = document.getElementById("userName");
    const emailInput = document.getElementById("userEmail");
    const messageInput = document.getElementById("userMessage");

    if (!nameInput || !emailInput || !messageInput) {
      console.warn("Form fields not found.");
      return;
    }

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    const mailtoLink =
      `mailto:petrova.maja16@gmail.com` +
      `?subject=Message from ${encodeURIComponent(name)}` +
      `&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      )}`;

    window.location.href = mailtoLink;
    closePopup();
  };

  const popupContainer = document.querySelector(".popup-form-contaienr");
  const openBtn = document.querySelector(".get-in-touch");

  if (openBtn && popupContainer) {
    openBtn.addEventListener("click", function () {
      popupContainer.classList.add("js-popup-form");
    });

    popupContainer.addEventListener("click", function (event) {
      if (!event.target.closest(".popup")) {
        closePopup();
      }
    });
  }

  function closePopup() {
    if (popupContainer) {
      popupContainer.classList.remove("js-popup-form");
    }
  }

  window.closePopup = closePopup;

  // ESC key closes popup
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closePopup();
    }
  });
});
let timeoutId;
const imgHover = document.querySelector(".home-hover");
const mainH1 = document.querySelector("#main-h1");
mainH1.addEventListener("mouseover", function (e) {
  imgHover.classList.add('js-img-hover')
  timeoutId = setTimeout(() => {
    imgHover.classList.remove('js-img-hover');
  }, 3000);
});
