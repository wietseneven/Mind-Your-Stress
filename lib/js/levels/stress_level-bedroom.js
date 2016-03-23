var stress = stress || {};
var level_bedroom = level_bedroom || {};
level_bedroom = {
	name: 'bedroom',
	music: 'relax',
	images: function(level) {
		level.bedroomBed = level.add.image(100, 200, 'bedroom-bed');
		level.bedroomBed.scale.setTo(0.3,0.3);
	},
	obstacles: function (level) {

		level.bedroomBooks = level.add.sprite(3000, stress.game.height - 140, 'school-books');
		level.bedroomBooks.animations.add('right', [0, 1, 2, 3], 4, false);
		level.bedroomBooks.scale.setTo(0.5, 0.5);
		level.obstacles.add(level.bedroomBooks);

		var x = 1000;
		for (var i = 0; i < 15; i++){
			level.laundryBin = level.add.sprite(x, stress.game.height - 190, 'bedroom-laundryBin');
			level.laundryBin.animations.add('right', [0, 1, 2, 3, 4, 5, 6, 7, 8], 4, true);
			level.laundryBin.scale.setTo(0.2, 0.2);
			level.laundryBin.play('right');
			level.obstacles.add(level.laundryBin);

			x += stress.rand(2500, 1000);
		}
	},
	update: function (level) {
		if (level.player.x > 2500 && level.player.x < 2700) {
			level.bedroomBooks.play('right');
		}
	}
};