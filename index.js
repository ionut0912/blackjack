let player = {
  name:"Per",
  chips: 200,
  sayHello: function(){
    console.log("Heisann!")
  }
}
let cards = [] 
let sum = 0
let hasBlackjack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

 let playerEl = document.getElementById("player-el")
 playerEl.textContent = player.name + ": $"+ player.chips





function getRandomCard(){
  // if 1     -> return 11
  //if 11-13 -> return 10
  let randomNumer = Math.floor (Math.random()*13) + 1 // 0 - 12 -> 1-13
  if (randomNumer > 10){
    return 10
  } else if (randomNumer === 1){
    return 11
  }else {
    return randomNumer
  }

}
function startGame(){
  isAlive = true
 let firstCard = getRandomCard()
 let secoundCard = getRandomCard()
 cards = [firstCard+secoundCard]
 sum= firstCard+secoundCard
}


function renderGame() {
  cardsEl.textContent = "Cards:"
  for(let i = 0; i < cards.length; i++){
cardsEl.textContent +=cards[i] + " "
  }
  sumEl.textContent = "sum: " + sum;
  if (sum <= 20) {
    message = "DO you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackjack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if(isAlive === true && hasBlackjack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
}
}
