//Suzanne Salerno January 29, 2018

function randomChance(quarters){
    while(quarters > 0){
        var spin = Math.trunc(Math.random()*100);
        quarters--;
        //console.log(spin +" num of quarters "+quarters);
        if (spin == 7){
            var win = (Math.floor(Math.random()*100)+50)+ quarters;
            console.log("You're a WINNER!!! "+ win);
            break;
        }
    }
    if(quarters == 0){
        console.log("GAME OVER");
    }
}
randomChance(50);
