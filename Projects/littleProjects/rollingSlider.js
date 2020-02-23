const input = document.querySelector("#inputSlider");
const label = document.querySelector("#labelSlider");

input.addEventListener("input", event => {
    const value = Number(input.value) / 100;

   /*rotate*/
    input.style.setProperty("--thumb-rotate", `${value * 720}deg`); 
    

    label.innerHTML = Math.round(value * 50); // I put 50, the line count from 0 to 50 (100)
}); 