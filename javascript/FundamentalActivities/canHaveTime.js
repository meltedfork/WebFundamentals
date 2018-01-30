function haveTime(hour, minute, period){
    var hour;
    var minute;
    var before = "It's almost";
    var after = "It's just after";
    var period;
    var morning = "in the morning.";
    var evening = "in the evening.";
    
    if(minute <= 30 && minute > 0){
        if(period === "AM"){
            console.log(after, hour, morning);
        }
        else if(period === "PM"){
            console.log(after, hour, evening);
        }  
    }

    else if(minute > 30 && minute < 60){
        hour = hour + 1;
        if(period === "AM"){
            console.log(before, hour, morning);
        }
        else if(period === "PM"){
            console.log(before, hour, evening);
        }
    }    
}
haveTime(8, 30, "PM");
