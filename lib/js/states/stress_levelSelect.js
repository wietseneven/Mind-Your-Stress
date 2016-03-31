var stress = stress || {};
var phaseSlider = phaseSlider || {};

stress.levelSelect = function() {};

stress.levelSelect.prototype = {
	create: function() {
		var background = this.game.add.image(0, 0, 'menu_background');
		background.width = stress.game.width;
		background.height = stress.game.height;

		var bannerTutorial = this.game.add.image(0,0,"menu_banner-tutorial");
		var bannerHome = this.game.add.image(0,0,"menu_banner-home");
		var bannerSchool = this.game.add.image(0,0,"menu_banner-school");
		var bannerSport = this.game.add.image(0,0,"menu_banner-sport");
		var bannerWork = this.game.add.image(0,0,"menu_banner-work");
		
		//var buildingTutorial = this.game.add.image();
		var buildingTutorial = this.game.add.image(0,0,"menu_building-tutorial");
		var buildingHome = this.game.add.image(0,0,"menu_building-home");
		var buildingSchool = this.game.add.image(0,0,"menu_building-school");
		var buildingSport = this.game.add.image(0,0,"menu_building-sport");
		var buildingWork = this.game.add.image(0,0,"menu_building-work");

		var tutorialLevel = this.game.add.group();
		tutorialLevel.width = this.game.width;
		tutorialLevel.height = this.game.height;
		bannerTutorial.scale.setTo(0.5, 0.5);
		bannerTutorial.x = this.game.width/2 - bannerTutorial.width/2;
		bannerTutorial.y = 50;
		buildingTutorial.scale.setTo(0.5, 0.5);
		buildingTutorial.x = this.game.width/2 - buildingTutorial.width/2 + 25;
		buildingTutorial.y = this.game.height - buildingTutorial.height - 100;


		var homeLevel = this.game.add.group();
		homeLevel.width = this.game.width;
		homeLevel.height = this.game.height;
		bannerHome.scale.setTo(0.5, 0.5);
		bannerHome.x = this.game.width/2 - bannerHome.width/2;
		bannerHome.y = 50;
		buildingHome.scale.setTo(0.5, 0.5);
		buildingHome.x = this.game.width/2 - buildingHome.width/2;
		buildingHome.y = this.game.height - buildingHome.height - 100;


		var schoolLevel = this.game.add.group();
		schoolLevel.width = this.game.width;
		schoolLevel.height = this.game.height;
		bannerSchool.scale.setTo(0.5, 0.5);
		bannerSchool.x = this.game.width/2 - bannerSchool.width/2;
		bannerSchool.y = 50;
		buildingSchool.scale.setTo(0.5, 0.5);
		buildingSchool.x = this.game.width/2 - buildingSchool.width/2;
		buildingSchool.y = this.game.height - buildingSchool.height - 100;

		var sportLevel = this.game.add.group();
		sportLevel.width = this.game.width;
		sportLevel.height = this.game.height;
		bannerSport.scale.setTo(0.5, 0.5);
		bannerSport.x = this.game.width/2 - bannerSport.width/2;
		bannerSport.y = 50;
		buildingSport.scale.setTo(0.5, 0.5);
		buildingSport.x = this.game.width/2 - buildingSport.width/2;
		buildingSport.y = this.game.height - buildingSport.height - 100;

		var workLevel = this.game.add.group();
		workLevel.width = this.game.width;
		workLevel.height = this.game.height;
		bannerWork.scale.setTo(0.5, 0.5);
		bannerWork.x = this.game.width/2 - bannerWork.width/2;
		bannerWork.y = 50;
		buildingWork.scale.setTo(0.5, 0.5);
		buildingWork.x = this.game.width/2 - buildingWork.width/2;
		buildingWork.y = this.game.height - buildingWork.height - 100;

		/////
		tutorialLevel.add(bannerTutorial);
		tutorialLevel.add(buildingTutorial);
		var buttonTutorial = this.game.add.button(this.game.width / 2 - 106, stress.game.height - 78, 'menu_button-start', this.startTutorial, this, 0, 0, 1);
		buttonTutorial.scale.setTo(0.8);
		tutorialLevel.add(buttonTutorial);
		/////
		homeLevel.add(bannerHome);
		homeLevel.add(buildingHome);
		if (!localStorage.tutorialHighscore) {
			var lockedHome = this.game.add.image(this.game.width / 2, this.game.height / 2 + 60, 'level_locked');
			lockedHome.anchor.setTo(0.5);
			lockedHome.width = 200;
			lockedHome.height = 200;
			homeLevel.add(lockedHome);
		} else {
			var buttonHome = this.game.add.button(this.game.width / 2 - 106, stress.game.height - 78, 'menu_button-start', this.startLevel1, this, 0, 0, 1);
			buttonHome.scale.setTo(0.8);
			homeLevel.add(buttonHome);

		}
		/////
		schoolLevel.add(bannerSchool);
		schoolLevel.add(buildingSchool);
		if (!localStorage.bedroomHighscore) {
			var lockedSchool = this.game.add.image(this.game.width / 2, this.game.height / 2 + 60, 'level_locked');
			lockedSchool.anchor.setTo(0.5);
			lockedSchool.width = 200;
			lockedSchool.height = 200;
			schoolLevel.add(lockedSchool);
		} else {
			var buttonSchool = this.game.add.button(this.game.width / 2 - 106, stress.game.height - 78, 'menu_button-start', this.startLevel2, this, 0, 0, 1);
			buttonSchool.scale.setTo(0.8);
			schoolLevel.add(buttonSchool);

		}

		/////
		sportLevel.add(bannerSport);
		sportLevel.add(buildingSport);
		if (!localStorage.schoolHighscore) {
			var lockedSport = this.game.add.image(this.game.width / 2, this.game.height / 2 + 60, 'level_locked');
			lockedSport.anchor.setTo(0.5);
			lockedSport.width = 200;
			lockedSport.height = 200;
			sportLevel.add(lockedSport);
		} else {
			var buttonSport = this.game.add.button(this.game.width / 2 - 106, stress.game.height - 78, 'menu_button-start', this.startLevel3, this, 0, 0, 1);
			buttonSport.scale.setTo(0.8);
			sportLevel.add(buttonSport);
		}

		/////
		workLevel.add(bannerWork);
		workLevel.add(buildingWork);

		if (!localStorage.sportHighscore) {
			var lockedWork = this.game.add.image(this.game.width / 2, this.game.height / 2 + 60, 'level_locked');
			lockedWork.anchor.setTo(0.5);
			lockedWork.width = 200;
			lockedWork.height = 200;
			workLevel.add(lockedWork);
		} else {
			var buttonWork = this.game.add.button(this.game.width / 2 - 106, stress.game.height - 78, 'menu_button-start', this.startLevel4, this, 0, 0, 1);
			buttonWork.scale.setTo(0.8);
			workLevel.add(buttonWork);
		}


		this.slider = new phaseSlider(this.game); //make sure to have slider publicly available
		this.slider.createSlider({
			mode: "horizontal",
			width: this.game.width,
			height: this.game.height,
			x: 0,
			y: 0,
			objects:[tutorialLevel, homeLevel, schoolLevel, sportLevel, workLevel]
		});

		var buttonSettings = this.game.add.button(20, stress.game.height - 70, 'menu_button-settings', this.startSettings, this, 0, 0, 1);
		buttonSettings.scale.setTo(0.5);

	},
	startTutorial: function() {
		stress.global.level = 4;
		stress.game.state.start('Level');
	},
	startLevel1: function() {
		stress.global.level = 0;
		stress.game.state.start('Level');
	},
	startLevel2: function() {
		stress.global.level = 1;
		stress.game.state.start('Level');
	},
	startLevel3: function() {
		stress.global.level = 2;
		stress.game.state.start('Level');
	},
	startLevel4: function() {
		stress.global.level = 3;
		stress.game.state.start('Level');
	},
	startSettings: function() {
		stress.game.state.start('chooseCharacter');
	}
};