var stress = stress || {};

stress.Preload = function() {};

stress.Preload.prototype = {
	preload: function() {
		var baseImage_src = 'lib/img/';
		var baseAudio_src = 'lib/audio/';
		var baseVideo_src = 'lib/video/';
		
		// startscreen
		this.load.image('startscreen_background', baseImage_src + 'common/startscreen.png');
		this.load.video('introVideo', baseVideo_src + 'new_intro_v2.mp4');

		// choose character
		this.load.image('chooseCharacter_banner', baseImage_src + 'menu/kies_je_karakter.png');
		this.load.spritesheet('character_male', baseImage_src + 'menu/character_man_button.png', 180, 181);
		this.load.spritesheet('character_female', baseImage_src + 'menu/character_woman_button.png', 180, 181);

		// menu
		this.load.image('menu_background', baseImage_src + 'levels/common/level_background.png');
		this.load.image('menu_levels-bg', baseImage_src + 'menu/menu_levels-bg.png');
		this.load.image('menu_btn-start', baseImage_src + 'menu/menu_play.png');
		this.load.spritesheet('menu_levels', baseImage_src + 'menu/menu_levels.png', 90, 93);
		//menu headings
		this.load.image('menu_banner-tutorial', baseImage_src + 'levels/common/level_banner_tutorial.png');
		this.load.image('menu_banner-school', baseImage_src + 'levels/common/level_banner_school.png');
		this.load.image('menu_banner-home', baseImage_src + 'levels/common/level_banner_thuis.png');
		this.load.image('menu_banner-work', baseImage_src + 'levels/common/level_banner_werk.png');
		this.load.image('menu_banner-sport', baseImage_src + 'levels/common/level_banner_sport.png');
		//menu buildings
		this.load.image('menu_building-tutorial', baseImage_src + 'levels/common/level_carousel_tutorial.png');
		this.load.image('menu_building-school', baseImage_src + 'levels/common/level_carousel_school.png');
		this.load.image('menu_building-home', baseImage_src + 'levels/common/level_carousel_thuis.png');
		this.load.image('menu_building-work', baseImage_src + 'levels/common/level_carousel_supermarkt.png');
		this.load.image('menu_building-sport', baseImage_src + 'levels/common/level_carousel_sport.png');
		//menu slider
		this.load.spritesheet('slider_chevron_right', baseImage_src + 'buttons/level_carousel_right.png', 95, 98);
		this.load.spritesheet('slider_chevron_left', baseImage_src + 'buttons/level_carousel_left.png', 95, 98);
		this.load.spritesheet('menu_button-start', baseImage_src + 'buttons/button_start.png', 266, 82);
		//menu locked
		this.load.image('level_locked', baseImage_src + 'levels/common/level_locked.png');
		//settings
		this.load.spritesheet('menu_button-settings', baseImage_src + 'buttons/button_settings.png', 95, 98);

		// messages
		this.load.image('message_screen', baseImage_src + 'menu/interface_message_screen.png');
		this.load.image('message_head-gameOver', baseImage_src + 'buttons/map_button_game_over.png');
		this.load.image('message_head-completed', baseImage_src + 'buttons/map_button_voltooid.png');
		this.load.image('message_head-tutorial', baseImage_src + 'buttons/map_button_tutorial.png');
		this.load.spritesheet('message_button-replay', baseImage_src + 'buttons/button_opnieuw.png', 266, 82);
		this.load.spritesheet('message_button-menu', baseImage_src + 'buttons/button_menu.png', 266, 82);
		this.load.spritesheet('message_button-continue', baseImage_src + 'buttons/button_verder.png', 266, 82);

		// level
		this.load.spritesheet('level_move', baseImage_src + 'buttons/level_forward.png', 95, 98);
		this.load.spritesheet('level_jump', baseImage_src + 'buttons/level_jump.png', 95, 98);
		this.load.spritesheet('level_restart', baseImage_src + 'buttons/level_restart.png', 95, 96);
		this.load.spritesheet('level_male_dude', baseImage_src + 'levels/common/walking-man.png', 250.75, 400);
		this.load.spritesheet('level_female_dude', baseImage_src + 'levels/common/walking-vrouw.png', 250.75, 400);
		this.load.image('level_mist', baseImage_src + 'levels/common/mist.png');
		this.load.image('level_mist-dark', baseImage_src + 'levels/common/mist-donker.png');
		this.load.image('level_notify-thoughlife', baseImage_src + 'levels/common/icoon-gruwelhoofd.png');
		
		// stress meter
		this.load.image('meter_balance-bar', baseImage_src + 'meter/meter_balance-bar.png');
		this.load.image('meter_balance-bar-indicator', baseImage_src + 'meter/meter_balance-bar-indicator.png');

		// tutorial level
		this.load.image('tutorial-skyline', baseImage_src + 'levels/tutorial/skyline.png');
		this.load.image('tutorial-background', baseImage_src + 'levels/tutorial/background.png');
		this.load.image('tutorial-platform', baseImage_src + 'levels/tutorial/platform.png');
		this.load.spritesheet('tutorial-dude', baseImage_src + 'levels/tutorial/dude.png', 64, 96);
		this.load.image('tutorial-cloud-platform', baseImage_src + 'levels/tutorial/cloud-platform.png');
		this.load.audio('irresistible', baseAudio_src + 'levels/irresistible.mp3');
		this.load.audio('relax', baseAudio_src + 'levels/relax-take-it-easy.mp3');
		this.load.audio('schoolMusic', baseAudio_src + 'levels/school.mp3');
		this.load.audio('sportMusic', baseAudio_src + 'levels/sport.mp3');
		this.load.audio('workMusic', baseAudio_src + 'levels/work.mp3');
		this.load.audio('rieu', baseAudio_src + 'general/rieu.mp3');
		
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
		this.load.spritesheet('work_male_dude', baseImage_src + 'levels/work/man-werk.png', 250.75, 400);
		this.load.spritesheet('work_female_dude', baseImage_src + 'levels/work/vrouw-werk.png', 250.75, 400);
		this.load.spritesheet('work-intro', baseImage_src + 'levels/work/introwork-sprite.png', 656, 532);
		this.load.spritesheet('work-horde', baseImage_src + 'levels/work/supermarket_stand_sprite.png', 122.333, 181);

		// sport level
		this.load.image('sport-skyline', baseImage_src + 'levels/sport/skyline.png');
		this.load.image('sport-background', baseImage_src + 'levels/sport/background.png');
		this.load.image('sport-platform', baseImage_src + 'levels/sport/platform.png');
		this.load.spritesheet('sport-intro', baseImage_src + 'levels/sport/sport-sprite.png', 656, 532);
		this.load.image('sport-horde', baseImage_src + 'levels/sport/obstakel-sport.png');
		this.load.spritesheet('sport_male_dude', baseImage_src + 'levels/sport/man-sport.png', 250.75, 400);
		this.load.spritesheet('sport_female_dude', baseImage_src + 'levels/sport/vrouw-sport.png', 250.75, 400);
		//this.load.spritesheet('sport-dude', baseImage_src + 'levels/sport/boss.png', 64, 96);
	},
	create: function() {
		this.state.start('startScreen');
	}
};