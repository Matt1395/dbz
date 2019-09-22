//Declared global variables
let totalFighters = [];
let usersFighters = [];
let opponentsFighters = [];
let currentOpponent = 0;
//Puts all attributes for all cards in an array
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
//Elemants that are needed throughout
const startButton = document.getElementById('start-button');
const cardInstructions = document.getElementById('cards-instructions');
const resultButton = document.getElementById('result-button');
const battleButton = document.getElementById('battle-button');
const invalidButton = document.getElementById('invalid-button');
const counters = document.getElementById('counters');
const userCounter = document.getElementById('user-counter');
const opponentCounter = document.getElementById('opponent-counter');
const opponentAttributes = document.getElementById('opponent-attributes');

//Gets database data and puts it into an array
const populateFighters = () => {
    for(let i=0; i<fightersObj.length; i++) {
        totalFighters.push(fightersObj[i].id)
    }
}

//Shows the user the result of the encounter
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

//Sets the colours for the required attributes
const setAtrributeColour = (winner, loser) => {
    winner.style.backgroundColor = 'rgba(0, 255, 0, 0.5)';
    loser.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
}

//Edits the decks dependant of the last battle
const consolidateDecks = (result) => {
    previousOpponent = opponentsFighters[opponentIndex];
    previousUser = usersFighters[userIndex];
    if (result == 'win') { //User gets the card from opponent
        usersFighters.push(opponentsFighters[opponentIndex]);
        opponentsFighters.splice(opponentIndex, 1);
    } else if (result == 'loss') { //Opponent gets the card from user
        opponentsFighters.push(usersFighters[userIndex]);
        usersFighters.splice(userIndex, 1);
    }
}

//Makes both user and opponent change active card
const selectNextFighters = () => {
    userIndex = getNextCard(usersFighters[userIndex], previousUser, userIndex, usersFighters);
    opponentIndex = getNextCard(opponentsFighters[opponentIndex], previousOpponent, opponentIndex, opponentsFighters);
}

//Gets the next card in the array
const getNextCard = (currentCard, previousCard, index, array) => {
    if (index == -1){ //Makes sure it doesn't go out of array
        index = 0;
        return index;
    } else if (currentCard == previousCard && index + 1 == array.length) { //Sets it back to the beginning of the array if at the end
        index = 0;
        return index;
    } else if (currentCard == previousCard && index + 1 < array.length) { //Moves to the next index if available
        index++;
        return index;
    } else if (index >= array.length) { //Sets it back to the beginning of the array if at the end
        index = 0;
        return index;
    } else if (currentCard != previousCard){ //If encounter lost but not last element in array
        return index;
    }
}

//Runs when the game has finished
const gameOver = endResult => {
    resultButton.style.display = 'block';
    if(endResult == 'win') {
        resultButton.innerHTML = 'You have won the war! Click here to play again.';
    } else if (endResult == 'loss') {
        resultButton.innerHTML = 'You have lost to the enemy! Click here to play again and attempt to get vengence!';
    }
}

//Finds the result of the encounter and runs the correct methods from this
const getResult = (userScore, opponentScore, userBox, opponentBox) => {
    attributeChosen = true;
    //If the user wins the encounter
    if(userScore > opponentScore) {
        consolidateDecks('win');
        //If the user wins the whole game
        if (opponentsFighters.length == 0) {
            setAtrributeColour(userBox, opponentBox);
            opponentData.style.display = 'block';
            gameOver('win')
        } else {
            displayResult(userBox, opponentBox, 'win');
            validChoice = true;
        }        
    } else if (userScore < opponentScore) { //If opponent wins encounter
        consolidateDecks('loss');
        //If opponent wins the whole game
        if (usersFighters.length == 0) {
            setAtrributeColour(opponentBox, userBox);
            opponentData.style.display = 'block';
            gameOver('loss');
        } else {
            displayResult(opponentBox, userBox, 'lost');
            validChoice = true;
        }
    } else if (userScore === opponentScore) { //If the encounter is a draw
        displayResult(userBox, opponentBox, 'draw');
        consolidateDecks('draw');
        validChoice = true;
    } else { //If the user selects an invalid attribute
        invalidButton.innerHTML = "That is not a valid option for either your figher or your opponent. Please pick another option.";
        invalidButton.style.display = 'block';
        invalidButton.style.top = '15%';
        setTimeout(function() {invalidButton.style.display = ''; invalidButton.style.top = '';}, 3000);
        validChoice = false;
        attributeChosen = false;
    }
}

//Puts event listeners on all the attributes to then run game interactions if selected
for (let i=0; i<attributeBoxes.length; i++) {
    attributeBoxes[i].onclick = () => {
        //Gets user data from html
        const userValue = parseFloat(attributeBoxes[i].getAttribute('attribute-value'));
        const userName = attributeBoxes[i].getAttribute('attribute-name');
        userID = attributeBoxes[i].getAttribute('attribute-id');
        userIndex = usersFighters.indexOf(userID);
        //Gets opponent data from html
        const opponentAttribute = document.getElementById(`${userName}-${opponentsFighters[opponentIndex]}`);
        const opponentValue = parseFloat(opponentAttribute.getAttribute('attribute-value'));
        opponentID = opponentAttribute.getAttribute('attribute-id');
        opponentIndex = opponentsFighters.indexOf(opponentID);
        //Makes sure the user can't select more than one option and runs the encounter resolution
        if(!attributeChosen) {
            getResult(userValue, opponentValue, attributeBoxes[i], opponentAttribute);
        }
    }
}

//Runs the necessary code when the start button is clicked
startButton.onclick = () => {
    populateFighters();
    startButton.style.display = 'none';
    cardInstructions.style.display = 'none';
    shuffleDeck();
    userIndex = 0;
    opponentIndex = 0;
    displayStartingCards(usersFighters[userIndex], opponentsFighters[opponentIndex]);
}

//Get a random number
const getRandomNumber = maxNum => {
    return Math.floor(Math.random() * maxNum);
}

//Shuffles the cards so each game is random
const shuffleDeck = () => {
    let numberOfFighters = totalFighters.length;
    //If odd number of cards user gets one less
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

//Displays the cards for each encounter
const displayStartingCards = (userNum, opponentNum) => {
    //Finds which cards will be displayed
    userCard = document.getElementById(`card-${userNum}`);
    opponentCard = document.getElementById(`card-${opponentNum}`);
    //Updates the deck counter so player can see progress
    userCounter.innerHTML = usersFighters.length;
    opponentCounter.innerHTML = opponentsFighters.length;
    counters.style.display = 'flex';
    //Makes sure user can see their attributes
    userData = document.getElementById(`attributes-${userNum}`);
    userData.style.display = 'block';
    //Makes sure user can't see opponent attributes
    opponentData = document.getElementById(`attributes-${opponentNum}`);
    opponentData.style.display = 'none';
    //Makes sure users' card is on the left and opponents' card is on the right
    userCard.parentNode.classList.add('order-1');
    opponentCard.parentNode.classList.add('order-2');
    //Makes the cards visible
    userCard.style.display = 'block';
    opponentCard.style.display = 'block';
}

//Runs the required code when a non game end encounter ends
battleButton.onclick = () => {
    //sets the styles
    userCard.style.display = '';
    userCard.parentNode.classList.remove('order-1');
    opponentCard.style.display = '';
    opponentCard.parentNode.classList.remove('order-2');
    opponentData.style.display = 'none';
    battleButton.style.display = '';
    attributeChosen = false;
    for (let i=0; i<attributeBoxes.length; i++) {
        attributeBoxes[i].style.backgroundColor = '';
    }
    //gets the next round ready
    selectNextFighters();
    displayStartingCards(usersFighters[userIndex], opponentsFighters[opponentIndex]);
}

//Runs when the game has reached its conclusion and the button has been pressed
resultButton.onclick = () => {
    if(validChoice) {
        //sets the styles
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
        //empties the arrays
        totalFighters = [];
        usersFighters = [];
        opponentsFighters = [];
    }
}