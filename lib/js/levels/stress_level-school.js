var stress = stress || {};
var level_school = level_school || {};
level_school = {
	name: 'school',
	images: function(level) {
		level.introtext = level.add.sprite(250, level.game.height - 340, 'school-intro');
		level.introtext.scale.setTo(0.3,0.3);
		level.introtext.animations.add('right', [0, 1, 2, 3], 0.3, false);
		level.introtext.fixedToCamera = true;
		level.introtext.play('right');
	},
	obstacles: function (level) {

		level.schoolBooks = level.add.sprite(3000, stress.game.height - 190, 'school-books');
		level.schoolBooks.animations.add('right', [0, 1, 2, 3], 4, false);
		level.schoolBooks.scale.setTo(0.5, 0.5);
		level.stationary.add(level.schoolBooks);

		//	level.stationary.create(200, stress.dim.h() - 100, 'school-books');
	},
	update: function (level) {
		if (level.player.x > 2500) {
			level.schoolBooks.play('right');
		}
	},
	secondsTimer: function (level, time) {

	}
};	