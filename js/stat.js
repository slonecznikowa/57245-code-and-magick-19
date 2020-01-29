'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var LINE_HEIGHT = 16;
var LINE_GAP = 5;
var HISTOGRAM_GAP = 25;
var HISTOGRAM_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var MAX_POINTS = 4025;
var YOU_POINTS = 2725;
var KEKS_POINTS = 4025;
var KATYA_POINTS = 1244;
var IGOR_POINTS = 1339;


/*var barHeightYou = (YOU_POINTS * HISTOGRAM_HEIGHT / MAX_POINTS);
var barHeightKeks = (KEKS_POINTS * HISTOGRAM_HEIGHT / MAX_POINTS);
var barHeightKatya = (KATYA_POINTS * HISTOGRAM_HEIGHT / MAX_POINTS);
var barHeightIgor = (IGOR_POINTS * HISTOGRAM_HEIGHT / MAX_POINTS);*/



//Облако с тенью
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  // Текст - поздравление
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + HISTOGRAM_GAP, CLOUD_Y + HISTOGRAM_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + HISTOGRAM_GAP, CLOUD_Y + HISTOGRAM_GAP + LINE_HEIGHT + LINE_GAP);

  // Вы
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  var playerIndex = 0;
  var playerName = 'Вы';
  var playerPoints = 2725;
  var playerBarHeight = YOU_POINTS * HISTOGRAM_HEIGHT / MAX_POINTS;

  /*var players = ['Вы', 'Кекс', 'Катя', 'Игорь'];

  for (var i = 0; i < players.length; i++) {




  }*/









  ctx.fillText(playerPoints, CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * playerIndex, CLOUD_HEIGHT - HISTOGRAM_GAP - LINE_GAP * 2 - playerBarHeight); // Поправила


  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * playerIndex, CLOUD_HEIGHT - HISTOGRAM_GAP - playerBarHeight, BAR_WIDTH, playerBarHeight); // Поправила

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText(playerName, CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * playerIndex, CLOUD_HEIGHT - HISTOGRAM_GAP + LINE_HEIGHT + LINE_GAP); // Поправила



  // Кекс
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  var playerIndex = 1;
  var playerName = 'Кекс';
  var playerPoints = 4025;
  var playerBarHeight = KEKS_POINTS * HISTOGRAM_HEIGHT / MAX_POINTS;


  ctx.fillText(playerPoints, CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * playerIndex, CLOUD_HEIGHT - HISTOGRAM_GAP - LINE_GAP * 2 - playerBarHeight); // Поправила

  ctx.fillStyle = 'hsl(235, 97%, 27%, 1)';
  ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * playerIndex, CLOUD_HEIGHT - HISTOGRAM_GAP - playerBarHeight, BAR_WIDTH, playerBarHeight); // Поправила

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText(playerName, CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * playerIndex, CLOUD_HEIGHT - HISTOGRAM_GAP + LINE_HEIGHT + LINE_GAP); // Поправила



  // Катя
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  var playerIndex = 2;
  var playerName = 'Катя';
  var playerPoints = 1244;
  var playerBarHeight = KATYA_POINTS * HISTOGRAM_HEIGHT / MAX_POINTS;


  ctx.fillText(playerPoints, CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * playerIndex, CLOUD_HEIGHT - HISTOGRAM_GAP - LINE_GAP * 2 - playerBarHeight); // Поправила

  ctx.fillStyle = 'hsl(240, 4%, 62%, 1)';
  ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * playerIndex, CLOUD_HEIGHT - HISTOGRAM_GAP - playerBarHeight, BAR_WIDTH, playerBarHeight); // Поправила

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText(playerName, CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * playerIndex, CLOUD_HEIGHT - HISTOGRAM_GAP + LINE_HEIGHT + LINE_GAP); // Поправила

  // Игорь
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  var playerIndex = 3;
  var playerName = 'Игорь';
  var playerPoints = 1339;
  var playerBarHeight = IGOR_POINTS * HISTOGRAM_HEIGHT / MAX_POINTS;

  ctx.fillText(playerPoints, CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * playerIndex, CLOUD_HEIGHT - HISTOGRAM_GAP - LINE_GAP * 2 - playerBarHeight); // Поправила

  ctx.fillStyle = 'hsl(238, 11%, 45%, 1)';
  ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * playerIndex, CLOUD_HEIGHT - HISTOGRAM_GAP - playerBarHeight, BAR_WIDTH, playerBarHeight); // Поправила

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText(playerName, CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * playerIndex, CLOUD_HEIGHT - HISTOGRAM_GAP + LINE_HEIGHT + LINE_GAP); // Поправила



};

