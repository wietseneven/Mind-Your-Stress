var home = {
	preload: function(game) {
		var baseURL = 'lib/scenes/home/images/';
		game.load.image('skyline', baseURL+'skyline.png');
		game.load.image('background', baseURL+'background.png');
		game.load.image('platform', baseURL+'platform.png');
		game.load.spritesheet('dude', baseURL+'dude.png', 64, 96);
	}
};