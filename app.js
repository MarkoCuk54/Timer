class Timer {
    constructor(durationInput, startButton, pauseButton, callback) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        this.startButton.addEventListener("click", this.start);
        this.pauseButton.addEventListener("click", this.pause);
        if (callback) {
            this.onStart = callback.onStart;
            this.onTick = callback.onTick;
            this.onComplete = callback.onComplete;
        }
    }
    start = () => {
        if (this.onStart) {
            this.onStart();
        }
        this.tick();
        this.interval = setInterval(this.tick, 1000);
    };

    pause = () => {
        clearInterval(this.interval);
    };

    tick = () => {
        if (this.timeRemain <= 0) {
            this.pause();
            if (this.onComplete) {
                this.onComplete();
            }
        } else {
            this.timeRemain = this.timeRemain - 1;
            if (this.onTick) {
                this.onTick();
            }
        }
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