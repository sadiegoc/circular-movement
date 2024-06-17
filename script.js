const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');

const px_m = 100; // densidade pixel / metro

const r1 = line1.clientWidth / 2;
const r2 = line2.clientWidth / 2;
const interval_frame = 10;
const fps = (1000 / interval_frame);
const angleFrame = (360 / fps);
const velAng = angleFrame * fps;

const convertToRad = function (angle) {
    return (Math.PI * angle) / 180;
}

function velLin (r) {
    return (convertToRad(velAng) * r);
}

function convertToMeter (px) {
    return (px / px_m);
}

console.log(`FPS: ${fps}`);
console.log(`Angle Frame: ${angleFrame}`);
console.log(`r1: ${r1}`);
console.log(`r2: ${r2}`);
console.log(`Velocidade angular: ${convertToRad(velAng).toFixed(2)}pi rad/s`);
console.log(`Velocidade linear 1: ${convertToMeter(velLin(r1)).toFixed(2)} m/s`);
console.log(`Velocidade linear 2: ${convertToMeter(velLin(r2)).toFixed(2)} m/s`);

let theta = 0;
const temp = setInterval(() => {
    // if (theta < 90) console.log(`Theta: ${theta}`);
    line1.style.transform = `rotate(${theta}deg)`;
    line2.style.transform = `rotate(-${theta}deg)`;
    theta += angleFrame;
}, interval_frame);