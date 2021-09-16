import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Musician from './js/musician';
import Battle from './js/battle';
import { shaggiLines, metalLines, countryLines, kpopLines, endLines, shaggiBattleLines, metalBattleLines, countryBattleLines, kpopBattleLines} from './js/dialog';
// import Inventory from './js/inventory';

$(".audio").prop("volume", 0.2);
$(".victory-theme").prop("volume", 0.5);

function confirmChorus(player, enemy) {
  player.attack(enemy);
  increasePlayerBar(player);
  $('#attack-description').text(`You play the chorus and gain ${player.hypeIncrease} hype!`);
  $('#dialogue-text').text(`${enemy.getQuote()}`);
}

function confirmFocus(player, enemy) {
  player.focus(enemy);
  increasePlayerBar(player);
  $('#attack-description').text(`You focus and prepare to drown out ${enemy.name}!`);
  $('#dialogue-text').text(`${enemy.getQuote()}`);
}

function confirmSolo(player, enemy) {
  player.solo();
  increasePlayerBar(player);
  $('#attack-description').text(`You prepare an awesome solo! Your next few bars will be extra hype!`);
  $('#dialogue-text').text(`${enemy.getQuote()}`);
}

function confirmFlourish(player, enemy) {
  player.flourish(enemy);
  increasePlayerBar(player);
  if (player.hypeIncrease > 1) {
    $('#attack-description').text(`You perform a stylish move and wow the crowd for ${player.hypeIncrease} hype!`);
    $('#dialogue-text').text(`${enemy.getQuote()}`);
  } else {
    $('#attack-description').text(`You flub your performance, only gaining a little hype.`);
    $('#dialogue-text').text("Oof. And you wanna be a star?");
  }
}

function assignConfirm(button, player, enemy) {
  $('#confirm-btn').unbind();
  switch (button) {
    case 'chorus':
      $('#confirm-btn').on("click", function () {
        confirmChorus(player, enemy);
      });
      break;
    case 'focus':
      $('#confirm-btn').on("click", function () {
        confirmFocus(player, enemy);
      });
      break;
    case 'solo':
      $('#confirm-btn').on("click", function () {
        confirmSolo(player);
      });
      break;
    case 'flourish':
      $('#confirm-btn').on("click", function () {
        confirmFlourish(player, enemy);
      });
  }
  $('#confirm-btn').on("click", function () {
    $('#enemy-turn-btn').show();
    $('#confirm-btn').hide();
    $('#confirm-btn').unbind();
  });
}

function increasePlayerBar(player) {
  $('#player-hype').css("width", player.hype + "%")
    .attr("aria-valuenow", player.hype)
    .text(player.hype + "% Complete");
}

function increaseEnemyBar(enemy) {
  $('#enemy-hype').css("width", enemy.hype + "%")
    .attr("aria-valuenow", enemy.hype)
    .text(enemy.hype + "% Complete");
}

function displayCurrentEnemy(enemy) {
  $('.enemy').hide();
  switch (enemy.name) {
    case 'Shaggi':
      $('.shaggi').show();
      break;
    case 'Astra':
      $('.astra').show();
      break;
    case 'Steve':
      $('.steve').show();
      break;
    case 'Genesis':
      $('.genesis').show();
      break;
  }
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

function battleStatus(player, enemy, battleIndex, battles) {
  if (battles[battleIndex].won === true) {
    $('.battle-phase').hide();
    $('.prep-phase').show();
    player.bandmates.push(enemy.name);
    player.hype = 0;
    increasePlayerBar(player);
    increaseEnemyBar(enemy);
  // } else if (battles[battleIndex].won === true && battleIndex === 4) {
  //   $('.prep-phase').hide();
  //   $('.battle-phase').hide();
  //   $('.start-phase').hide();
  //   $('#victory-screen').show();
  } else if (battles[battleIndex].lost === true) {
    $('.prep-phase').hide();
    $('.battle-phase').hide();
    $('.start-phase').hide();
    $('#game-over').show();
  }
}

function getDialogue(enemy, line) {
  let dialog = enemy.dialog.get(line);
  $(`#dialogue-output`).text(`${dialog}`);
  if (enemy.dialog.size === line && enemy.name === "end") {
    $('.prep-phase').hide();
    $('#victory-screen').show();
  }
  else if (enemy.dialog.size === line) {
    $('#next-btn').hide();
    $('#skip-btn').hide();
    $('#lets-jam-btn').show();
  }
}

function resetButtons() {
  $('#next-btn').show();
  $('#skip-btn').show();
  $('#lets-jam-btn').hide();
  $('#player-turn-btn').hide();
  $('#enemy-turn-btn').hide();
  $('#confirm-btn').show();
}

$(document).ready(function () {
  $('#intro-form').submit(function () {
    event.preventDefault();
    let inputName = $('#name-input').val();
    let player = new Musician(inputName, 1000, 3, 5, 1, 1, [], {});
    let bestie = new Musician("Shaggi", 5, 3, 5, 1, 100, [], shaggiLines, shaggiBattleLines);
    let grrrrl = new Musician("Astra", 1, 1, 1, 1, 1, [], metalLines, metalBattleLines);
    let steve = new Musician("Steve", 1, 1, 1, 1, 1, [], countryLines, countryBattleLines);
    let genesis = new Musician("Genesis", 1, 1, 1, 1, 1, [], kpopLines, kpopBattleLines);
    let end = new Musician("end", 1, 1, 1, 1, 1, [], endLines);
    let garageBattle = new Battle(player, bestie, 1);
    let metalBattle = new Battle(player, grrrrl, 2);
    let countryBattle = new Battle(player, steve, 3);
    let kpopBattle = new Battle(player, genesis, 4);
    let final = new Battle(player, end, 5);
    let battles = [garageBattle, metalBattle, countryBattle, kpopBattle, final];
    let battleIndex = 0;
    let currentEnemy = battles[battleIndex].enemy;
    let line = 1;
    $('.start-phase').hide();
    $('.prep-phase').show();
    $('.player-name').text(player.name);
    $('.enemy-name').text(currentEnemy.name);
    displayCurrentEnemy(currentEnemy);
    getDialogue(currentEnemy, line);
    line++;

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
      battles[battleIndex].nextTurn();
      battleStatus(player, currentEnemy, battleIndex, battles);
      if (battles[battleIndex].won === true) {
        battleIndex++;
        currentEnemy = battles[battleIndex].enemy;
        resetButtons();
        $('.enemy-name').text(currentEnemy.name);
        getDialogue(currentEnemy, line);
        line++;
        displayCurrentEnemy(currentEnemy);
        $('#dialogue-text').text("");
        $('#attack-description').text("");
      } else {
        currentEnemy.bossAction(player);
        enemyActionOutput(currentEnemy);
        increaseEnemyBar(currentEnemy);
        $('#enemy-turn-btn').hide();
        $('#player-turn-btn').show();
      }
    });

    $('#player-turn-btn').click(function () {
      battles[battleIndex].nextTurn();
      battleStatus(player, currentEnemy, battleIndex, battles);
      if (battles[battleIndex].lost === true) {
        battleIndex++;
        currentEnemy = battles[battleIndex].enemy;
      }
      $('#player-turn-btn').hide();
      $('#confirm-btn').show();
    });

    $('#next-btn').click(function () {
      getDialogue(currentEnemy, line);
      line++;
    });

    $('.game-over-btn').click(function () {
      location.reload();
    });

    $('.battle-ready').click(function () {
      line = 1;
      $(".prep-phase").hide();
      $(".battle-phase").show();
    });
  });
});