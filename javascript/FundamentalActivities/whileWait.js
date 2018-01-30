var days = 60;
while(days <= 60){
    if(days >= 30){
        console.log(days +" days until my birthday. Sooo many days away...");
        days -= 1;
    }
    else if(days < 30 && days > 5){
        console.log(days +" days until my birthday. It is getting closer...");
        days -= 1;
    }
    else if(days <= 5 && days > 1){
        console.log(days +" DAYS TO GO UNTIL MY BIRTHDAY!!!");
        days -= 1;
    } 
    else if(days === 1){
        console.log(days +" DAY TO GO UNTIL MY BIRTHDAY!!! WOO-HOO!");
        days -= 1;
    }
    else if(days === 0){
        console.log("@@__@@__@@  IT'S MY BIRTHDAY!!!!!  @@__@@__@@");
        break;    
    }   
}