function countVowels(str){
    let count =0;
let vowels ='aeiouAEIOU';
for(let char of str){
    if(vowels.includes(char))
        count++;
}
return count;
}
// console.log(countVowels('hello world'));

//5
function longestWord(sentence){
    let words = sentence.split(' ');
    let maxWord ='';
    for(let word of words){
        if(word.length>maxWord.length)
            maxWord=word;
    }
    return maxWord
}
// console.log(longestWord('dude whats up'));

//6
function firstNonRepeating(str){
    for(let i=0; i<str.length; i++){
        if(str.indexOf(str[i]) === str.lastIndexOf(str[i])) return str[i];
    }
    return null;
}
// console.log(firstNonRepeating('swiss'));

function removeDuplicates(str){
    let result ='';
    for(let char of str){
        if(!result.includes(char))
           result+=char;
    }
    return result;
}
// console.log(removeDuplicates('banana'));

//8
function capitalize(sentence){
    return sentence.split(' ').map(word => word[0].toUpperCase()+ word.slice(1)).join(' ')
}
// console.log(capitalize('hello world'));


//10
function charFrequency(str){
    let freq ={};
    for(let char of str )
       {
         freq[char] =(freq[char] || 0)+1;
       }
       return freq;
}
// console.log(charFrequency('hello'));

//11
function minValue(arr){
    return Math.min(...arr);
}
// console.log(minValue([1,2,3,4,5]));

function secondLargest(arr){
    let unique =[ ...new Set(arr)].sort((a,b)=>b-a);
    return unique[1]

}
// console.log(secondLargest([1,2,3,4]));

//14
function reverseArray(arr){
    return arr.reverse()
}
// console.log(reverseArray([1,2,3,4]));

//15
function sumArray (arr){
    return arr.reduce((a,b)=>a+b,0)
}
// console.log(sumArray([1,2,3,4]));

//16

function removeDuplicatesNumber(arr){
   return [...new Set(arr)]
}
// console.log(removeDuplicatesNumber([1,1,2,2,3]));

//17
function countEvenOdd(arr){
    let even=0, odd=0;
    for(let num of arr){
        if(num%2===0) even++;odd++
    }
    return{even,odd}
}
// console.log(countEvenOdd([1,2,3,4,5]));

//18

function average(arr){
    return arr.reduce((a,b)=> a+b,0)/arr.length
}
// console.log(average([1,2,3,4]));

//19
function positiveNumbers(arr){
    return arr.filter(n => n>0)

}
// console.log(positiveNumbers([1,2,-4,]));

//20
function findIndex(arr,target){
    return arr.indexOf(target)
}
// console.log(findIndex([1,2,3,4],2));

//22
function factorial(n){
let res =1;
for(let i=2; i<=n; i++)
{
    res = res*i;
}
return res;
}
// console.log(factorial(5));

//23
function fibonacci(n){
let arr =[1,0];
for(let i=2; i<n; i++)
{
    arr.push(arr[i-1]+arr[i-2])
}
return arr.slice(0,n)
}
// console.log(fibonacci(7));

//24
function isPrime (n){
if(n<2) return false;
for( let i =2; i<=Math.sqrt(n); i++)
{
    if(n%i === 0) return false
}
return true;
}
// console.log(isPrime(8));

//25
function gcd(a,b){
    while(b!==0){
[a,b] =[b, a%b];
    }
    return a;
}
// console.log(gcd(12,18));

//26
function countDigits(n){
    return n.toString().length
}
// console.log(countDigits(123456));

//27
function sumDigits(n){
 return n.toString().split('').reduce((a,b)=>a+Number(b),0)
}
// console.log(sumDigits(12345));

//30
function calculator (a,b,op){
    if(op ==='+') return a+b;
    if(op === '-') return a-b;
    if(op === '*') return a*b;
    if( op === '/') return a/b;
}
// console.log(calculator(2,3,"*"));