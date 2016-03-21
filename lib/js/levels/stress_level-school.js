var stress = stress || {};

var level_school = {
	name: 'school',
	obstacles: function(level) {
		level.stationary.create(200, stress.dim.h() - 100, level.levelName() + '-platform');
	}
};