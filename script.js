const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function setClock() {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours =  now.getHours();

    const secondsDeg = ((seconds / 60) * 360);
    const minutesDeg = ((minutes / 60) * 360) + ((seconds / 60) * 6);
    const hoursDeg = ((hours % 12) / 12 * 360) + ((minutes / 60) * 30);

    secondHand.style.transform = `translate(-50%, -100%) rotate(${secondsDeg}deg)`;
    minuteHand.style.transform = `translate(-50%, -100%) rotate(${minutesDeg}deg)`;
    hourHand.style.transform = `translate(-50%, -100%) rotate(${hoursDeg}deg)`;
}

setClock();
setInterval(setClock, 1000);