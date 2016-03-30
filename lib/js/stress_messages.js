var stress = stress || {};

stress.Message = function() {};

stress.Message.prototype = {
	create: function(scene, type) {

		this.scene = scene;
		this.scene.messages = this.scene.add.group();

		var levels_bg = this.scene.game.add.image(stress.game.width / 2, stress.game.height / 2, 'message_screen');
		levels_bg.height = stress.game.height * 0.8;
		levels_bg.width = (stress.game.height * 0.8) / 9 * 13;
		levels_bg.anchor.setTo(0.5);
		this.scene.messages.add(levels_bg);

		var levels_head = this.scene.game.add.image(stress.game.width / 2, stress.game.height / 2 - 200, 'message_head-'+type);
		levels_head.anchor.setTo(0.5);
		this.scene.messages.add(levels_head);

		if (type === 'gameOver') {
			var replayBtn = this.scene.game.add.button(stress.game.width / 2 - 120, stress.game.height / 2 + 25, 'menu_levels', this.startLevel1, this, 0, 0, 0);
			replayBtn.scale.setTo(0.8);
			replayBtn.anchor.setTo(0.5);
		}


		this.scene.messages.fixedToCamera = true;
	}
};