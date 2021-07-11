let lowerCount = document.querySelector("#lowerCount");
let addCount = document.querySelector("#addCount");
let counterValue = document.querySelector("#counterValue");

let count = "0",;

lowerCount.addEventListener("click", ()=>{
    Count--; 
    counterValue.innerHTML = Count;
})
;
addcount.addEventListener("click",()=>{
count++; 
counterValue.innerHTML = Count;
});

//set default counterValue for display
document.querySelector("#lowerCount").innerHTML = counterValue;

// on click of "lower count"; if output is greater than lower count.

lower.addEventListener('click', function (){
    if (counterValue > lowerCount) {
        counterValue = counterValue - 1;
        document.querySelector("#lowerCount").innerHTML 
    }
});

// on click of "add count"; if output is lesser than lower count.

add.addEventListener('click', function (){
    if (counterValue < addCount) {
        counterValue = counterValue + 1;
        document.querySelector("#addCount").innerHTML 
    }
});

