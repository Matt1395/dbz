console.log(fightersObj);
let totalFighters = [];

let usersFighters = [];
let opponentsFighters = [];
let currentOpponent = 0;
let attributeBoxes = document.getElementsByClassName('card-body-text');
let attributeChosen = false;
let userCard;
let opponentCard;

const startButton = document.getElementById('start-button');
const resultButton = document.getElementById('result-button');

const opponentAttributes = document.getElementById('opponent-attributes');

const populateFighters = () => {
    for(let i=0; i<fightersObj.length; i++) {
        totalFighters.push(fightersObj[i].id)
    }
}

const displayResult = (winner, loser, result) => {
    if(result === 'win') {
        winner.style.backgroundColor = 'rgba(0, 255, 0, 0.5)';
        loser.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
        resultButton.innerHTML = "You win this round! Click this button to continue fighting!"; 
    } else if(result === 'lost') {
        winner.style.backgroundColor = 'rgba(0, 255, 0, 0.5)';
        loser.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
        resultButton.innerHTML = "Your fighter has been defeated! Click this button to fight again!"; 
    } else if (result === 'draw') {
        winner.style.backgroundColor = 'rgba(255, 174, 81, 1)';
        loser.style.backgroundColor = 'rgba(255, 174, 81, 1)';
        resultButton.innerHTML = "You are an even match! Click this button to move onto the next battle!"; 
    }
    
    resultButton.style.display = 'inline-block';
}

const getResult = (userScore, opponentScore, userBox, opponentBox) => {
    attributeChosen = true;
    if(userScore > opponentScore) {
        displayResult(userBox, opponentBox, 'win');
    } else if (userScore < opponentScore) {
        displayResult(opponentBox, userBox, 'lost');
    } else if (userScore === opponentScore) {
        displayResult(userBox, opponentBox, 'draw')
    } else {
        attributeChosen = true;
        resultButton.innerHTML = "That is not a valid option for either your figher or your opponent. Please click this box and pick another option.";
        resultButton.style.display = 'inline-block';
    }
}

for (let i=0; i<attributeBoxes.length; i++) {
    attributeBoxes[i].onclick = () => {
        const userValue = parseFloat(attributeBoxes[i].getAttribute('attribute-value'));
        const userName = attributeBoxes[i].getAttribute('attribute-name');
        const opponentAttribute = document.getElementById(`${userName}-${currentOpponent}`);
        const opponentValue = parseFloat(opponentAttribute.getAttribute('attribute-value'));
        if(!attributeChosen) {
            getResult(userValue, opponentValue, attributeBoxes[i], opponentAttribute);
        }
    }
}

startButton.onclick = () => {
    populateFighters();
    startButton.style.display = 'none';
    let randomNumber1 = getRandomNumber(totalFighters.length);
    let randomNumber2 = getRandomNumber(totalFighters.length);
    while (randomNumber2 === randomNumber1) {
        randomNumber2 = getRandomNumber(totalFighters.length);
    }
    currentOpponent = randomNumber2 + 1;
    shuffleDeck();
    displayStartingCards(randomNumber1, randomNumber2);
    console.log(usersFighters);
    console.log(opponentsFighters);
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
    opponentsFighters = totalFighters;
}

const displayStartingCards = (userNum, opponentNum) => {
    userCard = document.getElementById(`card-${userNum + 1}`);
    opponentCard = document.getElementById(`card-${opponentNum + 1}`);
    userCard.style.display = 'inline-block';
    opponentCard.style.display = 'inline-block';
}

resultButton.onclick = () => {
    userCard.style.display = '';
    opponentCard.style.display = '';
    startButton.style.display = '';
    resultButton.style.display = '';
    attributeChosen = false;
    for (let i=0; i<attributeBoxes.length; i++) {
        attributeBoxes[i].style.backgroundColor = '';
    }
    totalFighters = [];
    usersFighters = [];
    opponentsFighters = [];
}

/*
resultButton.onclick = () => {
    primaryGoodnessBox.style.backgroundColor = '';
    primaryHeightBox.style.backgroundColor = '';
    primaryRankingBox.style.backgroundColor = '';
    primarySkillBox.style.backgroundColor = '';
    primaryWeightBox.style.backgroundColor = '';
    opponentGoodnessBox.style.backgroundColor = '';
    opponentHeightBox.style.backgroundColor = '';
    opponentRankingBox.style.backgroundColor = '';
    opponentSkillBox.style.backgroundColor = '';
    opponentWeightBox.style.backgroundColor = '';
    opponentAttributes.style.display = '';
    attributeChosen = false;
    resultButton.style.display = '';
}

//Get The boxes which the user interacts with
const primaryHeightBox = document.getElementById('primary-height-box');
const primaryWeightBox = document.getElementById('primary-weight-box');
const primaryGoodnessBox = document.getElementById('primary-goodness-box');
const primarySkillBox = document.getElementById('primary-skill-box');
const primaryRankingBox = document.getElementById('primary-ranking-box');
const primaryRaceBox = document.getElementById('primary-race-box');

//Get the opponent attributes boxes
const opponentHeightBox = document.getElementById('opponent-height-box');
const opponentWeightBox = document.getElementById('opponent-weight-box');
const opponentGoodnessBox = document.getElementById('opponent-goodness-box');
const opponentSkillBox = document.getElementById('opponent-skill-box');
const opponentRankingBox = document.getElementById('opponent-ranking-box');
const opponentRaceBox = document.getElementById('opponent-race-box');

//Get the values from the users card and convert them to numbers
const primaryHeightScore = parseFloat(document.getElementById('primary-height-score').innerHTML);
const primaryWeightScore = parseFloat(document.getElementById('primary-weight-score').innerHTML);
const primaryGoodnessScore = parseFloat(document.getElementById('primary-goodness-score').innerHTML);
const primarySkillScore = parseFloat(document.getElementById('primary-skill-score').innerHTML);
const primaryRankingScore = parseFloat(document.getElementById('primary-ranking-score').innerHTML);

//Get the values from the opponent card and convert them to numbers
const opponentHeightScore = parseFloat(document.getElementById('opponent-height-score').innerHTML);
const opponentWeightScore = parseFloat(document.getElementById('opponent-weight-score').innerHTML);
const opponentGoodnessScore = parseFloat(document.getElementById('opponent-goodness-score').innerHTML);
const opponentSkillScore = parseFloat(document.getElementById('opponent-skill-score').innerHTML);
const opponentRankingScore = parseFloat(document.getElementById('opponent-ranking-score').innerHTML);

primaryHeightBox.onclick = () => {
    if (!attributeChosen) {
        getResult(primaryHeightScore, opponentHeightScore, primaryHeightBox, opponentHeightBox);
    }
}

primaryGoodnessBox.onclick = () => {
    if (!attributeChosen) {
        getResult(primaryGoodnessScore, opponentGoodnessScore, primaryGoodnessBox, opponentGoodnessBox);
    }
}

primarySkillBox.onclick = () => {
    if (!attributeChosen) {
        getResult(primarySkillScore, opponentSkillScore, primarySkillBox, opponentSkillBox);
    }
}

primaryRankingBox.onclick = () => {
    if (!attributeChosen) {
        getResult(primaryRankingScore, opponentRankingScore, primaryRankingBox, opponentRankingBox);
    }
}

primaryWeightBox.onclick = () => {
    if(!attributeChosen) {
        getResult(primaryWeightScore, opponentWeightScore, primaryWeightBox, opponentWeightBox);
    }
}

primaryRaceBox.onclick = () => {
    if(!attributeChosen) {
        getResult(primaryRaceBox, opponentRaceBox);
    }
}*/