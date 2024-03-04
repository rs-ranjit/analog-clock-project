const sec = document.querySelector(".sec-hand");
const hr = document.querySelector(".hr-hand");
const min = document.querySelector(".min-hand");
const left = document.querySelector(".left");
const right= document.querySelector(".right");

//clock time setter
setInterval(()=>{

    let date = new Date();
    let hourT = date.getHours();
    let minT = date.getMinutes();
    let secT = date.getSeconds();
    let dates = date.getDay();
    let day = date.getDate();
    const week = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    
    hrAngle = (30*hourT + minT/2);
    minAngle = (6*minT);
    secAngle = (6*secT);

    hr.style.transform = `rotate(${hrAngle}deg)`;
    min.style.transform = `rotate(${minAngle}deg)`;
    sec.style.transform = `rotate(${secAngle}deg)`;
    left.innerHTML = `${day}`;
    switch(dates){
        case 0:
            right.innerHTML = `${week[0]}`;
            break;
        case 1:
            right.innerHTML = `${week[1]}`;
            break;
        case 2:
            right.innerHTML = `${week[2]}`;
            break;
        case 3:
            right.innerHTML = `${week[3]}`;
            break;
        case 4:
            right.innerHTML = `${week[4]}`;
             break;   
        case 5:
            right.innerHTML = `${week[5]}`;
            break;     
         case 6:
            right.innerHTML = `${week[6]}`;
            break;
    }
}, 1000)
