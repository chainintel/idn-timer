class Timer {
  startTime: number;
  stopTime: number;
  start() {
    this.startTime = performance.now();
  }
  stop() {
    this.stopTime = performance.now();
    return this.stopTime - this.startTime;
  }
}

export { Timer };
