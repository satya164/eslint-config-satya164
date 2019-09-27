export default function fizzbuzz() {
  for (var i = 1; i < 101; i++) {
    if (i % 15 == 0) {
      return 'FizzBuzz';
    } else if (i % 3 == 0) {
      return 'Fizz';
    } else if (i % 5 == 0) {
      return 'Buzz';
    } else {
      return i;
    }
  }
}
