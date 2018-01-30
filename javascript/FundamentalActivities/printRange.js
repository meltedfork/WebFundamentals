function printRange(min,max,increment){
    while(min < max){
        console.log(min);
        min += increment;
    }
}
printRange(2,10,2);