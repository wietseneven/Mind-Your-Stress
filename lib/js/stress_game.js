var stress = stress || {};

stress.dim = {
	w: function () {
		var w = window.innerWidth;
		if (w > 736) { return 736 } else { return w	}
	},
	h: function () {
		var h = window.innerHeight;
		if (h > 441) { return 441 } else { return h }
	}
};

stress.game = new Phaser.Game(stress.dim.w(), stress.dim.h(), Phaser.CANVAS, 'game');

var global = {
	scene: 0,
	sceneName: function () {
		return this.scenes[this.scene].name;
	},
	scenes: [home]
};


var gameWorld = [];
var randomTile = 0;
var timer = 0;
var randomColor = 0;
var frame = "";
var color = "";
var delay = 0;
var gameFrame = 0;
var stress_frames = 0;
var stress_colors = 0;
var gameState = { color: "", position: 0 };
var Score = 0;
var scoreString = 'Your Score is ';
var rightOrWrong = "";
var scoreText;
var messageText;
var stressText;
var stress_text = 'number of frames back is ';


stress.game.state.add('Preload', stress.Preload);
stress.game.state.add('MainMenu', stress.MainMenu);
stress.game.state.add('Level', stress.Level);

stress.game.state.start('Preload');