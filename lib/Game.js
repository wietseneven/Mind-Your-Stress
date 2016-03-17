var dim = {
	w: function() {
		var w = window.innerWidth;
		if (w > 736) {
			return 736;
		} else {
			return w;
		}
	},
	h: function() {
		var h = window.innerHeight;
		if (h > 441) {
			return 441;
		} else {
			return h;
		}
	}
};
var game = new Phaser.Game(dim.w(), dim.h(), Phaser.CANVAS, 'game');

var stressGame = function () {
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

	this.scenes = [home]
};

stressGame.prototype = {

	init: function () {
		this.game.renderer.renderSession.roundPixels = true;
		this.world.resize(dim.w() * 2, dim.h());
		this.physics.startSystem(Phaser.Physics.ARCADE);
		this.physics.arcade.gravity.y = 600;
	},

	preload: function () {
		for(var i = 0; i < this.scenes.length; i++) {
			this.scenes[i].preload(this);
		}
	},

	create: function () {

		this.background = this.add.tileSprite(0, 0, dim.w(), dim.h(), 'background');
		this.background.fixedToCamera = true;

		this.skyline = this.add.tileSprite(0, 0, dim.w(), 407, 'skyline');
		this.skyline.fixedToCamera = true;

		//  Platforms that don't move
		this.stationary = this.add.physicsGroup();

		this.stationary.create(0, dim.h() - 60, 'platform');

		this.stationary.setAll('body.allowGravity', false);
		this.stationary.setAll('body.immovable', true);

		//  The Player
		this.player = this.add.sprite(64, 0, 'dude');

		this.physics.arcade.enable(this.player);

		this.player.body.collideWorldBounds = true;
		this.player.body.setSize(80, 64, 10, 32);

		this.player.animations.add('right', [0, 1, 2, 3, 4, 5], 10, true);

		this.player.x = -64;
		this.player.y = dim.h() - 155;

		this.camera.follow(this.player);

		this.cursors = this.input.keyboard.createCursorKeys();

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
		var standing = this.player.body.blocked.down || this.player.body.touching.down || this.locked;

		this.player.body.velocity.x = 250;
		this.player.play('right');
		this.facing = 'right';

		if (standing && this.cursors.up.isDown && this.time.time > this.jumpTimer) {
			if (this.locked) {
				this.cancelLock();
			}

			this.willJump = true;
		}

	}

};