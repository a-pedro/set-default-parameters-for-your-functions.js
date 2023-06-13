// Only change code below this line
const increment = (function(){
  return function increment (number, value = 1){
    return number + value;
  };
})();



console.log(increment(5));
console.log(increment());
// Only change code above this line