let totalFighters = [];

let usersFighters = [];
let opponentsFighters = [];
let currentOpponent = 0;
let attributeBoxes = document.getElementsByClassName('card-body-text');
let attributeChosen = false;
let validChoice = true;
let userCard;
let opponentCard;
let userData;
let opponentData;
let userID;
let opponentID;
let userIndex = 0;
let opponentIndex = 0;
let previousOpponent;
let previousUser;

const startButton = document.getElementById('start-button');
const cardInstructions = document.getElementById('cards-instructions');
const resultButton = document.getElementById('result-button');
const battleButton = document.getElementById('battle-button');
const invalidButton = document.getElementById('invalid-button');
const counters = document.getElementById('counters');
const userCounter = document.getElementById('user-counter');
const opponentCounter = document.getElementById('opponent-counter');

const opponentAttributes = document.getElementById('opponent-attributes');

const populateFighters = () => {
    for(let i=0; i<fightersObj.length; i++) {
        totalFighters.push(fightersObj[i].id)
    }
}

const displayResult = (winner, loser, result) => {
    opponentData.style.display = 'block';
    if(result === 'win') {
        setAtrributeColour(winner, loser);
        battleButton.innerHTML = "You win this round! Click this button to continue fighting!"; 
    } else if(result === 'lost') {
        setAtrributeColour(winner, loser);
        battleButton.innerHTML = "Your fighter has been defeated! Click this button to fight again!"; 
    } else if (result === 'draw') {
        winner.style.backgroundColor = 'rgba(255, 174, 81, 1)';
        loser.style.backgroundColor = 'rgba(255, 174, 81, 1)';
        battleButton.innerHTML = "You are an even match! Click this button to move onto the next battle!"; 
    }
    
    battleButton.style.display = 'block';
}

const setAtrributeColour = (winner, loser) => {
    winner.style.backgroundColor = 'rgba(0, 255, 0, 0.5)';
    loser.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
}

const consolidateDecks = (result) => {
    previousOpponent = opponentsFighters[opponentIndex];
    previousUser = usersFighters[userIndex];
    if (result == 'win') {
        usersFighters.push(opponentsFighters[opponentIndex]);
        opponentsFighters.splice(opponentIndex, 1);
    } else if (result == 'loss') {
        opponentsFighters.push(usersFighters[userIndex]);
        usersFighters.splice(userIndex, 1);
    }
}

const selectNextFighters = () => {
    console.log(userIndex);
    console.log(opponentIndex);
    console.log(usersFighters);
    console.log(opponentsFighters);
    userIndex = getNextCard(usersFighters[userIndex], previousUser, userIndex, usersFighters);
    opponentIndex = getNextCard(opponentsFighters[opponentIndex], previousOpponent, opponentIndex, opponentsFighters);
    console.log(userIndex);
    console.log(opponentIndex);
    console.log(usersFighters);
    console.log(opponentsFighters);
}

const getNextCard = (currentCard, previousCard, index, array) => {
    if (index == -1){
        index = 0;
        return index;
    } else if (currentCard == previousCard && index + 1 == array.length) {
        index = 0;
        console.log('you hit me 1');
        return index;
    } else if (currentCard == previousCard && index + 1 < array.length) {
        index++;
        console.log('you hit me 2 userIndex: ' + index);
        return index;
    } else if (index >= array.length) {
        index = 0;
        return index;
    } else if (currentCard != previousCard){
        console.log('you hit me 3'); 
        return index;
    }
}

const gameOver = endResult => {
    resultButton.style.display = 'block';
    if(endResult == 'win') {
        resultButton.innerHTML = 'You have won the war! Click here to play again.';
    } else if (endResult == 'loss') {
        resultButton.innerHTML = 'You have lost to the enemy! Click here to play again and attempt to get vengence!';
    }
}

const getResult = (userScore, opponentScore, userBox, opponentBox) => {
    attributeChosen = true;
    if(userScore > opponentScore) {
        consolidateDecks('win');
        if (opponentsFighters.length == 0) {
            setAtrributeColour(userBox, opponentBox);
            opponentData.style.display = 'block';
            gameOver('win')
        } else {
            displayResult(userBox, opponentBox, 'win');
            validChoice = true;
        }        
    } else if (userScore < opponentScore) {
        consolidateDecks('loss');
        if (usersFighters.length == 0) {
            setAtrributeColour(opponentBox, userBox);
            opponentData.style.display = 'block';
            gameOver('loss');
        } else {
            displayResult(opponentBox, userBox, 'lost');
            validChoice = true;
        }
    } else if (userScore === opponentScore) {
        displayResult(userBox, opponentBox, 'draw');
        consolidateDecks('draw');
        validChoice = true;
    } else {
        invalidButton.innerHTML = "That is not a valid option for either your figher or your opponent. Please pick another option.";
        invalidButton.style.display = 'block';
        invalidButton.style.top = '15%';
        setTimeout(function() {invalidButton.style.display = ''; invalidButton.style.top = '';}, 3000);
        validChoice = false;
        attributeChosen = false;
    }
}

for (let i=0; i<attributeBoxes.length; i++) {
    attributeBoxes[i].onclick = () => {
        const userValue = parseFloat(attributeBoxes[i].getAttribute('attribute-value'));
        const userName = attributeBoxes[i].getAttribute('attribute-name');
        userID = attributeBoxes[i].getAttribute('attribute-id');
        userIndex = usersFighters.indexOf(userID);
        const opponentAttribute = document.getElementById(`${userName}-${opponentsFighters[opponentIndex]}`);
        const opponentValue = parseFloat(opponentAttribute.getAttribute('attribute-value'));
        opponentID = opponentAttribute.getAttribute('attribute-id');
        opponentIndex = opponentsFighters.indexOf(opponentID);
        if(!attributeChosen) {
            getResult(userValue, opponentValue, attributeBoxes[i], opponentAttribute);
        }
    }
}

startButton.onclick = () => {
    populateFighters();
    startButton.style.display = 'none';
    cardInstructions.style.display = 'none';
    shuffleDeck();
    userIndex = 0;
    opponentIndex = 0;
    console.log(usersFighters);
    console.log(opponentsFighters);
    displayStartingCards(usersFighters[userIndex], opponentsFighters[opponentIndex]);
}

const getRandomNumber = maxNum => {
    return Math.floor(Math.random() * maxNum);
}

const shuffleDeck = () => {
    let numberOfFighters = totalFighters.length;
    for(let i=0; i<Math.floor(numberOfFighters/2); i++) {
        let randomNumber = getRandomNumber(totalFighters.length);
        usersFighters.push(totalFighters[randomNumber]);
        totalFighters.splice(randomNumber, 1);
    }
    while (totalFighters.length > 0) {
        let randomNumber = getRandomNumber(totalFighters.length);
        opponentsFighters.push(totalFighters[randomNumber]);
        totalFighters.splice(randomNumber, 1);
    }
}

const displayStartingCards = (userNum, opponentNum) => {
    userCard = document.getElementById(`card-${userNum}`);
    opponentCard = document.getElementById(`card-${opponentNum}`);

    userCounter.innerHTML = usersFighters.length;
    opponentCounter.innerHTML = opponentsFighters.length;
    counters.style.display = 'flex';

    console.log(userNum);
    console.log(opponentNum);

    userData = document.getElementById(`attributes-${userNum}`);
    userData.style.display = 'block';

    opponentData = document.getElementById(`attributes-${opponentNum}`);
    opponentData.style.display = 'none';

    userCard.parentNode.classList.add('order-1');
    opponentCard.parentNode.classList.add('order-2');

    userCard.style.display = 'block';
    opponentCard.style.display = 'block';
}

battleButton.onclick = () => {
    userCard.style.display = '';
    userCard.parentNode.classList.remove('order-1');
    opponentCard.style.display = '';
    opponentCard.parentNode.classList.remove('order-2');
    opponentData.style.display = 'none';
    selectNextFighters();
    displayStartingCards(usersFighters[userIndex], opponentsFighters[opponentIndex]);
    console.log(usersFighters);
    console.log(opponentsFighters);
    battleButton.style.display = '';
    attributeChosen = false;
    for (let i=0; i<attributeBoxes.length; i++) {
        attributeBoxes[i].style.backgroundColor = '';
    }
}

resultButton.onclick = () => {
    if(validChoice) {
        userCard.style.display = '';
        userCard.parentNode.classList.remove('order-1');
        opponentCard.style.display = '';
        opponentCard.parentNode.classList.remove('order-2');
        startButton.style.display = '';
        cardInstructions.style.display = '';
        resultButton.style.display = '';
        counters.style.display = '';
        attributeChosen = false;
        for (let i=0; i<attributeBoxes.length; i++) {
            attributeBoxes[i].style.backgroundColor = '';
        }
        totalFighters = [];
        usersFighters = [];
        opponentsFighters = [];
    }
}