const qoute = document.querySelector(".qoute");
const eBtn = document.querySelector(".english");
const aBtn = document.querySelector(".arabic");
const auther = document.querySelector(".auther");
const article = document.querySelector("article ");
async function fetchDataA() {
  try {
    const response = await fetch("arabic_Q_modified.json");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json = await response.json();

    let num = Math.floor(Math.random() * json.length);
    qoute.textContent = json[num].quote;
    auther.textContent = `- ${json[num].author} -`;
  } catch (error) {
    console.error("حدث خطأ أثناء جلب البيانات:", error);
  }
}

async function fetchDataE() {
  try {
    const response = await fetch("quoteso.json");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json = await response.json();
    let num = Math.floor(Math.random() * json.length);
    qoute.textContent = json[num].quote;
    auther.textContent = `- ${json[num].author} -`;
  } catch (error) {
    console.error("حدث خطأ أثناء جلب البيانات:", error);
  }
}

console.log(qoute);
console.log(aBtn);
console.log(eBtn);

aBtn.addEventListener("click", () => {
  fetchDataA();
  article.classList.add("ar");
  document.querySelector(".loader").style.cssText = "display:none;";
});
eBtn.addEventListener("click", () => {
  article.classList.remove("ar");
  document.querySelector(".loader").style.cssText = "display:none;";
  fetchDataE();
});
