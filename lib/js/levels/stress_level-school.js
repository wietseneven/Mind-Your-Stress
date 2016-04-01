var stress = stress || {};
var level_school = level_school || {};
level_school = {
	name: 'school',
	music: 'schoolMusic',
	schoolbooks: [],
	images: function() {

	},
	messages: function(level) {
		level.introtext = level.add.sprite(210, level.game.height - 460, 'school-intro');
		level.introtext.scale.setTo(0.3,0.3);
		level.introtext.animations.add('right', [0, 1, 2, 3], 0.3, false);
		level.introtext.fixedToCamera = true;
		level.introtext.play('right');
	},
	obstacles: function (level) {

		// level.schoolBooks = level.add.sprite(3000, stress.game.height - 190, 'school-books');
		// level.schoolBooks.animations.add('right', [0, 1, 2, 3], 4, false);
		// level.schoolBooks.scale.setTo(0.5, 0.5);
		// level.obstacles.add(level.schoolBooks);

		var x = 3000;
		for (var i = 0; i < 30; i++){
			if (x < 38000) {
				var bin = new this.schoolBooks(level, x);
				this.schoolbooks.push(bin);
				x += stress.rand(2800, 1200);
			}
		}
		level.obstacles.callAll('animations.add', 'animations', 'abc', [0, 1, 2, 3], 4, true);
		//level.obstacles.callAll('animations.add', 'animations', 'low', [0, 1, 2], 4, true);
		//level.schoolbooks.callAll('animations.add', 'animations', 'high', [6, 7, 8], 4, true);

		//	level.stationary.create(200, stress.dim.h() - 100, 'school-books');
	},
	update: function (level) {
		if (level.player.x > 2500) {
			level.obstacles.callAll('animations.play', 'animations', 'abc');
		}
	},
	schoolBooks: function(level, x) {
		var books = level.add.sprite(x, stress.game.height - level.platformTop - 60, 'school-books');
		books.scale.setTo(0.7, 0.7);
		level.obstacles.add(books);
	}
};	