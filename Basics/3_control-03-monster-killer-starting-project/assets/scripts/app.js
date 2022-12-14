const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = 'ATTACK'; // MODE_ATTACK = 0
const MODE_STRONG_ATTACK = 'STRONG_ATTACK'; // MODE_STRONG_ATTACK = 1

const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

function getMaxLifeValues(){
  const enteredValue = prompt('Maximum life for you and the monster', '100'); 
  // prompt(message, defaultValue)

  const parsedvalue = parseInt(enteredValue); 
  // 'ParseInt' converts its first argument to a string,
  // parses that string, then returns and interger or 'NaN'.
  if (isNaN(parsedvalue) || parsedvalue <= 0){
    throw {message: 'Invalid user input, not a number!'} // Error handling mechanism.
    //'Throw' throws and new error, as a number, a string or an object. 
  }
  return parsedvalue
}

let choseenMaxLife

try { // We can use Try.. catch or Try.. finally, but always we have to use try
  choseenMaxLife = getMaxLifeValues(); // IF this fail...
} catch (error){ // ...This here will execute. 
  console.log(error);
  choseenMaxLife = 100;
  alert('You entered something wrong, default value of 100 was used')
  // throw error; - If we rethrow, the code theereafter doesn´t execute and ONLY finally will.
} finally { 
// The advantage of finally is that it executes even if we do throw and error.
}

let battleLog = [];
let lastLoggedEntry;


let currentMonsterHealth = choseenMaxLife;
let currentPlayerHealth = choseenMaxLife;
let hasBonusLife = true;

adjustHealthBars(choseenMaxLife);

function writeToLog(ev, val, monsterHealth, playerHealth) {
  let logEntry = {
    event: ev,
    value: val,
    finalMonsterHealth: monsterHealth,
    finalPlayerHealth: playerHealth  
  };
  switch (ev){
    case LOG_EVENT_PLAYER_ATTACK:
      logEntry.target = 'MONSTER';
      break;
    case LOG_EVENT_PLAYER_STRONG_ATTACK:
    logEntry = {
      event: ev,
      value: val,
      target: 'MONSTER',
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth  
    };
      break;
    case LOG_EVENT_MONSTER_ATTACK:
    logEntry = {
      event: ev,
      value: val,
      target: 'PLAYER',
      finalMonsterHealth: monsterHealth,
      finalPlayerHealth: playerHealth  
    };
      break;
    case LOG_EVENT_PLAYER_HEAL:
      logEntry = {
        event: ev,
        value: val,
        target: 'PLAYER',
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth  
      };
      break;
    case LOG_EVENT_GAME_OVER:
      logEntry = {
        event: ev,
        value: val,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth  
      };
      break;
    default:
      logEntry = {};
  }

  // if (ev === LOG_EVENT_PLAYER_ATTACK) {
  //   logEntry.target = 'MONSTER';
  // } else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {
  //   logEntry = {
  //     event: ev,
  //     value: val,
  //     target: 'MONSTER',
  //     finalMonsterHealth: monsterHealth,
  //     finalPlayerHealth: playerHealth  
  //   };
  // } else if (ev === LOG_EVENT_MONSTER_ATTACK) {
  //   logEntry = {
  //     event: ev,
  //     value: val,
  //     target: 'PLAYER',
  //     finalMonsterHealth: monsterHealth,
  //     finalPlayerHealth: playerHealth  
  //   };
  // } else if (ev === LOG_EVENT_PLAYER_HEAL) {
  //   logEntry = {
  //     event: ev,
  //     value: val,
  //     target: 'PLAYER',
  //     finalMonsterHealth: monsterHealth,
  //     finalPlayerHealth: playerHealth  
  //   };
  // } else if (ev === LOG_EVENT_GAME_OVER) {
  //   logEntry = {
  //     event: ev,
  //     value: val,
  //     finalMonsterHealth: monsterHealth,
  //     finalPlayerHealth: playerHealth  
  //   };
  // }
  battleLog.push(logEntry)
}


function reset(){
  currentMonsterHealth = choseenMaxLife;
  currentPlayerHealth = choseenMaxLife;
  resetGame(choseenMaxLife);
}

function endRound (){
  const initialPlayerHealth = currentPlayerHealth
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  writeToLog(
    LOG_EVENT_MONSTER_ATTACK,
    playerDamage,
    currentMonsterHealth,
    currentPlayerHealth
  );

  if (currentPlayerHealth <= 0 && hasBonusLife){
  hasBonusLife = false;
  removeBonusLife();
  currentPlayerHealth = initialPlayerHealth;
  setPlayerHealth(initialPlayerHealth)
  alert('The bonus life saved you!')
  }

  if (currentMonsterHealth <=0 && currentPlayerHealth > 0){
    alert('You Won!');
    writeToLog(
      LOG_EVENT_GAME_OVER,
      'PLAYER WON',
      currentMonsterHealth,
      currentPlayerHealth
      );
  } else if (currentPlayerHealth <=0 && currentMonsterHealth > 0) {
    alert('You Lost!');
    writeToLog(
      LOG_EVENT_GAME_OVER,
      'MONSTER WON',
      currentMonsterHealth,
      currentPlayerHealth
      );
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert("It's a draw");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      'A DRAW',
      currentMonsterHealth,
      currentPlayerHealth
      );
    };
  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    reset();
  }
}

function atackMonster(mode) {
  let maxDamage;
  let logEvent;
  if(mode === MODE_ATTACK ){
    maxDamage = ATTACK_VALUE;
    logEvent = LOG_EVENT_PLAYER_ATTACK;
  } else if (mode === MODE_STRONG_ATTACK){
    maxDamage = STRONG_ATTACK_VALUE
    logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  writeToLog(
    logEvent,
    damage,
    currentMonsterHealth,
    currentPlayerHealth
  )
  endRound();
}

function attackHandler() {
  atackMonster(MODE_ATTACK)
  }

function strongAttackHandler (){
  atackMonster(MODE_STRONG_ATTACK)
}

function healPlayerHandler(){
  let healValue;
  if (currentPlayerHealth >= choseenMaxLife - HEAL_VALUE){
    alert("You can't heal to more than your max initial health" );
    healValue = choseenMaxLife - currentPlayerHealth
  } else {
    healValue = HEAL_VALUE
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  writeToLog(
    LOG_EVENT_PLAYER_HEAL,
    healValue,
    currentMonsterHealth,
    currentPlayerHealth
  )
  endRound();
}

// For loop: Execute code a certain amount of times (with counter variables).
// With that we define that a certain part of the code should run any time. 
// While loop: Execute code as long as a certain condition is true and only,
// if that condition is somehow set to false, exit out of the loop.

function printLogHandler() {
  for (let i = 0; i < 3; i++){
    console.log('--------');
  }
  let j = 3;
  do {
    console.log(j);
    j++;
  } while (j < 3);
  // for (let i = 10; i > 0;) {
  //   i--;
  //   console.log(i);
  // }
  // for (let i = 0; i < battleLog.length; i++){
  //   console.log(battleLog[i])
  // }
  let i = 0
  for (const logEntry of battleLog){
    if (!lastLoggedEntry && lastLoggedEntry !== 0 || lastLoggedEntry < i){ // If 'lastLoggedEntry' is not set (falsy value)
      console.log(`#${i}`);
      for (const key in logEntry){
        console.log(`${key} => ${logEntry[key]}`)
      }
      lastLoggedEntry = i;
      break; // Break Tells JS, stop the loop execution of the loop.
      // If we run the code this way, we only see that very first event.
    }
    i++;
  }
  // for (const logEntry of battleLog){
  //   console.log(logEntry);
  // //   console.log(i);
  // //   i++;
  // }
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler)
logBtn.addEventListener('click', printLogHandler)
