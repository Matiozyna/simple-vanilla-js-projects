class Clock {
    constructor() {
        this.hour = document.querySelector(".hour");
        this.minute = document.querySelector(".minute");
        this.second = document.querySelector(".second");
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
    }

    start() {
        setInterval(this.tick, 1000);
    }
    tick = () => {
        this.seconds++;
        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes++;
        }
        if (this.minutes === 60) {
            this.minutes = 0;
            this.hours++;
        }
        if (this.hours === 24) {
            this.hours = 0;
        }
        const secondsRotation = (360 / 60) * this.seconds;
        this.second.style = `transform: rotate(${secondsRotation}deg)`;
        const minutesRotation = (360 / 60) * this.minutes;
        this.minute.style = `transform: rotate(${minutesRotation}deg)`;
        const hoursRotation = (360 / 24) * this.hours;
        this.hour.style = `transform: rotate(${hoursRotation}deg)`;
    };
}

const clock = new Clock();
clock.start();
