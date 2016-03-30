var stress = stress || {};
var phaseSlider = phaseSlider || {};

stress.startScreen = function() {};

stress.startScreen.prototype = {
	create: function() {
		var background = this.game.add.image(0, 0, 'startscreen_background');
		background.width = stress.game.width;
		background.height = stress.game.height;

		var buttonWork = this.game.add.button(0, 0, 'menu_btn-start', this.startLevelSelect, this, 0, 0, 1);
		buttonWork.scale.setTo(0.8);
		buttonWork.x = this.game.width / 2 - buttonWork.width / 2;
		buttonWork.y = this.game.height / 2 - buttonWork.height / 2;

	},
	startLevelSelect: function() {
		stress.game.state.start('levelSelect');
	}
};