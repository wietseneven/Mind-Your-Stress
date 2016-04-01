var stress = stress || {};
var level_work = level_work || {};

level_work = {
	name: 'work',
	music: 'workMusic',
	hordes: [],
	customDude: true,
	messages: function(level) {
		level.introtext = level.add.sprite(210, level.game.height - 460, 'work-intro');
		level.introtext.scale.setTo(0.3,0.3);
		level.introtext.animations.add('right', [0, 1, 2, 3], 0.3, false);
		level.introtext.fixedToCamera = true;
		level.introtext.play('right');
	},
	obstacles: function (level) {

		// level.hordes = level.add.sprite(3000, stress.game.height - 190, 'school-books');
		// level.hordes.animations.add('right', [0, 1, 2, 3], 4, false);
		// level.hordes.scale.setTo(0.5, 0.5);
		// level.obstacles.add(level.hordes);

		var x = 3000;
		for (var i = 0; i < 30; i++){
			if (x < 38000) {
				var bin = new this.horde(level, x);
				this.hordes.push(bin);
				x += stress.rand(3200, 1500);
			}
		}

		level.obstacles.callAll('animations.add', 'animations', 'abc', [0, 1, 2, 3, 4, 5], 8, true);
	},
	update: function (level) {
		if (level.player.x > 2500) {
			level.obstacles.callAll('animations.play', 'animations', 'abc');
		}
	},
	horde: function(level, x) {
		var books = level.add.sprite(x, stress.game.height - level.platformTop - 70, 'work-horde');
		books.scale.setTo(0.7, 0.7);
		level.obstacles.add(books);
	}
};