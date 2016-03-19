var stress = stress || {};

stress.Preload = function() {};

stress.Preload.prototype = {
	preload: function() {
		var baseSRC = 'lib/img/';

		// menu
		this.load.image('menu_background', baseSRC + 'menu/menu_background.png');
		this.load.image('menu_btn-start', baseSRC + 'menu/menu_btn-start.png');
		
		// home level
		this.load.image('home-skyline', baseSRC + 'levels/home/skyline.png');
		this.load.image('home-background', baseSRC + 'levels/home/background.png');
		this.load.image('home-platform', baseSRC + 'levels/home/platform.png');
		this.load.spritesheet('home-dude', baseSRC + 'levels/home/dude.png', 64, 96);
		this.load.image('home-cloud-platform', baseSRC + 'levels/home/cloud-platform.png');

		// school level
		this.load.image('school-skyline', baseSRC + 'levels/school/skyline.png');
		this.load.image('school-background', baseSRC + 'levels/school/background.png');
		this.load.image('school-platform', baseSRC + 'levels/school/platform.png');
		this.load.spritesheet('school-dude', baseSRC + 'levels/school/teacher.png', 64, 96);

		// work level
		this.load.image('work-skyline', baseSRC + 'levels/work/skyline.png');
		this.load.image('work-background', baseSRC + 'levels/work/background.png');
		this.load.image('work-platform', baseSRC + 'levels/work/platform.png');
		this.load.spritesheet('work-dude', baseSRC + 'levels/work/boss.png', 64, 96);
	},
	create: function() {
		this.state.start('MainMenu');
	}
};