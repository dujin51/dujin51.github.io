const clock = document.querySelector("h1#clock")


function getTime(){
    const date = new Date();
    const hours = `${date.getHours()}`.padStart(2,"0");
    const minutes = `${date.getMinutes()}`.padStart(2,"0");
    const seconds = `${date.getSeconds()}`.padStart(2,"0");
   
    clock.innerHTML = `${hours}:${minutes}:${seconds}` 

}

getTime();
setInterval(getTime, 1000);

