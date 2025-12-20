//1. Return the square of a number 
function numSquare(n){
    return n*n;
}

//2. Return the cube of a number 
 function getCube(n){
    return n*n*n
 }

 //3. Convert minutes to seconds
function mToSeconds(n){
    return n*60;
}

//4. Convert hours to minutes 
function hoursToMinutes(hour){
    return hour*60
}

//5. Convert days to hours 
function daysToHours(day){
    return day*24;
}

//6. Add two numbers 
function addNum(a,b){
    return a+b;
}

//7. Subtract two numbers 
function subNum(a,b){
    return a-b;
}

//8. Multiply two numbers 
function multiNum(a,b){
    return a*b;
}

//9. Divide two numbers 
function divNum(a,b){
    return a/b;
}

//10. Find remainder 
function remainderNum(a,b){
    return a%b
}

//11. Check if number is positive 
function isPositive(n){
    if( n>0)
    {
        return true;
    }  
    else{
return false
    } 
   
}

//12. Check if number is negative 
function isNegative(n){
    if( n<0)
    {
        return false;
    }  
    else{
return true
    } 
   
}

//13. Check even/odd 
function evenOrOdd(n){
if(n%2 ===0) {
    return 'Number is Even';
}
else return 'Number is Odd';
}

//14. Return "Adult" if age ≥ 18 
function returnAdult(age){
    if(age >= 18){
        return 'Adult'
    }
    else {
        return 'Not Adult';
    }
}


//15. Return "Child" if age < 18 
function returnChild(age){
    if(age < 18){
        return 'child'
    }
    else {
        return 'Adult';
    }
}

//16. Check if two numbers are equal 
function checkNum(a,b){
    if(a===b){
        return true;
    }
    else return false;
}

//17. Return greater number
function greatNum(a,b){
    if(a>b){
        return true;
    }
    else return false;
}

//18. Return smaller number 
function smallNum(a,b){
     if(a<b){
        return true;
    }
    else return false;
}

//19. Check if grade ≥ 50 → pass 
function gradePass(grade){
    if(grade >= 50){
        return 'Pass';
    }
    else return 'Fail'
}

//20. Return absolute value 
function getAbsoluteValue(num){
    return Math.abs(num)
}

//21 Length of string
function lengthOfString(str){
    return str.length;
}

//22. First element of an array 
function firstElm(arr){
    return arr[0]
}

//23. Last element of an array 
function lastElm(arr){
    return arr[arr.length -1]
}

//24. Add element to end of array 
function endArray(arr){
    
    arr.push(5)
    return arr;
}

//25. Remove last element 
function removeLastELm(arr){
    return arr.slice(0,arr.length-1)
}

//26. Check if string contains "a" 
function containsArray(str){
    if(str.includes("a"))
    {
        return true;
    }
    else return false
}

// 27. Convert string to uppercase 
function upperCase(str){
  return str.toUpperCase()
}

// 28. Convert string to lowercase 
function lowerCase(str){
  return str.toLowerCase()
}

//29. Return second element of array
function secondElm(arr){
    return arr[1]
}

//30.Join array into string 
function joinArray(arr){
   
    return arr.join(' ')
}

//31. Sum of array 
function sumOfArray(arr){
    let total =0;
    for( let num of arr){
       total =total+num; 
    }
    return total;
}

//32. Multiply array elements 
function multiplyArray(arr){
    let multiply =1;
    for(let num of arr){
        multiply*=num;
    }
    return multiply
}

//33. Count even numbers 
function countEven(arr){
let count =0;
for(let num of arr){
    if(num%2===0)
        count++;
}
return count;
}

//34. Count odd numbers 
function countOdd(arr){
let count =0;
for(let num of arr){
    if(num%2!==0)
        count++;
}
return count;
}

//35. Find largest number 
function largestNo(arr){
    let large =arr[0];
    for(let num of arr){
        if(num>large)
            large = num;
    }
return large;
}

//36. Find smallest number 
function smallestNo(arr){
    let small =arr[0];
    for(let num of arr){
        if(num<small)
            small =num;
    }
return small;
}

//37. Count numbers > 50 
function numThat(arr){
    let count =0;
    for(let num of arr){
        if(num>50)
            count ++;
    }
    return count;
}

//38. Count negative numbers 
function numNegative(arr){
    let count =0;
    for(let num of arr){
        if(num<0)
            count ++;
    }
    return count;
}

//39. Count positive numbers 
function numPositive(arr){
    let count =0;
    for(let num of arr){
        if(num>0)
            count ++;
    }
    return count;
}

//40. Find total marks out of 500 
function totalMarks(marks){
    let total =0;
    for( let i=0; i<marks.length; i++){
        total+=marks[i];

    }
    return total;
}

//41 Clone array
function clone (arr){
    let cloneArray =[];
    for(let num of arr){
        cloneArray.push(num)
    }
    return cloneArray;
}

//42. Remove negative numbers 
function eraseNegative(arr){
    let noNegative =[]
    for( let num of arr){
if(num>0)
noNegative.push(num)
    }
    return noNegative;
}


//43. Filter marks ≥ 40 
function overForty(arr){
    let overForty =[]
    for( let num of arr){
if(num>=40)
overForty.push(num)
    }
    return overForty;
}

//45. Reverse array (manually) 
function reverseArray(arr){
    let reversed =[];
    for(let i=arr.length -1; i>=0; i--){
        reversed.push(arr[i])
    }
    return reversed;
}

//46. Count vowels 
function countVowel(arr){
    let vowel = 'aeiouAEIOU'
    let count =0
    for (let char of arr){
 if( vowel.includes(char))
count++;
    }
   return count;
}

//47. Count consonants 
function countConsonants(arr){
    let vowel = 'aeiouAEIOU'
    let count =0;
    for (let char of arr){
 if( !vowel.includes(char))
count++;
    }
   return count;
}

//48. Reverse string manually 
function stringReverse(str){
    let reversed ='';
    for(let i=str.length-1; i>=0; i--){
        reversed+=str[i]
    }
    return reversed;
}

//49. Check if palindrome 
function isPalindrome(str){
    let reversedWord ='';
    for(let i=str.length-1; i>=0; i--){
        reversedWord+=str[i];
     
    }
      
         if(str === reversedWord){
return true;
         }
            
       else return false;
    
}

//50. Replace all spaces with hyphens 
function replaceSpace(str){
    return str.split(' ').join('-')
}

//51. Count digits in string 
function countDigit(str){
    let count =0;
    for(let i=0; i< str.length; i++){
        if(str[i]>='0' && str[i]<='9')
            count++;
    }
    return count;
}

//52. Extract numbers from string 
 function extractNum(str){
    let numbers =[]
    for(let i=0; i<str.length; i++)
    {
        if(str[i]>='0' && str[i]<= '9')
            numbers.push(Number(str[i]))
    }
    return numbers;
 }

 //53.Check if email contains "@" 
 function email(str){
   
        if(str.includes('@'))
          {
              return true;
          }
   
    else return false;
 }

 //54. Check if a word exists in sentence 
 function wordExists(sentence,word){
    let words = sentence.split(' ');
    return words.includes(word)
 }

 //55. Check if two strings are equal (case insensitive) 
 function isEqual(str1,str2){
    return str1.toLowerCase() === str2.toLowerCase()
 }

 //56. Find the average of array 
 function average(arr){
    let total =0;
    for( let i=0; i<arr.length; i++){
        total+=arr[i];
    }
    return total/arr.length
 }
 
 //57. Find second largest number 
function secondLarge(arr) {
    let largest = -Infinity;
    let second = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        let num =arr[i];
        if(num>largest){
            second =largest;
            largest =num;
        }else if(num> second && num<largest){
            second=num
        }
    }
    return second;
}

//58. Find second smallest number
function secondSmall(arr) {
    let smallest = Infinity;
    let second = Infinity;

    for (let i = 0; i < arr.length; i++) {
        let num =arr[i];
        if(num<smallest){
            second =smallest;
            smallest =num;
        }else if(num< second && num>smallest){
            second=num
        }
    }
    return second;
}


//59. Remove duplicates from array 
function removeDuplicates(arr){
    let unique=[];

    for(let i=0; i<arr.length; i++){
        if(!unique.includes(arr[i])){
            unique.push(arr[i])
        }
    }
    return unique;
}

//60. Merge two arrays 
function mergeArray(arr1,arr2){
    let merged=[];
    for(let i=0; i<arr1.length; i++){
        merged.push(arr1[i]);
    }
    for(let i=0; i<arr2.length; i++){
        merged.push(arr2[i]);
    }
return merged;
}


