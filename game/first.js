let cont = document.getElementById("container");
let bcd = document.querySelector(".hero-gameplay");
let scoreCard = document.querySelector(".score");
let timer = document.getElementById("stop-watch");
let startBtn = document.querySelector(".start");
let targets = document.getElementsByClassName("targets");

bcd.classList.add("hide");

const height = cont.offsetHeight;
const width = cont.offsetWidth;

let mode = "on";

startBtn.addEventListener("click",() => {
    Array.from(targets).forEach((target)=>{
        target.classList.remove("hide");
            const pointing = setInterval(()=>{
            const fHeight = Math.random() * (height-240);
            const fWidth = Math.random() * (width-240);
            
            target.style.position = "relative";
            target.style.top = fHeight + "px";
            target.style.left = fWidth + "px";
        }, 1000);
        intervalIDs.push(pointing);
    })
});

let intervalIDs = [];

const startTimer = startBtn.addEventListener("click",()=>{
    bcd.classList.remove("hide");
    startBtn.classList.add("hide");
    let count = 30;
    let score = 0;
    scoreCard.innerText=score;

    function pointsMake(){
        Array.from(targets).forEach((target)=>{
            target.addEventListener("click",()=>{
                score++;
                scoreCard.innerText=score;
            })
        })
    }
    pointsMake();

    const countdown = setInterval(()=>{ 
        if(count > 0){
        count--;
        timer.innerText=`${count} s`;
        }
    else{
        clearInterval(countdown);
        stopTargets();
        bcd.classList.add("hide");
        startBtn.classList.remove("hide");
    }
    },1000)
})

function stopTargets(){
    intervalIDs.forEach(clearInterval);
    intervalIDs=[];
}

function reAppear(){
    Array.from(targets).forEach((target)=>{
        target.addEventListener("click",()=>{
            const magic = setInterval(()=>{
                if(mode==="on"){
                    mode="off";
                    target.classList.add("hide");
                }
                else if(mode==="off"){
                    mode="on";
                    target.classList.remove("hide");
                    clearInterval(magic);
                }
            },200);
        })
    })
};

reAppear();