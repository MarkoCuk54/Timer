const duration = document.querySelector("#duration");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

const timer = new Timer(duration, start, stop, {
    onStart() {
        console.log("Timer started");
    },
    onTick() {
        console.log("Timer started ticking");
    },
    onComplete() {
        console.log("Timer finish");
    },
});