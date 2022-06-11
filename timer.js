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
            this.onStart(this.timeRemain);
        }
        this.tick();
        this.interval = setInterval(this.tick, 20);
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
            this.timeRemain = this.timeRemain - 0.02;
            if (this.onTick) {
                this.onTick(this.timeRemain);
            }
        }
    };

    get timeRemain() {
        return parseFloat(this.durationInput.value);
    }
    set timeRemain(time) {
        this.durationInput.value = time.toFixed(2);
    }
}