var home = {
	name: 'home',
	preload: function(game) {
		var baseURL = 'lib/scenes/home/images/';
		game.load.image(this.name + '-skyline', baseURL+'skyline.png');
		game.load.image(this.name + '-background', baseURL+'background.png');
		game.load.image(this.name + '-platform', baseURL+'platform.png');
		game.load.spritesheet(this.name + '-dude', baseURL+'dude.png', 64, 96);
	}
};