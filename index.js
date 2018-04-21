function produceDrivingRange(blockRange) {
  return function(start, end) {
    const travelDistance = Math.abs(end.match(/\d+/)[0] - start.match(/\d+/)[0]);
    const blockDifference = Math.abs(blockRange - travelDistance)
    return travelDistance < blockRange ? `within range by ${blockDifference}` : `${blockDifference} blocks out of range`;
  };
}

function produceTipCalculator(tipPercentage) {
  return function(billAmount) {
    return billAmount * tipPercentage;
  };
}

function createDriver() {
  let driverId = 0
  return class {
    constructor(name) {
      this.id = ++driverId;
      this.name = name;
    }

  }
}
const Driver = createDriver();
