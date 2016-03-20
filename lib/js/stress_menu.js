var stress = stress || {};

stress.MainMenu = function() {};

stress.MainMenu.prototype = {
	create: function() {
		var background = this.game.add.image(0, 0, 'menu_background');
		background.width = stress.game.width;
		background.height = stress.game.height;
			
		var startBtn = this.game.add.button(stress.game.width / 2, 256, 'menu_btn-start', this.startLevel1, this);
		startBtn.scale.setTo(0.4,0.4);
		startBtn.anchor.setTo(0.5);
	},
	startLevel1: function() {
		stress.game.state.start('Level');
	}
};