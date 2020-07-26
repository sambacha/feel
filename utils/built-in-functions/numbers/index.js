
/**
 * Gaussian rounding (aka Banker's rounding) is a method of statistically
 * unbiased rounding. It ensures against bias when rounding at x.5 by
 * rounding x.5 towards the nearest even number. Regular rounding has a
 * built-in upwards bias.
 */
function gaussianRound(x) {
  const absolute = Math.abs(x);
  const sign = x === 0 ? 0 : (x < 0 ? -1 : 1);
  const floored = Math.floor(absolute);
  if (absolute - floored !== 0.5) {
    return Math.round(absolute) * sign;
  }
  if (floored % 2 === 1) {
    // Closest even is up.
    return Math.ceil(absolute) * sign;
  }
  // Closest even is down.
  return floored * sign;
}

const decimal = (n, scale) => {
  if (scale > 0) {
    return Number.parseFloat(n.toFixed(scale));
  } if (scale === 0) {
    return gaussianRound(n);
  }

  throw new Error(`Invalid argument given for scale:${scale}`);
};

const floor = (n) => Math.floor(n);

const ceiling = (n) => Math.ceil(n);

const number = (text, groupingSeperator, decimalSeperator) => {
  let num = text.replace(groupingSeperator, '');
  num = num.replace(decimalSeperator, '.');
  return Number.parseFloat(num);
};

module.exports = {
  decimal,
  floor,
  ceiling,
  number,
};
