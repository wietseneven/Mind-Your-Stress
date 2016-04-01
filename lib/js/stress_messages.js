var stress = stress || {};

stress.Message = function() {
	this.scene = null;
};

stress.Message.prototype = {
	create: function(scene, type, text) {

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

		var normalStyle = { font: "18px Helvetica", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
		var style = { font: "bold 40px Carter One", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
		if (type === 'gameOver') {

			// normal text

			var gameOverText = this.scene.game.add.text(stress.game.width / 2, stress.game.height / 2 - 100, 'Opgeven is geen optie, je kan het! \nProbeer het nog een keer in je eigen tempo!', normalStyle);
			gameOverText.anchor.setTo(0.5);
			this.scene.messages.add(gameOverText);
		}
		if (text) {
			var textje = this.scene.game.add.text(stress.game.width / 2, stress.game.height / 2, text, normalStyle);
			textje.anchor.setTo(0.5);
			this.scene.messages.add(textje);
		}
		if (type === 'gameOver' || type === 'completed') {
			// score
			var levelScore = this.scene.game.add.text(stress.game.width / 2, stress.game.height / 2 + 20, this.scene.score + ' Balans Punten', style);
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

		if (type === 'completed') {
			var completedText;
			if (this.scene.levelName() === 'tutorial') {
				completedText = 'Goed gedaan!\nGa nu andere situaties uit jouw dag doorlopen om JOUW tempo te vinden!';
			} else {
				completedText = 'Heb je door hoe druk je het hebt gehad op een dag?\n Heb je het gevoel dat je geleefd wordt?\n\nZorg dat je de activiteiten op je eigen tempo doet. \nHet gaat om jouw tempo, jouw balans, jouw leven.  \nHet is belangrijk dat jij je eigen flow vindt!';
			}
			var comptxt = this.scene.game.add.text(stress.game.width / 2, stress.game.height / 2 - 75, completedText, normalStyle);
			comptxt.anchor.setTo(0.5);
			this.scene.messages.add(comptxt);
		}

		if (type === 'tutorial') {
			var continueGameBtn = this.scene.game.add.button(stress.game.width / 2, stress.game.height / 2 + 130, 'message_button-continue', this.removeMessage, this, 0, 0, 0);
			continueGameBtn.scale.setTo(0.8);
			continueGameBtn.anchor.setTo(0.5);
			this.scene.messages.add(continueGameBtn);
			this.scene.pauseGame();
		}


		this.scene.messages.fixedToCamera = true;
	},

	removeMessage: function() {
		this.scene.resumeGame();
		this.scene.messages.destroy();
	},

	reloadScene: function() {

		this.scene.restart();
	},

	openMenu: function() {
		stress.game.state.start('levelSelect');
	}
};