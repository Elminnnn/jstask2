// 1. The user enters 1 number (A). Print all numbers from 1 to 1000 that are divisible by A.
// let A = +prompt(`Please enter the value:`);
// while(isNaN(A) || A==""){
//     A=+prompt(`Please enter the value:`);

// }
// for(i=1 ; i<1000 ; i++){
//     if (i%A==0) {
//         console.log(i);
        
//     }
// }

// 2. The user enters 1 number (A). Find the number of positive integers whose square is less than A (n^2 < A).
// let A=+prompt(`Please enter the value:`);
// while(isNaN(A) || A==""){
//     A=+prompt(`Please enter the value:`);

// }
// for(n=1 ; n<A ; n++){
//     if (Math.pow(n,2)<A ) {
//         console.log(n);
        
//     }
// }

// 3. The user enters 1 number (A). Print the largest divisor (other than A itself) of the number A.
// let A=+prompt(`Please enter the value:`);
// while(isNaN(A) || A==""){
//         A=+prompt(`Please enter the value:`);   
//     }
// let d=0;
// for(i=1; i<A; i++){
//     if (A%i==0){
//         d=i;

//     }
   
// }
// console.log(d);
 

// 4. The user enters 2 numbers (A and B). Print the sum of all numbers from the range A to B that are divisible by 7 without a remainder. (Note that B may be less than A if you type).

// let A=+prompt(`Please enter the value:`);
// while(isNaN(A) || A==""){
//     A=+prompt(`Please enter the value:`);

// }
// let B=+prompt(`Please enter the value:`);
// while(isNaN(B) || B==""){
//     B=+prompt(`Please enter the value:`);

// }
// let sum=0;
// if (A>B) {
//     for (i=B; i<A; i++) {
//         if (i%7==0) {
//              sum+=i
            
//         }
               
//     }
//     console.log(sum);
    
// }
// else if(A<B){
//     console.log(`B cannot be larger than A `);

// }
// else{
//     console.log(`B cannot be equal A` );
// }


// 5. The user enters 1 positive number (N). Print the Nth number of the fibonacci series. In the fibonacci series, each next number is the sum of the previous two. The first and second are considered equal to 1.

// let a=+prompt(`Please enter the value:`);
// while(isNaN(a) || a==""){
//     a=+prompt(`Please enter the value:`);

// }
// let n1 = 1;
// let n2 = 1;
// let n3 = 0;

//     for (let i = 2; i < a; i++)
//     {
//         n3 = n1 + n2;
//         n1 = n2;
//         n2 = n3;
//     }
//     console.log(n3);

// 6. The user enters 2 numbers. Find their greatest common divisor using Euclid's algorithm. (yes, you've got to google this algorithm at first :D ).
// let a=+prompt(`Please enter the value:`);
// while(isNaN(a) || a==""){
//     a=+prompt(`Please enter the value:`);

// }
// let b=+prompt(`Please enter the value:`);
// while(isNaN(b) || b==""){
//     b=+prompt(`Please enter the value:`);

// }
// let gcd = 0;
// let remainder = 0;
// if (a > b)
// {
//     while (a % b > 0)
//     {
//        remainder = a % b;
//        a = b;
//        b = remainder;
//     }
//     gcd = b;
// }

// else
// {
//     while (b % a > 0)
//     {
//         remainder = b % a;
//         b = a;
//         a = remainder;
//     }
//     gcd = a;
// }

// console.log(gcd);

// 7.The user enters 1 number. Find a number that is a mirror image of the sequence of digits of a given number, for example, given the number 123, output is 321 in this case.
// let number  = +prompt("Number : ");
// let newnumber = 0;
// while (number > 0)
// {
//     newnumber *= 10;
//     newnumber += number % 10;
//     number = parseInt(number / 10);
// }

// console.log(newnumber);

// 8. The user enters 2 numbers. Find out if these two numbers have the same digits. For example, for a pair of 123 and 3456789, the answer would be "YES", and for a pair of 500 and 99, "NO".
// let a  = prompt("A : ");

// let b  = prompt("B : ");

// let isSame = false;

// for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < b.length; j++) {
//         if (a[i] === b[j]) {
//             isSame = true;
//         }
//     }
// }

// console.log(isSame);

