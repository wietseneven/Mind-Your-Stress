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
	this.scene = 0;
	this.sceneName = function() {
		return this.scenes[this.scene].name;
	};

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
		this.background = this.add.tileSprite(0, 0, dim.w(), dim.h(), this.sceneName() + '-background');
		this.background.fixedToCamera = true;

		this.skyline = this.add.tileSprite(0, 0, dim.w(), 407, this.sceneName() + '-skyline');
		this.skyline.fixedToCamera = true;

		//  Platforms that don't move
		this.stationary = this.add.physicsGroup();

		this.stationary.create(0, dim.h() - 60, this.sceneName() + '-platform');

		this.stationary.setAll('body.allowGravity', false);
		this.stationary.setAll('body.immovable', true);


		//  Platforms that move
		this.clouds = this.add.physicsGroup();

		var cloud1 = new Obstacle(this.game, 300, 450, this.sceneName() + '-cloud-platform', this.clouds);
		cloud1.addMotionPath([
			{ x: "+200", xSpeed: 2000, xEase: "Linear", y: "-200", ySpeed: 2000, yEase: "Sine.easeIn" },
			{ x: "-200", xSpeed: 2000, xEase: "Linear", y: "-200", ySpeed: 2000, yEase: "Sine.easeOut" },
			{ x: "-200", xSpeed: 2000, xEase: "Linear", y: "+200", ySpeed: 2000, yEase: "Sine.easeIn" },
			{ x: "+200", xSpeed: 2000, xEase: "Linear", y: "+200", ySpeed: 2000, yEase: "Sine.easeOut" }
		]);

		var cloud2 = new Obstacle(this.game, 800, 96, this.sceneName() + '-cloud-platform', this.clouds);
		cloud2.addMotionPath([
			{ x: "+0", xSpeed: 2000, xEase: "Linear", y: "+300", ySpeed: 2000, yEase: "Sine.easeIn" },
			{ x: "-0", xSpeed: 2000, xEase: "Linear", y: "-300", ySpeed: 2000, yEase: "Sine.easeOut" }
		]);

		var cloud3 = new Obstacle(this.game, 1300, 290, this.sceneName() + '-cloud-platform', this.clouds);
		cloud3.addMotionPath([
			{ x: "+500", xSpeed: 4000, xEase: "Expo.easeIn", y: "-200", ySpeed: 3000, yEase: "Linear" },
			{ x: "-500", xSpeed: 4000, xEase: "Expo.easeOut", y: "+200", ySpeed: 3000, yEase: "Linear" }
		]);

		//  The Player
		this.player = this.add.sprite(64, 0, this.sceneName() + '-dude');

		this.physics.arcade.enable(this.player);

		this.player.body.collideWorldBounds = true;
		this.player.body.setSize(80, 64, 10, 32);

		this.player.animations.add('right', [0, 1, 2, 3, 4, 5], 10, true);

		this.player.x = -64;
		this.player.y = dim.h() - 155;

		this.camera.follow(this.player);

		this.cursors = this.input.keyboard.createCursorKeys();

		this.clouds.callAll('start');
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
		this.physics.arcade.collide(this.player, this.clouds, this.customSep, null, this);

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