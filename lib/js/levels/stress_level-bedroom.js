var stress = stress || {};
var level_bedroom = level_bedroom || {};
level_bedroom = {
	name: 'bedroom',
	obstacles: function (level) {

		level.bedroomBooks = level.add.sprite(3000, stress.game.height - 100, 'bedroom-books');
		level.bedroomBooks.animations.add('right', [0, 1, 2, 3], 4, false);
		level.bedroomBooks.scale.setTo(0.5, 0.5);
		level.stationary.add(level.bedroomBooks);

		//	level.stationary.create(200, stress.dim.h() - 100, 'bedroom-books');
	},
	update: function (level) {
		if (level.player.x > 2500) {
			level.bedroomBooks.play('right');
		}
	}
};