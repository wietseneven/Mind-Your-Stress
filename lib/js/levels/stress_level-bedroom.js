var stress = stress || {};
var level_bedroom = level_bedroom || {};
level_bedroom = {
	name: 'bedroom',
	music: 'relax',
	laundrybins: [],
	images: function(level) {
		level.bedroomBed = level.add.image(100, level.game.height - 290, 'bedroom-bed');
		level.bedroomBed.scale.setTo(0.3,0.3);

		// level.introtext = level.add.sprite(250, level.game.height - 430, 'bedroom-intro');
		// level.introtext.scale.setTo(0.3,0.3);
		// level.introtext.animations.add('right', [0, 1, 2, 3], 0.3, false);
		// level.introtext.fixedToCamera = true;
		// level.introtext.play('right');

		level.thoughLife = level.add.sprite(250, level.game.height - 430, 'level_notify-thoughlife');
		level.thoughLife.scale.setTo(0.3,0.3);
		level.thoughLife.fixedToCamera = true;
		level.thoughLife.alpha = 0;
	},
	obstacles: function (level) {

		level.bedroomBooks = level.add.sprite(3000, stress.game.height - level.platformTop - 40, 'school-books');
		level.bedroomBooks.animations.add('right', [0, 1, 2, 3], 4, false);
		level.bedroomBooks.scale.setTo(0.5, 0.5);
		//level.obstacles.add(level.bedroomBooks);

		var x = 2000;
		for (var i = 0; i < 15; i++){
			var bin = new this.laundryBin(level, x);
			this.laundrybins.push(bin);
			x += stress.rand(2000, 1500);
		}

		level.obstacles.callAll('animations.add', 'animations', 'low', [0, 1, 2], 4, true);
		level.obstacles.callAll('animations.add', 'animations', 'high', [6, 7, 8], 4, true);
	},
	update: function (level) {
		if (level.player.x > 2500 && level.player.x < 2700) {
			level.bedroomBooks.play('right');
		}

		var speedLevel = stress.global.speed / 1000;
		if (level.player.position.x > 600) {
			if (speedLevel < 0.8 || speedLevel > 1.2) {
				level.obstacles.callAll('animations.play', 'animations', 'high');
				level.thoughLife.alpha = 1;
			} else {
				level.obstacles.callAll('animations.play', 'animations', 'low');
				level.thoughLife.alpha = 0;
			}
		}
	},
	laundryBin: function(level, x) {
		var bin = level.add.sprite(x, stress.game.height - level.platformTop - 90, 'bedroom-laundryBin');
		bin.scale.setTo(0.2, 0.2);
		level.obstacles.add(bin);
	}
};