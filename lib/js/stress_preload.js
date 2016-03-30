var stress = stress || {};

stress.Preload = function() {};

stress.Preload.prototype = {
	preload: function() {
		var baseImage_src = 'lib/img/';
		var baseAudio_src = 'lib/audio/';

		// menu
		this.load.image('menu_background', baseImage_src + 'menu/menu_background.png');
		this.load.image('menu_levels-bg', baseImage_src + 'menu/menu_levels-bg.png');
		this.load.image('menu_btn-start', baseImage_src + 'menu/menu_play.png');
		this.load.spritesheet('menu_levels', baseImage_src + 'menu/menu_levels.png', 90, 93);

		// messages
		this.load.image('message_screen', baseImage_src + 'menu/interface_message_screen.png');
		this.load.image('message_head-gameOver', baseImage_src + 'buttons/map_button_game_over.png');


		// level
		this.load.spritesheet('level_move', baseImage_src + 'buttons/level_forward.png', 95, 98);
		this.load.spritesheet('level_jump', baseImage_src + 'buttons/level_jump.png', 95, 98);
		this.load.spritesheet('level_restart', baseImage_src + 'buttons/level_restart.png', 95, 96);
		this.load.image('level_mist', baseImage_src + 'levels/algemeen/mist.png');
		this.load.image('level_mist-dark', baseImage_src + 'levels/algemeen/mist-donker.png');
		this.load.image('level_notify-thoughlife', baseImage_src + 'levels/algemeen/icoon-gruwelhoofd.png');
		
		// stress meter
		this.load.image('meter_balance-bar', baseImage_src + 'meter/meter_balance-bar.png');
		this.load.image('meter_balance-bar-indicator', baseImage_src + 'meter/meter_balance-bar-indicator.png');

		// home level
		this.load.image('home-skyline', baseImage_src + 'levels/home/skyline.png');
		this.load.image('home-background', baseImage_src + 'levels/home/background.png');
		this.load.image('home-platform', baseImage_src + 'levels/home/platform.png');
		this.load.spritesheet('home-dude', baseImage_src + 'levels/home/dude.png', 64, 96);
		this.load.image('home-cloud-platform', baseImage_src + 'levels/home/cloud-platform.png');
		this.load.audio('irresistible', baseAudio_src + 'levels/home/irresistible.mp3');
		this.load.audio('relax', baseAudio_src + 'levels/relax-take-it-easy.mp3');

		
		// bedroom level
		this.load.image('bedroom-skyline', baseImage_src + 'levels/bedroom/background.png');
		this.load.image('bedroom-background', baseImage_src + 'levels/bedroom/background.png');
		this.load.image('bedroom-platform', baseImage_src + 'levels/bedroom/platform.png');
		this.load.spritesheet('bedroom-dude', baseImage_src + 'levels/bedroom/dude.png', 192, 384);
		this.load.spritesheet('bedroom-laundryBin', baseImage_src + 'levels/bedroom/wasmand-sprite.png', 355.55555, 450);
		this.load.image('bedroom-bed', baseImage_src + 'levels/bedroom/bed.png');
		this.load.spritesheet('bedroom-intro', baseImage_src + 'levels/bedroom/introthuis-sprite.png', 569, 401);

		// school level
		this.load.image('school-skyline', baseImage_src + 'levels/school/skyline.png');
		this.load.image('school-background', baseImage_src + 'levels/school/background.png');
		this.load.image('school-platform', baseImage_src + 'levels/school/platform.png');
		this.load.spritesheet('school-dude', baseImage_src + 'levels/school/teacher.png', 64, 96);
		this.load.spritesheet('school-books', baseImage_src + 'levels/school/books_sprite.png', 130, 78);
		this.load.spritesheet('school-plane', baseImage_src + 'levels/school/paperplane_sprite.png', 61, 37);
		this.load.spritesheet('school-intro', baseImage_src + 'levels/school/introschool-sprite.png', 656, 532);

		// work level
		this.load.image('work-skyline', baseImage_src + 'levels/work/skyline.png');
		this.load.image('work-background', baseImage_src + 'levels/work/background.png');
		this.load.image('work-platform', baseImage_src + 'levels/work/platform.png');
		this.load.spritesheet('work-dude', baseImage_src + 'levels/work/boss.png', 64, 96);
	},
	create: function() {
		this.state.start('MainMenu');
	}
};