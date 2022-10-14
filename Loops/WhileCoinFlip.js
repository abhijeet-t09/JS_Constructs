var tail = 0;
var head = 0;
while(head < 11 && tail < 11){
    var value = Math.floor(Math.random() * 2);
    if(value < 0.5){
        tail++;
    }
    else{
        head++;
    }
}
console.log("Head -->",head);
console.log("Tail -->",tail);
