var stress = stress || {};

stress.Preload = function() {};

stress.Preload.prototype = {
	preload: function() {
		var baseSRC = 'lib/img/';
		this.load.image('menu_background', baseSRC + 'menu/menu_background.png');
		this.load.image('menu_btn-start', baseSRC + 'menu/menu_btn-start.png');
		
		// home scene
		this.load.image('home-skyline', baseSRC + 'levels/home/skyline.png');
		this.load.image('home-background', baseSRC + 'levels/home/background.png');
		this.load.image('home-platform', baseSRC + 'levels/home/platform.png');
		this.load.spritesheet('home-dude', baseSRC + 'levels/home/dude.png', 64, 96);
		this.load.image('home-cloud-platform', baseSRC + 'levels/home/cloud-platform.png');

	},
	create: function() {
		this.state.start('MainMenu');
	}
};