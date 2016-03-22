var stress = stress || {};

stress.rand = function(max, min, _int) {
	// Helper function for random number
	max = (max === 0 || max)?max:1;
	min = min || 0;
	var	gen = min + (max - min) * Math.random();

	return (_int) ? Math.round(gen) : gen;
};// Helper function for random number