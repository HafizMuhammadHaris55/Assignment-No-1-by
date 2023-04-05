// Functions

// 1. Write a js program to find cube of any number using function.
function cube(num) {
    return num * num * num;
  }
  
  console.log(cube(3)); // Output: 27
  
// 2. Write a js program to find diameter, circumference and area of circle using functions.
function diameter(radius) {
    return 2 * radius;
  }
  
  function circumference(radius) {
    return 2 * Math.PI * radius;
  }
  
  function area(radius) {
    return Math.PI * radius * radius;
  }
  
  console.log(diameter(4)); 
  console.log(circumference(4)); 
  console.log(area(4)); 
  
// 3. Write a js program to find maximum and minimum between two numbers using functions.
function max(num1, num2) {
    return num1 > num2 ? num1 : num2;
  }
  
  function min(num1, num2) {
    return num1 < num2 ? num1 : num2;
  }
  
  console.log(max(4, 6)); 
  console.log(min(4, 6)); 
  
// 4. Write a js program to check whether a number is even or odd using functions.
function isEven(num) {
    return num % 2 === 0;
  }
  
  function isOdd(num) {
    return num % 2 !== 0;
  }
  
  console.log(isEven(4)); 
  console.log(isOdd(4)); 
  
// 5. Write a js program to check whether a number is prime, Armstrong or perfect number using functions.
function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
// 6. Write a js program to find all prime numbers between given interval using functions.
function findPrimes(start, end) {
    const primes = [];
    for (let num = start; num <= end; num++) {
      if (isPrime(num)) {
        primes.push(num);
      }
    }
    return primes;
  }
  
  console.log(findPrimes(2, 50)); 
  
// 7. Write a js program to print all strong numbers between given interval using functions.

// 8. Write a js program to print all Armstrong numbers between given interval using functions.
function isArmstrong(number) {
    const digits = number.toString().split('');
    const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, digits.length), 0);
    return sum === number;
  }
  
  function printArmstrongNumbers(start, end) {
    for (let i = start; i <= end; i++) {
      if (isArmstrong(i)) {
        console.log(i);
      }
    }
  }
  
  
  printArmstrongNumbers(1, 200);
// 9. Write a js program to print all perfect numbers between given interval using functions.
function isPerfect(number) {
    let sum = 0;
    for (let i = 1; i <= number / 2; i++) {
      if (number % i === 0) {
        sum += i;
      }
    }
    return sum === number;
  }
  
  function printPerfectNumbers(start, end) {
    for (let i = start; i <= end; i++) {
      if (isPerfect(i)) {
        console.log(i);
      }
    }
  }
  
  
  printPerfectNumbers(1, 100);
  
// 10. Write a js program to find power of any number using function.
function power(base, exponent) {
    let result = 1;
    for (let i = 1; i <= exponent; i++) {
      result *= base;
    }
    return result;
  }
  

  console.log(power(2, 4)); 
  
// 11. Write a js program to print all natural numbers between 1 to n using function.
function printNaturalNumbers(n) {
    for (let i = 1; i <= n; i++) {
      console.log(i);
    }
  }
  
  
  printNaturalNumbers(10);
  
// 12. Write a js program to print all even or odd numbers in given range using function.
function printNumbers(start, end, type) {
    for (let i = start; i <= end; i++) {
      if (type === 'even' && i % 2 === 0) {
        console.log(i);
      } else if (type === 'odd' && i % 2 === 1) {
        console.log(i);
      }
    }
  }
  
  
  printNumbers(1, 20, 'even'); 
  
// 13. Write a js program to find sum of all natural numbers between 1 to n using function.
function sumOfNaturalNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  
 
  console.log(sumOfNaturalNumbers(10)); 
  
 
// 15. Write a js program to find reverse of any number using function.
function reverseNumber(num) {
    let rev = 0;
    while (num != 0) {
    rev = rev * 10 + num % 10;
    num = Math.floor(num / 10);
    }
    return rev;
    }
    
    
    console.log(reverseNumber(123));
// 16. Write a js program to check whether a number is palindrome or not using function.
function isPalindrome(num) {
    return num === reverseNumber(num);
    }
    
    console.log(isPalindrome(121)); 
    console.log(isPalindrome(123)); 
// 17. Write a js program to find sum of digits of a given number using function.
function sumOfDigits(num) {
    let sum = 0;
    while (num != 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
    }
    return sum;
    }
    
    
    console.log(sumOfDigits(123)); 
// 18. Write a js program to find factorial of any number using function.
function factorial(num) {
    if (num < 0) {
    return -1;
    } else if (num == 0) {
    return 1;
    } else {
    return num * factorial(num - 1);
    }
    }
    
    
    console.log(factorial(5));
// 19. Write a js program to generate nth Fibonacci term using function.
function fibonacci(n) {
    if (n <= 0) {
         return 0;
    } 
    else if (n == 1) {
    return 1;
    } 
 else {
    return fibonacci(n - 1) + fibonacci(n - 2);
    }
    }
    
    
    console.log(fibonacci(7));
// 20. Write a js program to find GCD (HCF) of two numbers using function.
function gcd(a, b) {
    if (b == 0) {
    return a;
    } else {
    return gcd(b, a % b);
    }
    }
    

    console.log(gcd(12, 18));
// 21. Write a js program to find LCM of two numbers using function.
function lcm(a, b) {
    return (a * b) / gcd(a, b);
    }
    
    
    console.log(lcm(12, 18));
// 22. Write a js program to display all array elements using function.
function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    }
    }
    
    
    let arr = [1, 2, 3, 4, 5];
    printArray(arr);
// 23. Write a js program to find sum of elements of array using function.
function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    }
    return sum;
    }
    
 
    let arr2 = [2, 4, 6, 8, 10];
    console.log(sumOfArray(arr2)); 

