const english = document.querySelector(".english");
const russian = document.querySelector(".russian");
const btnRu = document.querySelector(".btn_ru");
const btnEng = document.querySelector(".btn_eng");
const engBtnRu = document.querySelector(".eng_btn_ru");
const engBtnEng = document.querySelector(".eng_btn_eng");
const englishMain = document.querySelector(".english-main");
const russianMain = document.querySelector(".russian-main");
const englishFooter = document.querySelector(".english-footer");
const russianFooter = document.querySelector(".russian-footer");


btnEng.addEventListener("click", function (evt) {
  english.classList.add("current");
  russian.classList.remove("current");
  englishMain.classList.add("current");
  russianMain.classList.remove("current");
  englishFooter.classList.add("current");
  russianFooter.classList.remove("current");
});

engBtnRu.addEventListener("click", function (evt) {
  russian.classList.add("current");
  english.classList.remove("current");
  russianMain.classList.add("current");
  englishMain.classList.remove("current");
  russianFooter.classList.add("current");
  englishFooter.classList.remove("current");
});
