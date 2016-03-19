var stress = stress || {};

stress.Level = function () {
	this.skyline = null;
	this.player = null;

	this.stationary = null;
	this.clouds = null;

	this.facing = 'left';
	this.jumpTimer = 0;
	this.cursors = null;
	this.locked = false;
	this.lockedTo = null;
	this.wasLocked = false;
	this.willJump = false;
};

stress.Level.prototype = {

	init: function () {
		this.game.renderer.renderSession.roundPixels = true;
		this.world.resize(stress.dim.w() * 5, stress.dim.h());
		this.physics.startSystem(Phaser.Physics.ARCADE);
		this.physics.arcade.gravity.y = 600;
	},

	preload: function () {

	},

	create: function () {
		this.background = this.add.tileSprite(0, 0, stress.dim.w(), stress.dim.h(), global.levelName() + '-background');
		this.background.fixedToCamera = true;

		this.skyline = this.add.tileSprite(0, 0, stress.dim.w(), 407, global.levelName() + '-skyline');
		this.skyline.fixedToCamera = true;

		//  Platforms that don't move
		this.stationary = this.add.physicsGroup();
		this.stationary.create(0, stress.dim.h() - 60, global.levelName() + '-platform');
		this.stationary.setAll('body.allowGravity', false);
		this.stationary.setAll('body.immovable', true);


		//  The Player
		this.player = this.add.sprite(64, 0, global.levelName() + '-dude');
		this.physics.arcade.enable(this.player);
		this.player.body.collideWorldBounds = true;
		this.player.body.setSize(51, 64, 10, 32);
		this.player.animations.add('right', [0, 1, 2, 3, 4, 3, 2, 1], 10, true);
		this.player.x = -64;
		this.player.y = stress.dim.h() - 155;

		this.camera.follow(this.player);

		this.cursors = this.input.keyboard.createCursorKeys();
	},

	customSep: function (player, platform) {

		if (!this.locked && player.body.velocity.y > 0) {
			this.locked = true;
			this.lockedTo = platform;
			platform.playerLocked = true;

			player.body.velocity.y = 0;
		}

	},

	checkLock: function () {

		this.player.body.velocity.y = 0;

		//  If the player has walked off either side of the platform then they're no longer locked to it
		if (this.player.body.right < this.lockedTo.body.x || this.player.body.x > this.lockedTo.body.right) {
			this.cancelLock();
		}

	},

	cancelLock: function () {

		this.wasLocked = true;
		this.locked = false;

	},

	preRender: function () {

		if (this.game.paused) {
			//  Because preRender still runs even if your game pauses!
			return;
		}

		if (this.locked || this.wasLocked) {
			this.player.x += this.lockedTo.deltaX;
			this.player.y = this.lockedTo.y - 48;

			if (this.player.body.velocity.x !== 0) {
				this.player.body.velocity.y = 0;
			}
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

		if (this.wasLocked) {
			this.wasLocked = false;
			this.lockedTo.playerLocked = false;
			this.lockedTo = null;
		}

	},

	update: function () {
		this.background.tilePosition.x = -(this.camera.x * 0.7);
		this.skyline.tilePosition.x = -(this.camera.x * 0.9);

		this.physics.arcade.collide(this.player, this.stationary);
		this.physics.arcade.collide(this.player, this.clouds, this.customSep, null, this);

		//  Do this AFTER the collide check, or we won't have blocked/touching set
		var standing = this.player.body.blocked.down || this.player.body.touching.down || this.locked;
		this.player.body.velocity.x = 250;

		if (this.facing !== 'right') {
			this.player.play('right');
			this.facing = 'right';
		}


		if (standing && this.cursors.up.isDown && this.time.time > this.jumpTimer) {
			if (this.locked) {
				this.cancelLock();
			}
			this.willJump = true;
		}

		if (this.locked) {
			this.checkLock();
		}


	}

};