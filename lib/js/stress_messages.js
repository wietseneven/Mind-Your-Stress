var stress = stress || {};

stress.Message = function() {
	this.scene = null;
};

stress.Message.prototype = {
	create: function(scene, type) {

		this.scene = scene;
		this.scene.messages = this.scene.add.group();

		var levels_bg = this.scene.game.add.image(stress.game.width / 2, stress.game.height / 2, 'message_screen');
		levels_bg.height = stress.game.height;
		levels_bg.width = stress.game.width;
		levels_bg.anchor.setTo(0.5);
		this.scene.messages.add(levels_bg);

		var levels_head = this.scene.game.add.image(stress.game.width / 2, stress.game.height / 2 - 200, 'message_head-'+type);
		levels_head.anchor.setTo(0.5);
		this.scene.messages.add(levels_head);

		if (type === 'gameOver') {

			// normal text
			var normalStyle = { font: "18px Helvetica", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
			var gameOverText = this.scene.game.add.text(stress.game.width / 2, stress.game.height / 2 - 100, 'Helaas, je bent gewoon slecht. Doei.', normalStyle);
			gameOverText.anchor.setTo(0.5);
			this.scene.messages.add(gameOverText);

			// score
			var style = { font: "bold 40px Carter One", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
			var levelScore = this.scene.game.add.text(stress.game.width / 2, stress.game.height / 2, this.scene.score + ' Balans Punten', style);
			levelScore.anchor.setTo(0.5);
			this.scene.messages.add(levelScore);

			var replayBtn = this.scene.game.add.button(stress.game.width / 2 - 120, stress.game.height / 2 + 130, 'message_button-replay', this.reloadScene , this, 0, 0, 0);
			replayBtn.scale.setTo(0.8);
			replayBtn.anchor.setTo(0.5);
			this.scene.messages.add(replayBtn);

			var menuBtn = this.scene.game.add.button(stress.game.width / 2 + 120, stress.game.height / 2 + 130, 'message_button-menu', this.openMenu, this, 0, 0, 0);
			menuBtn.scale.setTo(0.8);
			menuBtn.anchor.setTo(0.5);
			this.scene.messages.add(menuBtn);
		}


		this.scene.messages.fixedToCamera = true;
	},

	removeMessage: function() {
		this.scene.messages.remove();
	},

	reloadScene: function() {

		this.scene.restart();
	},

	openMenu: function() {
		stress.game.state.start('levelSelect');
	}
};