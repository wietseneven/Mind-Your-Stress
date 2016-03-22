var stress = stress || {};
var level_work = level_work || {};

level_work = {
	name: 'work',
	obstacles: function (level) {
		level.stationary.create(200, stress.dim.h() - 100, level.levelName() + '-platform');
	},
	update: function() {

	}
};