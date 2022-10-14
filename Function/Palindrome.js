function checkPalindrome(number){

    var rev = 0;
    var rem =0;
    while(number!=0){
        rem = number%10;
        rev = rev*10 +rem;
        number = parseInt(number/10);
    }
    return rev;    
}

var number = 152;

var number1 = checkPalindrome(number);
if(number1 == number ){
    console.log("Palindrome")
}
else{
    console.log("Not palindrome")
}