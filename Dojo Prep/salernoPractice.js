

function countDown(num){
    var arr = [];
    while(num >= 0){
        arr.push(num);
        num--;
    }
    console.log(arr);
    console.log(arr.length);
}
countDown(10);
