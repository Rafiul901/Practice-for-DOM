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
console.log(returnAdult(10));

//15. Return "Child" if age < 18 
function returnChild(age){
    if(age < 18){
        return 'child'
    }
    else {
        return 'Adult';
    }
}

