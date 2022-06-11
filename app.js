const duration = document.querySelector("#duration");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const circle = document.querySelector("circle");

const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);

let currentoffset = 0;

const timer = new Timer(duration, start, stop, {
    onStart() {
        console.log("Timer started");
    },
    onTick() {
        circle.setAttribute("stroke-dashoffset", currentoffset);
        currentoffset -= 1;
    },
    onComplete() {
        console.log("Timer finish");
    },
});