// Utility functions for booking logic

export function seedRandom(seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
}

export function fetchAPI(date) {
  let result = [];
  let random = seedRandom(date.getDate());
  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() > 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
}

export function submitAPI(formData) {
  return true;
}
