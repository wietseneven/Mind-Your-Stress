var stress = stress || {};
var level_home = level_home || {};

level_home = {
	name: 'home',
	obstacles: function(level) {
		level.obstacles.create(200, stress.dim.h() - level.platformTop, level.levelName() + '-platform');
	}
};