var stress = stress || {};
var phaseSlider = phaseSlider || {};

stress.introVideo = function() {};

stress.introVideo.prototype = {
	create: function() {
		var background = this.game.add.video('introVideo');
		background.addToWorld(0, 0, 0, 0, 0.5, 0.5);
		//background.loop = false;
		background.onComplete.addOnce(this.startLevelSelect, this);
		background.play(true);

		var buttonWork = this.game.add.button(0, 0, 'menu_btn-start', this.action, this, 0, 0, 1);
		buttonWork.scale.setTo(0.8);
		buttonWork.x = this.game.width / 2 - buttonWork.width / 2;
		buttonWork.y = this.game.height / 2 - buttonWork.height / 2;

	//	stress.global.music = this.game.add.audio('rieu', 1, true, true);
	//	stress.global.music.play();


	},
	action: function() {
		if (localStorage.gender) {
			this.startLevelSelect();
		} else {
			this.settings();
		}
	},
	startLevelSelect: function() {
		window.console.log('adsf');
		stress.game.state.start('levelSelect');
	},
	settings: function() {
		stress.game.state.start('chooseCharacter');
	}
};