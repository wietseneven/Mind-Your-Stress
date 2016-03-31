var stress = stress || {};
var level_sport = level_sport || {};

level_sport = {
	name: 'tutorial',
	obstacles: function(level) {
		level.obstacles.create(200, stress.dim.h() - level.platformTop, level.levelName() + '-platform');
	}
};