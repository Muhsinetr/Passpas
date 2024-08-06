var calc = document.getElementById("clacwriper");
var display = document.querySelector(".displaysc");
var numberbody = document.querySelector(".numbers");
var calTotal = document.querySelector(".calc");
let Errortune = document.getElementById("myAudio"); 
let displaynum = 0;
let firstSet = 0;
let finalSet = 0;
let Coperation = "";
function adddiplay(num){
    display.innerText += num;
    displaynum = display.innerText;
}
function operation(op){
    Coperation = op;
    firstSet = displaynum;
    display.innerText = "";
}
function equall(){
    finalSet = displaynum;
    let Answer = 0;
    if(firstSet && finalSet){
        switch (Coperation) {
            case "+":
                Answer = (firstSet*1) + (finalSet*1);
                break;
                case "-":
                Answer = (firstSet*1) - (finalSet*1);
                break;
                case "*":
                Answer = (firstSet*1) * (finalSet*1);
                break;
                case "/":
                Answer = (firstSet*1) / (finalSet*1);
                break;
        
            default:
                break;
        }
        display.innerText = "";
        display.innerText = Answer;
        displaynum = display.innerText;
        finalSet = 0;

    }else{
        Errortune.play();
    }
}

function getClear(){
    if(display.innerText == 1997){
        alert("welcome to underworld");
        calTotal.style.display = "none";
    };
firstSet = 0;
finalSet = 0;
display.innerText = "";
}

function abcd(e){
    let clickeitem = e.target.innerText;
    switch (clickeitem) {
        case "1":
            adddiplay(1);
            break;
            case "2":
            adddiplay(2);
            break;
            case "3":
            adddiplay(3);
            break;
            case "4":
            adddiplay(4);
            break;
            case "5":
            adddiplay(5);
            break;
            case "6":
            adddiplay(6);
            break;
            case "7":
            adddiplay(7);
            break;
            case "8":
            adddiplay(8);
            break;
            case "9":
            adddiplay(9);
            break;
            case "0":
            adddiplay(0);
            break;    
            case "+":
                operation("+")
            break;    
            case "*":
                operation("*")
            break;    
            case "-":
                operation("-")
            break;    
            case "/":
                operation("/")
            break;    
            case "=":
                equall();
            break;    
            case "CL":
                getClear();
            break;    
        default:
            break;
    }
    
    
}
numberbody.addEventListener("click",abcd);
/////////Service worker registration

if("serviceWorker" in navigator){
    navigator.serviceWorker.register("srworker.js").then(registration=>{
        console.log("Service worker registered")
        console.log(registration);
    }).catch(error=>{
        console.log("Service worker error")
        console.log(error)
    })
}else{
    alert("Service worker not working")
}
