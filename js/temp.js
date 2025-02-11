const mins = document.querySelector("#mins")
const buttons = document.querySelectorAll("button");

const timer = setInterval (()=> {
    console.log(mins);
    mins--;
    if (mins==0){
        clearInterval(timer)
    }
})

