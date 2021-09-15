import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Musician from './js/musician';
import Battle from './js/battle';
// import Inventory from './js/inventory';

$(".audio").prop("volume", 0.2);

function confirmChorus(player, enemy) {
  player.attack(enemy);
  increasePlayerBar();
  $('#attack-description').text(`You play the chorus and gain ${player.hypeIncrease} hype!`)
}

function confirmFocus(player, enemy) {
  player.focus(enemy);
  increasePlayerBar();
  $('#attack-description').text(`You focus and prepare to drown out ${enemy.name}!`)
}

function confirmSolo(player) {
  player.solo();
  increasePlayerBar();
  $('#attack-description').text(`You prepare an awesome solo! Your next few bars will be extra hype!`)
}

function confirmFlourish(player, enemy) {
  player.flourish(enemy);
  increasePlayerBar();
  if (player.hypeIncrease > 1) {
    $('#attack-description').text(`You perform a stylish move and wow the crowd for ${player.hypeIncrease} hype!`)
  } else {
    $('#attack-description').text(`You flub your performance, only gaining a little hype.`)
  }
}

function assignConfirm(button, player, enemy) {
  $('#confirm-btn').unbind();
  switch (button) {
    case 'chorus':
      $('#confirm-btn').on("click", function () {
        confirmChorus(player, enemy)
      });
      break;
    case 'focus':
      $('#confirm-btn').on("click", function () {
        confirmFocus(player, enemy)
      });
      break;
    case 'solo':
      $('#confirm-btn').on("click", function () {
        confirmSolo(player)
      });
      break;
    case 'flourish':
      $('#confirm-btn').on("click", function () {
        confirmFlourish(player, enemy)
      });
  }
  $('#confirm-btn').on("click", function () {
    $('#enemy-turn-btn').show();
    $('#confirm-btn').hide();
  });
}

function increasePlayerBar() {
  $('#player-hype').css("width", player.hype + "%")
    .attr("aria-valuenow", player.hype)
    .text(player.hype + "% Complete");
}

function enemyActionOutput(enemy) {
  switch (enemy.lastAction) {
    case 'chorus':
      $('#attack-description').text(`${enemy.name} plays a chorus for ${enemy.hypeIncrease} hype!`);
      break;
    case 'focus':
      $('#attack-description').text(`${enemy.name} focuses to drown out your song!`);
      break;
    case 'flourish':
      if (enemy.hypeIncrease > 1) {
        $('#attack-description').text(`${enemy.name} plays a stylish flourish for ${enemy.hypeIncrease} hype!`);
      } else {
        $('#attack-description').text(`${enemy.name} attempts a stylish performance and fails, only gaining a little hype.`);
      }
      break;
    case 'solo':
      $('#attack-description').text(`${enemy.name} is preparing a solo! Their next attack will be extra hype!`);
      break;
  }
}

function battleStatus(battleIndex, battle) {
  if (battle.won) {
    //display a win page/statement
    battleIndex += 1;
  }
  if (battle.lost) {
    // display lose page
  }
}

// $(document).ready(function () {
// $('#intro-form').submit(function () {
// event.preventDefault();
let inputName = $('#name').val();
let player = new Musician(inputName, 5, 3, 5, 1, 1, [], [], true);
let bestie = new Musician("Shaggy", 5, 3, 5, 1, 100, [], [], false);
let grrrrl = new Musician("Astra", 1, 1, 1, 1, 1, [], [], false);
let steve = new Musician("Steve", 1, 1, 1, 1, 1, [], [], false);
let genesis = new Musician("1GI Genesis", 1, 1, 1, 1, 1, [], [], false);
let garageBattle = new Battle(player, bestie, 1);
let metalBattle = new Battle(player, grrrrl, 2);
let countryBattle = new Battle(player, steve, 3);
let kpopBattle = new Battle(player, genesis, 4);
let battles = [garageBattle, metalBattle, countryBattle, kpopBattle];
let battleIndex = 0;
let currentEnemy = battles[battleIndex].enemy;
$('.phase1').hide();
$('.phase2').show();
$('.player-name').text(player.name);
$('.enemy-name').text(currentEnemy.name);
let enemyProgress = 0;

//fix buttons, clear data from confirm button

$('#chorus-btn').click(function () {
  $('#attack-description').text('Sing the chorus and gain some hype!');
  assignConfirm("chorus", player, currentEnemy);
});

$('#focus-btn').click(function () {
  $('#attack-description').text('Focus to outshine the enemy and lower their hype gain!');
  assignConfirm('focus', player, currentEnemy);
});

$('#solo-btn').click(function () {
  $('#attack-description').text('Prepare an awesome solo for double the hype!');
  assignConfirm('solo', player, currentEnemy);
});

$('#flourish-btn').click(function () {
  $('#attack-description').text('Do a risky stylish flourish for extra hype!');
  assignConfirm('flourish', player, currentEnemy);
});

$('#enemy-turn-btn').click(function () {
  battleStatus(battleIndex, battles[battleIndex]);
  battles[battleIndex].nextTurn();
  currentEnemy.bossAction(player);
  enemyActionOutput(currentEnemy);
  enemyProgress += currentEnemy.hypeIncrease;
  $('#enemy-hype').css("width", enemyProgress + "%")
    .attr("aria-valuenow", enemyProgress)
    .text(enemyProgress + "% Complete");
  $('#enemy-turn-btn').hide();
  $('#player-turn-btn').show();
});

$('#player-turn-btn').click(function () {
  battleStatus(battleIndex, battles[battleIndex]);
  battles[battleIndex].nextTurn();
  $('#player-turn-btn').hide();
  $('#confirm-btn').show();
});
  // });
// });
// confirm button => actually run the attack you selected, displays info to text box, then hide itself and show next turn button

//enemy turn button => run battle.nextTurn(), run enemy.bossAction(player), output result of boss action to text box, then hide and show player turn button

//player turn button => run battle.nextTurn(), hide itself and show confirm/action buttons