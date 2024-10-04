

setInterval 
let num = 0; 
const intervalId = setInterval(() => {
    num++;
    // num = num +1;
    // num += 1;

    if(num > 6){
        clearInterval(intervalId);
    }

    console.log(intervalId, num)
}, 2000)