

function RockLogic(array){
    var computerChoice = array[Math.floor(Math.random()*3)]
    document.getElementById("computerResult").innerHTML = "Your opponent chooses " + computerChoice
    switch (computerChoice){
        case "Rock":
        document.getElementById("showresult").innerHTML = "It's a tie!"
        break
        case "Paper":
        document.getElementById("showresult").innerHTML = "You lose!"
        break
        case "Scissors":
        document.getElementById("showresult").innerHTML = "You win!"
    }
}

function PaperLogic(array){
    var computerChoice = array[Math.floor(Math.random()*3)]
    document.getElementById("computerResult").innerHTML = "Your opponent chooses " + computerChoice
    switch (computerChoice){
        case "Rock":
        document.getElementById("showresult").innerHTML = "You win!"
        break
        case "Paper":
        document.getElementById("showresult").innerHTML = "It's a tie!"
        break
        case "Scissors":
        document.getElementById("showresult").innerHTML = "You lose!"
    }
}

function ScissorsLogic(array){
    var computerChoice = array[Math.floor(Math.random()*3)]
    document.getElementById("computerResult").innerHTML = "Your opponent chooses " + computerChoice
    switch (computerChoice){
        case "Rock":
        document.getElementById("showresult").innerHTML = "You lose!"
        break
        case "Paper":
        document.getElementById("showresult").innerHTML = "You win!"
        break
        case "Scissors":
        document.getElementById("showresult").innerHTML = "It's a tie!"
    }
}


var items = ["Rock", "Paper", "Scissors"];


var rockbutton = document.getElementById("rockButton")
    rockbutton.addEventListener("click", function() {
        RockLogic(items)
    })

var paperbutton = document.getElementById("paperButton")
    paperbutton.addEventListener("click", function() {
        PaperLogic(items)
    })

var scissorsbutton = document.getElementById("scissorsButton")
    scissorsbutton.addEventListener("click", function() {
        ScissorsLogic(items)
    })
