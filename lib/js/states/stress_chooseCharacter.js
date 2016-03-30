var stress = stress || {};
var phaseSlider = phaseSlider || {};

stress.settings = function() {};

stress.settings.prototype = {
	create: function() {
		var background = this.game.add.image(0, 0, 'menu_background');
		background.width = stress.game.width;
		background.height = stress.game.height;

		var banner = this.game.add.image(0,0,"chooseCharacter_banner");
		banner.scale.setTo(0.5);
		banner.x = this.game.width / 2 - banner.width / 2;
		banner.y = 50;

		var buttonMale = this.game.add.button(0, 0, 'character_male', this.startLevelSelectMale, this, 0, 0, 1);
		buttonMale.anchor.setTo(0.5);
		buttonMale.x = this.game.width / 2 - (buttonMale.width + 20);
		buttonMale.y = this.game.height / 2;

		var buttonFemale = this.game.add.button(0, 0, 'character_female', this.startLevelSelectFemale, this, 0, 0, 1);
		buttonFemale.anchor.setTo(0.5);
		buttonFemale.x = this.game.width / 2 + (buttonFemale.width + 20);
		buttonFemale.y = this.game.height / 2;

	},
	startLevelSelectMale: function() {
		localStorage.gender = 'male';
		stress.game.state.start('levelSelect');
	},
	startLevelSelectFemale: function() {
		localStorage.gender = 'female';
		stress.game.state.start('levelSelect');
	}
};