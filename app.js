const duration = document.querySelector("#duration");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const circle = document.querySelector("circle");

const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);

let totalDuration;
const timer = new Timer(duration, start, stop, {
    onStart(total) {
        totalDuration = total;
    },
    onTick(timeRemain) {
        circle.setAttribute(
            "stroke-dashoffset",
            (perimeter * timeRemain) / totalDuration - perimeter
        );
    },
    onComplete() {
        console.log("Timer finish");
    },
});