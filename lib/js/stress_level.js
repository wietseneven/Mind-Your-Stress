var stress = stress || {};
var Phaser = Phaser || {};

stress.Level = function () {
	this.skyline = null;
	this.player = null;

	this.levelName = function () {
		return stress.global.levels[stress.global.level].name;
	};

	this.stationary = null;

	this.jumpTimer = 0;
	this.willJump = false;
};

stress.Level.prototype = {

	init: function () {
		this.game.renderer.renderSession.roundPixels = true;
		this.world.resize(stress.dim.w() * 60, stress.dim.h());
		this.physics.startSystem(Phaser.Physics.ARCADE);
		this.physics.arcade.gravity.y = 600;
	},

	create: function () {

		this.background = this.add.tileSprite(0, 0, stress.dim.w(), stress.dim.h(), this.levelName() + '-background');
		this.background.fixedToCamera = true;

		this.skyline = this.add.tileSprite(0, -28, stress.dim.w(), 407, this.levelName() + '-skyline');
		this.skyline.height = stress.game.height;
		this.skyline.fixedToCamera = true;

		// Listen to keyboard
		this.cursors = this.input.keyboard.createCursorKeys();

		//  The Player
		this.player = this.add.sprite(64, 0, this.levelName() + '-dude');
		this.physics.arcade.enable(this.player);
		this.player.body.collideWorldBounds = true;
		this.player.body.setSize(51, 64, 10, 32);
		this.player.animations.add('right', [0, 1, 2, 3, 4, 3, 2, 1], 10, true);
		this.player.x = -64;
		this.player.y = stress.game.height - 200;

		this.camera.follow(this.player);


		//  Platforms that don't move
		this.stationary = this.add.physicsGroup();
		this.stationary.create(0, stress.dim.h() - 100, this.levelName() + '-platform');

		stress.global.levels[stress.global.level].obstacles(this);

		this.stationary.setAll('body.allowGravity', false);
		this.stationary.setAll('body.immovable', true);

		//  The interface buttons
		this.startBtn = this.game.add.button(stress.game.width / 2, 256, 'menu_btn-start', this.startLevel1, this);
		this.startBtn.scale.setTo(1,1);
		this.startBtn.anchor.setTo(0.5);

		this.speedBtn = this.game.add.button(30, stress.game.height - 95, 'level_move', this.accelerate, this, 1, 1, 0);
		this.speedBtn.scale.setTo(0.5, 0.5);
		this.speedBtn.fixedToCamera = true;
		this.speedBtn.onInputDown.add(this.accelerate, this);
		this.speedBtn.onInputUp.add(this.decelerate, this);

		this.jumpBtn = this.game.add.button(stress.game.width - 95, stress.game.height - 95, 'level_jump', this.jump, this, 1, 1, 0);
		this.jumpBtn.scale.setTo(0.5, 0.5);
		this.jumpBtn.fixedToCamera = true;

		this.retryBtn = this.game.add.button(30, 30, 'level_restart', this.restart, this, 1, 1, 0);
		this.retryBtn.scale.setTo(0.5, 0.5);
		this.retryBtn.fixedToCamera = true;

		// Background music
		this.music = this.game.add.audio('irresistible', 1, true, true);
		this.music.play();
		
		// Stress meter
		this.balanceBar = this.game.add.image(stress.game.width - 80, 30, 'meter_balance-bar');
		this.balanceBar.scale.setTo(0.5,0.5);
		this.balanceBar.fixedToCamera = true;

		this.balanceBarIndicator = this.game.add.image(stress.game.width - 95, 40, 'meter_balance-bar-indicator');
		this.balanceBarIndicator.scale.setTo(0.5,0.5);
		this.balanceBarIndicator.fixedToCamera = true;
	},
	restart: function () {
		this.music.stop();
		stress.game.state.start('Level');
	},
	accelerate: function () {
		this.acceleration = true;
	},
	decelerate: function () {
		this.acceleration = false;
	},
	jump: function () {
		var standing = this.player.body.blocked.down || this.player.body.touching.down || this.locked;
		if (standing && this.time.time > this.jumpTimer) {
			this.willJump = true;
		}
	},
	adjustMusic: function () {
		var newAudioLevel = stress.global.speed / 1000;
		this.music._sound.playbackRate.value = newAudioLevel;
		this.balanceBar.cameraOffset.y = -60 + (newAudioLevel * 50);

	},
	preRender: function () {

		if (this.game.paused) {
			//  Because preRender still runs even if your game pauses!
			return;
		}

		if (this.willJump) {
			this.willJump = false;

			if (this.lockedTo && this.lockedTo.deltaY < 0 && this.wasLocked) {
				//  If the platform is moving up we add its velocity to the players jump
				this.player.body.velocity.y = -300 + (this.lockedTo.deltaY * 10);
			}
			else {
				this.player.body.velocity.y = -300;
			}

			this.jumpTimer = this.time.time + 750;
		}

	},

	update: function () {
		this.background.tilePosition.x = -(this.camera.x * 0.7);
		this.skyline.tilePosition.x = -(this.camera.x * 0.9);

		this.physics.arcade.collide(this.player, this.stationary);

		//  Do this AFTER the collide check, or we won't have blocked/touching set
		this.player.body.velocity.x = stress.global.speed;

		stress.global.levels[stress.global.level].update(this);

		if (this.cursors.right.isDown) {
			this.accelerate();
		} else {
			this.decelerate();
		}

		if (this.music.isPlaying) {
			this.adjustMusic();
		}

		if (this.cursors.up.isDown) {
			this.jump();
		}

		if (this.acceleration) {
			if (stress.global.speed < 2000) {
				stress.global.speed += 8;
			}
			this.player.play('right');
		} else if (stress.global.speed > 5) {
			stress.global.speed -= 8;
		} else {
			stress.global.speed = 0;
			this.player.animations.stop();
		}

	}

};