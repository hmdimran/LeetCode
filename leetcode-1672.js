const numbers = [
  [50, 8, 6],
  [45, 87, 96],
];

const big = numbers.reduce((pre, current) => {
  const nested = current.reduce((pre2, current2) => {
    return pre2 + current2;
  }, 0);
  if (pre > nested) {
    return pre;
  } else {
    return nested;
  }
}, 0);
console.log(big);
