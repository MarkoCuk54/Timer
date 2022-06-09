class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        this.startButton.addEventListener("click", this.start);
        this.pauseButton.addEventListener("click", this.pause);
    }
    start = () => {
        this.tick();
        this.interval = setInterval(this.tick, 1000);
    };

    pause = () => {
        clearInterval(this.interval);
    };

    tick = () => {
        this.timeRemain = this.timeRemain - 1;
    };

    get timeRemain() {
        return parseFloat(this.durationInput.value);
    }
    set timeRemain(time) {
        this.durationInput.value = time;
    }
}

const duration = document.querySelector("#duration");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

const timer = new Timer(duration, start, stop);