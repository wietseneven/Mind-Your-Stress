var stress = stress || {};
var phaseSlider = phaseSlider || {};

stress.introVideo = function() {};

stress.introVideo.prototype = {
	create: function() {
		this.background = this.game.add.video('introVideo');
		this.background.addToWorld(0, 0, 0, 0, 0.5, 0.5);
		//background.loop = false;
		this.background.onComplete.addOnce(this.startLevelSelect, this);
		this.background.play(true);

		var buttonWork = this.game.add.button(0, 0, 'menu_btn-start', this.action, this, 0, 0, 1);
		buttonWork.scale.setTo(0.8);
		buttonWork.x = this.game.width / 2 - buttonWork.width / 2;


		buttonWork.y = -200;

	//	stress.global.music = this.game.add.audio('rieu', 1, true, true);
	//	stress.global.music.play();
		var self = this;
		setTimeout(function() {
			self.background.stop();
		}, 15000);

		setTimeout(function() {
			buttonWork.y = self.game.height / 2 - buttonWork.height / 2;
		}, 12000);

	},
	action: function() {
		if (localStorage.gender) {
			this.background.stop();
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