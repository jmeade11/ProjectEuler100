/* 
* PROJECT EULER PROBLEM 2
* Even Fibonacci Numbers
* Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
* 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
* By considering the terms in the Fibonacci sequence that do not exceed the nth term, find the sum of the even-valued terms.
*/

function calcFiboNum(x) {
  let gr = 0.5 * ( 1 + Math.sqrt(5) )
  return Math.floor( ( Math.pow( gr, x+1 ) - Math.pow( 1-gr , x+1 ) )/ Math.sqrt(5) )
}

function fiboEvenSum(y) {
  let sum = 0;
  let n = y + 1 // adjust n because Fibo sequence starts with 1,2,3 instead of 0,1,1,2

  for ( var i = Math.floor(n/3); i > 0; i--) {
    sum += calcFiboNum(i*3-1)
  }
  return sum
}

fiboEvenSum(23);