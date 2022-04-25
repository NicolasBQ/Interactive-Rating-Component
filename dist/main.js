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

document.addEventListener("click", selectRateNumer);
