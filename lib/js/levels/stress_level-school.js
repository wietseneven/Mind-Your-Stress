var stress = stress || {};
var level_school = level_school || {};
level_school = {
	name: 'school',
	obstacles: function (level) {

		level.schoolBooks = level.add.sprite(3000, stress.game.height - 100, 'school-books');
		level.schoolBooks.animations.add('right', [0, 1, 2, 3], 4, false);
		level.schoolBooks.scale.setTo(0.5, 0.5);
		level.stationary.add(level.schoolBooks);

		//	level.stationary.create(200, stress.dim.h() - 100, 'school-books');
	},
	update: function (level) {
		if (level.player.x > 2500) {
			level.schoolBooks.play('right');
		}
	}
};