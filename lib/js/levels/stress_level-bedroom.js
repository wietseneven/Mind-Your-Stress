var stress = stress || {};
var level_bedroom = level_bedroom || {};
level_bedroom = {
	name: 'bedroom',
	images: function(level) {
		level.bedroomBed = level.add.image(100, 200, 'bedroom-bed');
		level.bedroomBed.scale.setTo(0.3,0.3);
	},
	obstacles: function (level) {

		level.bedroomBooks = level.add.sprite(3000, stress.game.height - 140, 'school-books');
		level.bedroomBooks.animations.add('right', [0, 1, 2, 3], 4, false);
		level.bedroomBooks.scale.setTo(0.5, 0.5);
		level.obstacles.add(level.bedroomBooks);


		level.laundryBin = level.add.sprite(1000, stress.game.height - 190, 'bedroom-laundryBin');
		level.laundryBin.animations.add('right', [0, 1, 2, 3, 4, 5, 6, 7, 8], 4, true);
		level.laundryBin.scale.setTo(0.2, 0.2);
		level.laundryBin.play('right');
		level.obstacles.add(level.laundryBin);


		level.laundryBin = level.add.sprite(1000, stress.game.height - 190, 'bedroom-laundryBin');
		level.laundryBin.animations.add('right', [0, 1, 2, 3, 4, 5, 6, 7, 8], 4, true);
		level.laundryBin.scale.setTo(0.2, 0.2);
		level.laundryBin.play('right');
		level.obstacles.add(level.laundryBin);

		level.laundryBin = level.add.sprite(7000, stress.game.height - 190, 'bedroom-laundryBin');
		level.laundryBin.animations.add('right', [0, 1, 2, 3, 4, 5, 6, 7, 8], 4, true);
		level.laundryBin.scale.setTo(0.2, 0.2);
		level.laundryBin.play('right');
		level.obstacles.add(level.laundryBin);

		level.laundryBin = level.add.sprite(10000, stress.game.height - 190, 'bedroom-laundryBin');
		level.laundryBin.animations.add('right', [0, 1, 2, 3, 4, 5, 6, 7, 8], 4, true);
		level.laundryBin.scale.setTo(0.2, 0.2);
		level.laundryBin.play('right');
		level.obstacles.add(level.laundryBin);
		//	level.obstacles.create(200, stress.dim.h() - 100, 'bedroom-books');
	},
	update: function (level) {
		if (level.player.x > 2500 && level.player.x < 2700) {
			level.bedroomBooks.play('right');
		}
	}
};