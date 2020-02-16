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

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var j = 1; j < arr.length; j++) {
    if (arr[j] > maxElement) {
      maxElement = arr[j];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + HISTOGRAM_GAP, CLOUD_Y + HISTOGRAM_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + HISTOGRAM_GAP, CLOUD_Y + HISTOGRAM_GAP + LINE_HEIGHT + LINE_GAP);

  var maxTime = getMaxElement(times);
  var RED_COLOR = 'rgba(255, 0, 0, 1)';
  var getRandom = function () {
    return Math.round(100 * Math.random());
  };

  var generateBlue = function () {
    return 'hsl(235, ' + getRandom() + '%, 27%)';
  };

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - HISTOGRAM_GAP - LINE_GAP * 2 - Math.round(times[i]) * HISTOGRAM_HEIGHT / maxTime);
    if (names[i] === 'Вы') {
      ctx.fillStyle = RED_COLOR;
    } else {
      ctx.fillStyle = generateBlue();
    }
    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - HISTOGRAM_GAP - times[i] * HISTOGRAM_HEIGHT / maxTime, BAR_WIDTH, times[i] * HISTOGRAM_HEIGHT / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - HISTOGRAM_GAP + LINE_HEIGHT + LINE_GAP);
  }
};
