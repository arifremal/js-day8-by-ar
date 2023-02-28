function kitchen() {
  let roast = 0;
  return function () {
    roast++;
    return roast;
  };
}
const first = kitchen();
console.log(first());
function stop() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}
