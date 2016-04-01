var stress = stress || {};
var Phaser = Phaser || {};

//Levels
var level_tutorial = level_tutorial || {};
var level_bedroom = level_bedroom || {};
var level_school = level_school || {};
var level_work = level_work || {};
var level_sport = level_sport || {};

stress.dim = {
	w: function () {
		var w = window.innerWidth;
		//was736
		if (w > 960) { return 960; } else { return w; }
	},
	h: function () {
		var h = window.innerHeight;
		//was441
		if (h > 540) { return 540; } else { return h; }
	}
};

stress.game = new Phaser.Game(stress.dim.w(), stress.dim.h(), Phaser.CANVAS, 'game');


stress.global = {
	level: 0,
	speed: 500,
	levels: [
		level_bedroom,
		level_school,
		level_sport,
		level_work,
		level_tutorial
	]
};

stress.game.state.add('Preload', stress.Preload);
stress.game.state.add('introVideo', stress.introVideo);
stress.game.state.add('chooseCharacter', stress.settings);
stress.game.state.add('startScreen', stress.startScreen);
stress.game.state.add('levelSelect', stress.levelSelect);
stress.game.state.add('Level', stress.Level);

stress.game.state.start('Preload');

(function() {var m = 'font-family:monospace;color:#';if(window.console){window.console.log('%cWWW%cW%c#%c#%c#%cWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW%cW%c#%c#%cW%cWWW\nWW%c#%c#%c#%cWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW%cW%c#%c#%cWW\nWW%c#%c#%cW%cWWWWW%c#%c##%cW%cWWWWW%c#%c#%c#%c#%c#%cWWWWW%c#%c##%c#%c#%c############%c#%c#%cWWWWWWW%c#%c#%cWW\nWW%c#%c#%cW%cWWWWWW%c#%c##%cWWWW%c#%c##%c#%c##%c#%cWWW%cW%c##%c#%cW%c#%c##%c##########%c###%cWWWWWW%c#%c#%cWW\nWW%c#%c#%cWWWWWWW%cW%c##%c#%cWW%cW%c##%c#%cW%c#%c##%cW%cWW%c#%c##%cWW%c#%c##%cWWWWWWWWWW%c###%cWWWWWW%c#%c#%cWW\n%c#%c##%cW%cWWWWWWWW%c#%c##%c#%cW%c##%c#%cWWW%c##%c#%cW%c#%c##%cW%cWW%c#%c##%cWWWWWWWWWW%c###%cWWWWWW%cW%c#%c#%c#\n%cW%c#%c#%c#%cWWWWWWWWW%c#%c##%c#%c##%cW%cWWW%cW%c##%c#%c##%c#%cWWW%c#%c##%cWWWWWWWWWW%c###%cWWWWWW%c#%c#%c#%cW\nWW%c#%c#%cW%cWWWWWWWWW%c#%c#%c#%c#%cW%cWWWWW%cW%c#%c#%c#%c#%cWWWW%c#%c##%cWWWWWWWWWW%c###%cWWWWWW%c#%c#%cWW\nWW%c#%c#%cW%cWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW%c#%c#%cWW\nWW%c#%c#%cW%cWWWWW%c#%cW%c#%cWW%c#%cW%c#%cWW%cW%cWWW%c#%cWW%cW%cWW%c#%cW%cW%cWW%c#%cW%cW%cW%cW%cW%c#%cWW%c#%cWW%c#%c#%cWWWWWW%c#%c#%cWW\nWW%cW%c#%c#%cW%cW%cWWW%c#%cW%cWWWW%c#%cW%cWW%c#%c#%cWW%c#%cWW%cW%cWW%c#%c#%cWWW%c#%c#%cW%cW%cW%c#%cW%cWW%c#%cW%cW%cWWWWW%cW%cW%c#%c#%c#%cWW\n',m+'ffffff',m+'C00D0D',m+'C00D0D',m+'C00D0D',m+'C00D0D',m+'ffffff',m+'C00D0D',m+'C00D0D',m+'C00D0D',m+'C00D0D',m+'ffffff',m+'6C2727',m+'C00D0D',m+'482727',m+'ffffff',m+'0B0A0A',m+'C00D0D',m+'A50303',m+'ffffff',m+'8D0A0A',m+'C00D0D',m+'010101',m+'ffffff',m+'A50000',m+'C00D0D',m+'392323',m+'ffffff',m+'7E2B2B',m+'C00D0D',m+'C00D0D',m+'C00D0D',m+'572B2B',m+'ffffff',m+'811A1A',m+'C00D0D',m+'811919',m+'C00D0D',m+'C00D0D',m+'C00D0D',m+'772C2C',m+'ffffff',m+'C00D0D',m+'C00D0D',m+'ffffff',m+'8D0A0A',m+'C00D0D',m+'010101',m+'ffffff',m+'C00D0D',m+'C00D0D',m+'ffffff',m+'C00D0D',m+'C00D0D',m+'821B1B',m+'C00D0D',m+'7C2323',m+'ffffff',m+'050505',m+'C00D0D',m+'B30000',m+'ffffff',m+'C00D0D',m+'C00D0D',m+'B00707',m+'C00D0D',m+'ffffff',m+'C00D0D',m+'C00D0D',m+'ffffff',m+'AD0202',m+'C00D0D',m+'ffffff',m+'0B0A0A',m+'C00D0D',m+'C00D0D',m+'ffffff',m+'2E2121',m+'C00D0D',m+'A10505',m+'ffffff',m+'C00D0D',m+'C00D0D',m+'030303',m+'ffffff',m+'C00D0D',m+'C00D0D',m+'ffffff',m+'C00D0D',m+'C00D0D',m+'ffffff',m+'C00D0D',m+'ffffff',m+'C00D0D',m+'B30000',m+'ffffff',m+'702B2B',m+'C00D0D',m+'302424',m+'ffffff',m+'7D1414',m+'C00D0D',m+'662727',m+'ffffff',m+'C00D0D',m+'C00D0D',m+'ffffff',m+'C00D0D',m+'C00D0D',m+'ffffff',m+'9D0A0A',m+'C00D0D',m+'3E2727',m+'ffffff',m+'C00D0D',m+'C00D0D',m+'ffffff',m+'C00D0D',m+'ffffff',m+'0B0A0A',m+'C00D0D',m+'C00D0D',m+'832525',m+'ffffff',m+'522727',m+'C00D0D',m+'B10000',m+'ffffff',m+'B30000',m+'C00D0D',m+'AE0000',m+'C00D0D',m+'0D0B0B',m+'ffffff',m+'452626',m+'C00D0D',m+'9A0707',m+'C00D0D',m+'C00D0D',m+'ffffff',m+'C00D0D',m+'C00D0D',m+'ffffff',m+'C00D0D',m+'ffffff',m+'9D0808',m+'C00D0D',m+'7F2626',m+'ffffff',m+'960B0B',m+'C00D0D',m+'010101',m+'ffffff',m+'900F0F',m+'C00D0D',m+'C00D0D',m+'B30000',m+'C00D0D',m+'ffffff',m+'362222',m+'C00D0D',m+'C00D0D',m+'C00D0D',m+'C00D0D',m+'ffffff',m+'C00D0D',m+'C00D0D',m+'ffffff',m+'C00D0D',m+'ffffff',m+'C00D0D',m+'C00D0D',m+'ffffff',m+'8D0A0A',m+'C00D0D',m+'010101',m+'ffffff',m+'C00D0D',m+'C00D0D',m+'ffffff',m+'8D0A0A',m+'C00D0D',m+'010101',m+'ffffff',m+'940303',m+'141111',m+'900A0A',m+'ffffff',m+'C00D0D',m+'ffffff',m+'A30E0E',m+'ffffff',m+'1B1414',m+'ffffff',m+'AA0404',m+'ffffff',m+'161414',m+'ffffff',m+'970303',m+'ffffff',m+'C00D0D',m+'ffffff',m+'AA0000',m+'1F1A1A',m+'030303',m+'ffffff',m+'392D2D',m+'ffffff',m+'C00D0D',m+'ffffff',m+'990000',m+'ffffff',m+'9D0202',m+'712626',m+'ffffff',m+'C00D0D',m+'C00D0D',m+'ffffff',m+'120F0F',m+'C00D0D',m+'AB0000',m+'281E1E',m+'1F1818',m+'ffffff',m+'542F2F',m+'1F1A1A',m+'ffffff',m+'6C2929',m+'191515',m+'ffffff',m+'C00D0D',m+'C00D0D',m+'ffffff',m+'5D3535',m+'ffffff',m+'0B0B0B',m+'ffffff',m+'583131',m+'492D2D',m+'ffffff',m+'603636',m+'C00D0D',m+'342727',m+'ffffff',m+'C00D0D',m+'C00D0D',m+'C00D0D',m+'ffffff',m+'553030',m+'ffffff',m+'161313',m+'ffffff',m+'0D0B0B',m+'281E1E',m+'931717',m+'C00D0D',m+'4F2C2C',m+'ffffff','');}}());