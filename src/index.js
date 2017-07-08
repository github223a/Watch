class StopWatch {
  constructor(DomElement) {
    this.DomElement = DomElement;
    this.value = 0;
    this.pause = this.pause.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.tick = this.tick.bind(this);
    this.timerId = null;
    this.render();
  }

  start() {
    if (this.timerId) return;
    this.timerId = setInterval(this.tick, 1000);
  }

  tick() {
    this.value += 1;
    if (this.value >= 60) {
      this.value = 0;
    }
    this.rotate();
  }

  rotate() {
    const angleSeconds = this.value * 60 / 10;
    document.getElementById('seconds').style.transform = `rotateZ(${angleSeconds}deg)`;
  }

  pause() {
    clearInterval(this.timerId);
    this.timerId = null;
    this.rotate();
  }

  stop() {
    this.value = 0;
    clearInterval(this.timerId);
    this.timerId = null;
    this.rotate();
  }

  render() {
    const string = `<article id="clock" class="clock">
    <div class="seconds-container">
      <div id="seconds" class="seconds"></div>
    </div>
  </article>`;

    document.getElementById(this.DomElement).innerHTML = string;
  }
}

const watch = new StopWatch('root');
