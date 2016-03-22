var stress = stress || {};

stress.MainMenu = function() {};

stress.MainMenu.prototype = {
	create: function() {
		var background = this.game.add.image(0, 0, 'menu_background');
		background.width = stress.game.width;
		background.height = stress.game.height;

		var levels_bg = this.game.add.image(stress.game.width / 2, stress.game.height / 2, 'menu_levels-bg');
		levels_bg.height = stress.game.height * 0.8;
		levels_bg.width = (stress.game.height * 0.8) / 9 * 13;
		levels_bg.anchor.setTo(0.5);

		var levelUno = this.game.add.button(stress.game.width / 2 - 120, stress.game.height / 2 + 25, 'menu_levels', this.startLevel1, this, 0, 0, 0);
		levelUno.scale.setTo(0.8);
		levelUno.anchor.setTo(0.5);

		var levelDos = this.game.add.button(stress.game.width / 2 - 40, stress.game.height / 2 + 25, 'menu_levels', this.startLevel2, this, 1, 1, 1);
		levelDos.scale.setTo(0.8);
		levelDos.anchor.setTo(0.5);

		var levelTres = this.game.add.button(stress.game.width / 2 + 40, stress.game.height / 2 + 25, 'menu_levels', this.startLevel3, this, 2, 2, 2);
		levelTres.scale.setTo(0.8);
		levelTres.anchor.setTo(0.5);

		var levelCuatro = this.game.add.button(stress.game.width / 2 + 120, stress.game.height / 2 + 25, 'menu_levels', this.startLevel4, this, 4, 4, 4);
		levelCuatro.scale.setTo(0.8);
		levelCuatro.anchor.setTo(0.5);

	},
	startLevel1: function() {
		stress.global.level = 0;
		stress.game.state.start('Level');
	},
	startLevel2: function() {
		stress.global.level = 1;
		stress.game.state.start('Level');
	},
	startLevel3: function() {
		stress.global.level = 2;
		stress.game.state.start('Level');
	},
	startLevel4: function() {
		stress.global.level = 3;
		stress.game.state.start('Level');
	}
};