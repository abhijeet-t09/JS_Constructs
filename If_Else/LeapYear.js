var year = 1998;
if(year % 4 == 0 || year % 400 == 0 && year % 100 == 0){
    console.log("Leap Year")
}
else{
    console.log("Not leap Year")
}