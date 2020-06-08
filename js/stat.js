'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var MAX_BAR_HEIGHT = 150;
var barGapY = 100;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {

  ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.shadowColor = 'transparent';
  ctx.fillStyle = '#000';

  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var heightBar = MAX_BAR_HEIGHT * times[i] / maxTime;
    var topMarginBar = MAX_BAR_HEIGHT - heightBar + barGapY;
    var columnGap = CLOUD_X + BAR_GAP + (BAR_GAP - 5) * 2 * i;


    if (players[i] === 'Вы') {
      ctx.fillStyle = 'hsl(0, 100%, 50%)';
    } else {
      var saturate = Math.floor(Math.random() * (100 - 0)) + 1 + '%';
      ctx.fillStyle = 'hsl(240,' + saturate + ', 50%, 1)';
    }

    ctx.shadowColor = 'transparent';

    ctx.fillRect(columnGap, topMarginBar, BAR_WIDTH, heightBar);
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], columnGap, topMarginBar + heightBar + 20);
    ctx.fillText(Math.round(times[i]), columnGap, topMarginBar - 10);
  }
};

