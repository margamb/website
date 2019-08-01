/* clockKitCat */ 
const secHand = document.querySelector(".secondHandKitCat");
const minsHand = document.querySelector(".minuteHandKitCat");
const hoursHand = document.querySelector(".hourHandKitCat");

function setDate() {

    const now = new Date();

    
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 360; /* 360 es por los grados del circulo y 360 es por el transform: rotate(360deg); de la clase hand */
    secHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 3600;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;


    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 360;
    hoursHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000); /* cada segundo se actualice*/ 

setDate();