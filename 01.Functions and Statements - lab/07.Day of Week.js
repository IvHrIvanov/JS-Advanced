function printDay(day){
    let outputDay;
    if(day=='Monday'){
        outputDay='1';
    } else if(day=='Tuesday'){
        outputDay='2';
    } else if(day=='Wednesday'){
        outputDay='3';
    } else if(day=='Thursday'){
        outputDay='4';
    } else if(day=='Friday'){
        outputDay='5';
    } else if(day=='Saturday'){
        outputDay='6';
    } else if(day=='Sunday'){
        outputDay='7';
    } else {
        outputDay = 'error';
    }
    console.log(outputDay);
}
printDay("Invalid");