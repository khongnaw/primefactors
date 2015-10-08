/*
 * Largest prime factor calculator function
 * Created by Sorapong
 */

/*exported primeFactors*/
/**
 * This function returns the largest prime factor of
 * a given number.
 * @param number
 * @returns the largest prime factor of a given number
 */

function primeFactors(number)
{
  var factors = [];
  var divider = 2;
  while(number > 1){
    while((number % divider) === 0){
      factors.push(divider);
      number /= divider;
    }
    divider += 1;
  }
 return factors[factors.length - 1];
}



