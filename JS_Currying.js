const sum = (a) => (b) => (c) => (d) => a+b+c+d;

const add = sum(5)(10)(7)(3);
console.log(add);