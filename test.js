let T = 3660;
if (T >= 3600) {
  var H = parseInt(T / 3600);
  T = T % 3600;
  console.log(H);
}
if (T >= 60) {
  M = parseInt(T / 60);
  T = T % 60;
  console.log(M);
} else {
  S = T;
}

// console.log(H);
// console.log(M);
