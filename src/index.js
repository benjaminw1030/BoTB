import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Musician from './js/musician';
import Battle from './js/battle';
import Inventory from './js/inventory';

$(".audio").prop("volume", 0.2);

$(document).ready(function () {
  $('#intro-form').submit(function (event) {
    event.preventDefault();
    let inputName = $('#name').val();
    let player = new Musician(inputName, 1, 1, 1, 1, 1, [], [], true);
    let bestie = new Musician("Shaggy", 5, 5, 1, 1, 100, [], [], false);
    let grrrrl = new Musician("Astra", 1, 1, 1, 1, 1, [], [], false);
    let steve = new Musician("Steve", 1, 1, 1, 1, 1, [], [], false);
    let genesis = new Musician("1GI Genesis", 1, 1, 1, 1, 1, [], [], false);
    let garageBattle = new Battle(player, bestie, 1);
    let metalBattle = new Battle(player, grrrrl, 2);
    let countryBattle = new Battle(player, steve, 3);
    let kpopBattle = new Battle(player, genesis, 4);
    let battles = [garageBattle, metalBattle, countryBattle, kpopBattle];
    let battleIndex = 0;
    $('.phase1').hide();
    $('.phase2').show();
    $('#enemy.name').text(battles[battleIndex].enemy.name);
  });
  let currentProgress = 0;
  $('#attack-button').click(function () {
  });
  $('#confirm-btn').click(function () {
    currentProgress += 10;
    $('#player-hype').css("width", currentProgress + "%")
      .attr("aria-valuenow", currentProgress)
      .text(currentProgress + "% Complete");
    // if (current_progress >= 100) {
    // }
  });



});

// confirm button => actually run the attack you selected, displays info to text box, then hide itself and show next turn button

//enemy turn button => run battle.nextTurn(), run enemy.bossAction(player), output result of boss action to text box, then hide and show player turn button

//player turn button => run battle.nextTurn(), hide itself and show confirm/action buttons