function showTime(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let formatHours = convertFormat(hours);

    hours = checkTime(hours);

    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);

    document.getElementById('clock').innerHTML =`${hours} : ${minutes} : ${seconds} ${formatHours}`;
}

function addZero(time){
    if(time < 10){
        time = `0${time}`;
    }
    return time;
}

function checkTime(time){
    if(time > 12){
        time -= 12;
    }
    else if(time === 0){
        time = 12;
    }
    return time;
}

function convertFormat(time){
    let format = 'AM';
    if(time >= 12){
        format = 'PM';
    }
    return format;
}

showTime();
setInterval(showTime, 1000);