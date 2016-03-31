var stress = stress || {};
var Phaser = Phaser || {};
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

		var x = 2000;
		for (var i = 0; i < 30; i++){
			if (x < 38000) {
				var bin = new this.laundryBin(level, x);
				this.laundrybins.push(bin);
				x += stress.rand(2800, 1200);
			}
		}

		level.obstacles.callAll('animations.add', 'animations', 'low', [0, 1, 2], 4, true);
		level.obstacles.callAll('animations.add', 'animations', 'high', [6, 7, 8], 4, true);
	},
	update: function (level) {

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
		var bin = level.add.sprite(x, stress.game.height - level.platformTop - 130, 'bedroom-laundryBin');
		bin.scale.setTo(0.3, 0.3);
		stress.game.physics.enable(bin, Phaser.Physics.ARCADE);
		bin.body.setSize(90, 120, 15, 8);
		level.obstacles.add(bin);
	}
};