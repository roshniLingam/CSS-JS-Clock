function setDate(){
    const now=new Date();
    document.querySelector('.date').innerHTML='Today: '+now.toDateString();
    const sec=now.getSeconds();
    const secondsDegrees = ((sec/ 60) * 360) + 90;
    secHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((sec/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

const secHand = document.querySelector('.second');
const minsHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour');

setInterval(setDate, 1000);
setDate();