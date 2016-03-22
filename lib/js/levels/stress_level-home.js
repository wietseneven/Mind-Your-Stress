var stress = stress || {};
var level_home = level_home || {};

level_home = {
	name: 'home',
	obstacles: function(level) {
		level.stationary.create(200, stress.dim.h() - 100, level.levelName() + '-platform');
	},
	update: function(level) {

	}
};