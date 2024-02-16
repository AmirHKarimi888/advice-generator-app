import httpService from "./httpService/index.js";
const adviceCardEl = document.querySelector(".advice-card");
const spinnerEl = document.querySelector(".spinner");
const adviceTitleEl = document.querySelector("#adviceCardId");
const adviceTextEl = document.querySelector("#adviceCardText");
const adviceGeneratorBtnEl = document.querySelector("#adviceCardBtn");
let advice = {
    id: "",
    advice: ""
};
const getAdvice = async () => {
    await httpService.get(httpService.url + "advice")
        .then((res) => res.json())
        .then((data) => advice = data?.slip);
};
const showAdvice = async () => {
    await getAdvice()
        .then(() => {
        adviceCardEl.style.display = "none";
        spinnerEl.style.display = "block";
        adviceTitleEl.innerHTML = "";
        adviceTextEl.innerHTML = "";
    })
        .then(() => {
        adviceTitleEl.innerHTML = advice.id;
        adviceTextEl.innerHTML = advice.advice;
        adviceCardEl.style.display = "block";
        spinnerEl.style.display = "none";
    });
};
//While the DOM mounted
await showAdvice();
//While the button clicked
adviceGeneratorBtnEl.addEventListener("click", async () => {
    await showAdvice();
});
