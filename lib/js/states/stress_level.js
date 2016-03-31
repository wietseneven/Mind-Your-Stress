var stress = stress || {};
var Phaser = Phaser || {};
var timeTimer = 20;
var game;
stress.Level = function () {
	this.skyline = null;
	this.player = null;

	this.levelName = function () {
		return stress.global.levels[stress.global.level].name;
	};

	this.stationary = null;
	this.obstacles = null;

	this.jumpTimer = 0;
	this.willJump = false;

	this.gameOverScreen = null;
	this.multiplyTimer = false;
	this.gameDuration = 0;

	this.scores = null;
};

stress.Level.prototype = {

	init: function () {
		this.game.renderer.renderSession.roundPixels = true;
		this.world.resize(40000, stress.dim.h());
		this.physics.startSystem(Phaser.Physics.ARCADE);
		this.physics.arcade.gravity.y = 700;
	},

	create: function () {

		this.thisLevel = stress.global.levels[stress.global.level];

		this.background = this.add.tileSprite(0, 0, stress.dim.w(), stress.dim.h(), this.levelName() + '-background');
		this.background.fixedToCamera = true;

		this.skyline = this.add.tileSprite(0, -28, stress.dim.w(), 407, this.levelName() + '-skyline');
		this.skyline.height = stress.game.height;
		this.skyline.fixedToCamera = true;

		// Listen to keyboard
		this.cursors = this.input.keyboard.createCursorKeys();

		if (this.thisLevel.images) {
			this.thisLevel.images(this);
		}

		//  The Player
		this.player = this.add.sprite(64, 0, 'level_'+ localStorage.gender +'_dude');
		this.physics.arcade.enable(this.player);
		this.player.body.collideWorldBounds = true;
		//this.player.body.setSize(51, 64, 10, 32);
		this.player.height = this.game.height / 2.7;
		this.player.width = this.game.height / 5.4;

		this.player.animations.add('right', [0, 1, 2, 3, 4, 5, 6, 7, 6], 10, true);
		this.player.x = -64;
		this.player.y = stress.game.height - 460;
		this.player.body.gravity.y = 500;
		this.player.body.mass = 500;

		this.camera.follow(this.player);
		this.camera.deadzone = new Phaser.Rectangle(0, 100, 100, 400);


		//  Platforms that don't move
		this.platformTop = 140;
		this.stationary = this.add.physicsGroup();
		var curPlatform = this.levelName() + '-platform';
		var rPlatformTop = stress.dim.h() - this.platformTop;
		this.stationary.create(0, rPlatformTop, curPlatform);
		this.stationary.create(4000, rPlatformTop, curPlatform);
		this.stationary.create(8000, rPlatformTop, curPlatform);
		this.stationary.create(12000, rPlatformTop, curPlatform);
		this.stationary.create(16000, rPlatformTop, curPlatform);
		this.stationary.create(20000, rPlatformTop, curPlatform);
		this.stationary.create(24000, rPlatformTop, curPlatform);
		this.stationary.create(28000, rPlatformTop, curPlatform);
		this.stationary.create(32000, rPlatformTop, curPlatform);
		this.stationary.create(36000, rPlatformTop, curPlatform);


		this.stationary.setAll('body.allowGravity', false);
		this.stationary.setAll('body.immovable', true);

		this.obstacles = this.add.physicsGroup();

		if (this.thisLevel.obstacles) {
			this.thisLevel.obstacles(this);
		}

		this.obstacles.setAll('body.allowGravity', false);
		this.obstacles.setAll('body.immovable', true);

		this.mist = this.game.add.image(0, 0, 'level_mist');
		this.mist.width = this.game.width;
		this.mist.height = this.game.height;
		this.mist.fixedToCamera = true;
		this.mist.alpha = 0;

		this.mistDark = this.game.add.image(0, 0, 'level_mist-dark');
		this.mistDark.width = this.game.width;
		this.mistDark.height = this.game.height;
		this.mistDark.fixedToCamera = true;
		this.mistDark.alpha = 0;

		this.speedBtn = this.game.add.button(30, stress.game.height - 95, 'level_move', this.accelerate, this, 1, 1, 0);
		this.speedBtn.scale.setTo(0.5, 0.5);
		this.speedBtn.fixedToCamera = true;
		this.speedBtn.onInputDown.add(this.accelerate, this);
		this.speedBtn.onInputUp.add(this.decelerate, this);

		this.jumpBtn = this.game.add.button(stress.game.width - 95, stress.game.height - 95, 'level_jump', this.jump, this, 1, 1, 0);
		this.jumpBtn.scale.setTo(0.5, 0.5);
		this.jumpBtn.fixedToCamera = true;

		// this.retryBtn = this.game.add.button(30, 30, 'level_restart', this.restart, this, 1, 1, 0);
		// this.retryBtn.scale.setTo(0.5, 0.5);
		// this.retryBtn.fixedToCamera = true;
		var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
		this.score = 0;
		this.levelScore = this.game.add.text(20, 20, this.score, style);
		this.levelScore.fixedToCamera = true;

		// Background music
		if (this.thisLevel.music) {
			this.music = this.game.add.audio(this.thisLevel.music, 1, true, true);
		} else {
			this.music = this.game.add.audio('irresistible', 1, true, true);
		}
		this.music.play();

		// Stress meter
		this.balanceBar = this.game.add.image(stress.game.width - 80, 30, 'meter_balance-bar');
		this.balanceBar.scale.setTo(0.5, 0.5);
		this.balanceBar.fixedToCamera = true;

		this.balanceBarIndicator = this.game.add.image(stress.game.width - 95, 40, 'meter_balance-bar-indicator');
		this.balanceBarIndicator.scale.setTo(0.5, 0.5);
		this.balanceBarIndicator.fixedToCamera = true;

		// Timestamp
		this.time.events.loop(Phaser.Timer.QUARTER, this.updateTimer);

		//countDownText = this.add.text(this.game.width / 2, 40, timeTimer, { font: "32px Arial", fill: "#ff0044", align: "center" });
		//countDownText.fixedToCamera = true;


		stress.global.gameOver = false;

		game = this;

		this.scores = {
			t0: 0,
			t1: 0,
			t2: 0,
			t3: 0,
			t4: 0
		};
	},
	gameOver: function () {
		stress.global.gameOver = true;
		stress.global.speed = 0;
		this.multiplyTimer = false;
		this.player.animations.stop();
		this.music.stop();

		switch (this.levelName()) {
			case ('bedroom'):
				if (localStorage.bedroomHighscore) {
					if (localStorage.bedroomHighscore < this.score) {
						localStorage.bedroomHighscore = this.score;
					}
				} else {
					localStorage.bedroomHighscore = this.score;
				}
				break;
			case ('school'):
				if (localStorage.schoolHighscore) {
					if (localStorage.schoolHighscore < this.score) {
						localStorage.schoolHighscore = this.score;
					}
				} else {
					localStorage.schoolHighscore = this.score;
				}
				break;
			case ('work'):
				if (localStorage.workHighscore) {
					if (localStorage.workHighscore < this.score) {
						localStorage.workHighscore = this.score;
					}
				} else {
					localStorage.workHighscore = this.score;
				}
				break;
			case ('sport'):
				if (localStorage.sportHighscore) {
					if (localStorage.sportHighscore < this.score) {
						localStorage.sportHighscore = this.score;
					}
				} else {
					localStorage.sportHighscore = this.score;
				}
				break;
		}
		this.gameOverScreen = new stress.Message();
		this.gameOverScreen.create(this, 'gameOver');

		//this.restart();
	},
	restart: function () {
		this.gameDuration = 0;
		timeTimer = 0;
		stress.global.speed = 500;
		this.scores = {
			t0: 0,
			t1: 0,
			t2: 0,
			t3: 0,
			t4: 0
		};
		//console.log(this.gameOverScreen);
		//this.gameOverScreen.removeMessage();
		timeTimer = 20;
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
		this.balanceBar.cameraOffset.y = -60 + (newAudioLevel * 50);

		if (newAudioLevel > 0.8 && newAudioLevel < 1.2) {
			this.music._sound.playbackRate.value = 1;
			this.multiplyTimer = true;
		} else {
			this.music._sound.playbackRate.value = newAudioLevel;
			this.multiplyTimer = false;
		}

		if (this.player.position.x > 600) {
			if (newAudioLevel > 1) {
				this.mist.alpha = newAudioLevel - 0.5;
				this.mistDark.alpha = 0;
			} else {
				this.mist.alpha = 0;
				this.mistDark.alpha = 1 - newAudioLevel;
			}
		}


	},
	updateTimer: function() {
		if (!stress.global.gameOver) {
			game.increaseMultiplier();
		}
	},
	increaseMultiplier: function() {
		if (this.multiplyTimer) {
			timeTimer++;
		} else {
			timeTimer = 0;
		}
		this.gameDuration++;

		this.scores.t0 = this.gameDuration;
		if (timeTimer > 10) {
			this.scores.t1 += 1;
		}

		if (timeTimer > 20) {
			this.scores.t2++;
		}

		if (timeTimer > 30) {
			this.scores.t3++;
		}

		if (timeTimer > 40) {
			this.scores.t4++;
		}
		//this.score = 400;
		this.score = Math.floor(((this.scores.t0 * 2) + (this.scores.t1 * 8) + (this.scores.t2 * 16) + (this.scores.t3 * 32) + (this.scores.t4 * 64)) * 1.4);
//		console.log(this.core);
		//this.score = 400;
		//window.console.log('t1: ' + this.scores.t1 + ' t2: ' + this.scores.t2 + ' t3: ' + this.scores.t3 + ' t4: ' + this.scores.t4 + ' t5: ' + this.scores.t5);


	},
	preRender: function () {

		if (this.game.paused) {
			//  Because preRender still runs even if your game pauses!
			return;
		}

		if (this.willJump) {
			this.willJump = false;

			this.player.body.velocity.y = -600;

			this.jumpTimer = this.time.time + 150;
		}

	},

	update: function () {
		this.background.tilePosition.x = -(this.camera.x * 0.7);
		this.skyline.tilePosition.x = -(this.camera.x * 0.9);

		this.physics.arcade.collide(this.player, this.stationary);
		this.physics.arcade.collide(this.player, this.obstacles);

		if (stress.global.gameOver) {

		} else {


			//  Do this AFTER the collide check, or we won't have blocked/touching set
			this.player.body.velocity.x = stress.global.speed;

			if (this.thisLevel.update) {
				this.thisLevel.update(this);
			}

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
				if (stress.global.speed < 1650) {
					stress.global.speed += 6;
				} else {
					this.gameOver();
				}
			} else if (stress.global.speed > 100) {
				stress.global.speed -= 6;
			} else {
				stress.global.speed = 99;
			}
			this.player.play('right');

			if (this.prevX === this.player.position.x && stress.global.gameOver === false && this.player.position.x > 600) {
				this.gameOver();
			}
			this.prevX = this.player.position.x;

			// if (this.player.position.x > 600) {
			// 	//console.log(this.player.body.velocity.x);
			// 	this.score += Math.floor(this.player.body.velocity.x / 100);
			// }
			this.levelScore.setText(this.score);
		}
	}

};