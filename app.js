class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        this.startButton.addEventListener("click", this.start);
    }
    start = () => {};
}

const duration = document.querySelector("#duration");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

const timer = new Timer(duration, start, stop);