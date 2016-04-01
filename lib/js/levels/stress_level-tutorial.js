var stress = stress || {};
var Phaser = Phaser || {};
var level_tutorial = level_tutorial || {};

level_tutorial = {
	name: 'tutorial',
	laundrybins: [],
	obstacleMessageShown: true,
	balancebarShown: true,
	flowShown: true,
	waasmessageShown: true,
	obstacles: function(level) {
		var x = 3000;
		for (var i = 0; i < 30; i++){
			if (x < 10000) {
				var bin = new this.laundryBin(level, x);
				this.laundrybins.push(bin);
				x += stress.rand(2800, 1200);
			}
		}

		level.game.world.resize(20000, stress.dim.h());

		//level.obstacles.callAll('animations.add', 'animations', 'low', [0, 1, 2], 4, true);
		level.obstacles.callAll('animations.add', 'animations', 'high', [6, 7, 8], 4, true);
	},
	messages: function (level) {
		//level.obstacles.create(200, stress.dim.h() - 100, level.levelName() + '-platform');

		level.controlsMessage = new stress.Message();
		level.controlsMessage.create(level, 'tutorial', 'Je kunt springen met het bovenste pijltje van je toetsenbord. \n\nJe versnellen met het rechter pijltje van je toetsenbord');
	},
	update: function(level) {
		level.obstacles.callAll('animations.play', 'animations', 'high');
		if (level.player.position.x > 2000 && this.obstacleMessageShown) {
			this.obstacleMessageShown = false;
			level.controlsMessage = new stress.Message();
			level.controlsMessage.create(level, 'tutorial', 'Spring over de obstakels die je tijdens je dag meemaakt. \nLaat je er niet door belemmeren!');
			level.pauseGame();
		}

		if (level.player.position.x > 11000 && this.balancebarShown) {
			this.balancebarShown = false;
			level.controlsMessage = new stress.Message();
			level.controlsMessage.create(level, 'tutorial', 'De balansmeter rechtsbovenin helpt jou op het juiste tempo te blijven. \nHet staat voor jouw innerlijke energie. \n\n Ga niet te zacht of te hard, \nwant hierdoor loop je zelf of vast of brand je jezelf op.');
			level.pauseGame();
		}

		if (level.player.position.x > 13000 && this.waasmessageShown) {
			this.waasmessageShown = false;
			level.controlsMessage = new stress.Message();
			level.controlsMessage.create(level, 'tutorial', 'Blijf op het juiste tempo, want anders beland je in een waas.\nJe verliest je focus waardoor je je hindernissen niet meer kunt zien.');
			level.pauseGame();
		}

		if (level.player.position.x > 18000 && this.flowShown) {
			this.flowShown = false;
			level.controlsMessage = new stress.Message();
			level.controlsMessage.create(level, 'tutorial', 'Linksbovenin zie je je score. \nDit zijn de punten die je krijgt als je je eigen tempo vindt.\nAls je de perfecte flow vindt krijg je dubbele punten!');
			level.pauseGame();
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