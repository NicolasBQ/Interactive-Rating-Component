const SEND_BUTTON = document.querySelector("[data-submit-button]");

const selectRateNumer = (e) => {
  let isRate = e.target.matches("[data-rate-button]");

  if (!isRate) return;

  const RATE_BUTTONS = document.querySelectorAll("[data-rate-button]");
  let currentRate;

  if (isRate) {
    currentRate = e.target;
    currentRate.classList.add("circle-container__selected");
  }

  RATE_BUTTONS.forEach((button) => {
    if (button === currentRate) return;

    button.classList.remove("circle-container__selected");
  });
};

const sendRate = () => {
  const RATE_CARD = document.querySelector("[data-rate-card]");
  const THANKS_CARD = document.querySelector("[data-thanks-section]");
  const SHOW_RATE = document.querySelector("[data-show-rate]");

  RATE_CARD.classList.add("card-disable");
  THANKS_CARD.classList.remove("card-disable");

  const RATE_BUTTONS = document.querySelectorAll("[data-rate-button]");

  RATE_BUTTONS.forEach((button) => {
    if (button.classList.contains("circle-container__selected")) {
      SHOW_RATE.textContent = button.dataset.rateButton;
    }
  });
};

document.addEventListener("click", selectRateNumer);
SEND_BUTTON.addEventListener("click", sendRate);
