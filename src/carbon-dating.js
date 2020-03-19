const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  if(typeof sampleActivity === 'string') {
    if(!/^[0-9]*[\.]{0,1}[0-9]*[\.]{0,1}[0-9]*$/.test(sampleActivity)) {
      return false;
    }

    const progress = parseFloat(sampleActivity.match(/^[0-9]*[\.]{0,1}[0-9]*/));

    if (progress > 0 && progress < 15) {
      return Math.ceil((Math.log(MODERN_ACTIVITY / progress) * HALF_LIFE_PERIOD) / .693);
    }
  }

  return false;

};
