var stress = stress || {};
var Phaser = Phaser || {};

stress.dim = {
	w: function () {
		var w = window.innerWidth;
		if (w > 736) { return 736; } else { return w; }
	},
	h: function () {
		var h = window.innerHeight;
		if (h > 441) { return 441; } else { return h; }
	}
};

stress.game = new Phaser.Game(stress.dim.w(), stress.dim.h(), Phaser.CANVAS, 'game');

stress.global = {
	level: 0,
	speed: 500
};

stress.game.state.add('Preload', stress.Preload);
stress.game.state.add('MainMenu', stress.MainMenu);
stress.game.state.add('Level', stress.Level);

stress.game.state.start('Preload');