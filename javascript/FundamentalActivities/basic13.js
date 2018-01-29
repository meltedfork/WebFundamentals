function shiftArrLeft(arr){
    arr.shift();
    arr.push(0);
    //return arr;
    console.log(arr);
}
shiftArrLeft([0,1,2,3,4]);