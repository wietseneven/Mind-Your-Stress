/**
 * PHASE-SLIDE IS A UI SLIDER FOR PHASER.IO LIBRARY
 *
 * COPYWRITE-2015
 * AUTHOR: MICHAEL DOBEKIDIS (NETGFX.COM)
 *
 */

var phaseSlider = phaseSlider || {};


phaseSlider = function (game) {

	var _this = this;

	game.phaseSlider = _this;
	_this.game = game;
	_this.locked = false;
	_this.slideIndex = 0;
	_this.slider_timer = null;
	_this.tweenObj = {};

	_this.goToNext = function () {
		_this.locked = true;
		if (_this.options._mode === "horizontal") {
			var finalX = _this.sliderMainGroup.x + (_this.options._width * -1);

			if ((_this.slideIndex >= _this.options._objects.length - 1) && _this.options.autoAnimate === false) {
				_this.stopSlider();
				return false;
			}

			// animate loop
			if (_this.options.autoAnimate === true) {
				if (_this.slideIndex >= _this.options._objects.length - 1) {
					_this.slideIndex = 0;
					_this.sliderMainGroup.x = _this.options._x;
					this.locked = false;
					return true;
				}
			}

			_this.tweenObj = game.add.tween(_this.sliderMainGroup).to({
				x: finalX
			}, _this.options.animationDuration, _this.options.animationEasing, true, 0, 0, false);
			_this.tweenObj.onComplete.add(function () {
				this.locked = false;
				this.slideIndex += 1;
				if (_this.options.autoAnimate === false && this.slideIndex >= _this.options._objects.length - 1) {
					if (_this.options._showHandles === true) {
						this.sliderControlsGroup.children[0].alpha = 0;
					}
				}

				// enable prev
				if (_this.options._showHandles === true) {
					this.sliderControlsGroup.children[1].alpha = 1;
				}
			}, _this);
		} else {

			var finalY;
			if (_this.options._mode === "vertical-from-top") {
				finalY = _this.sliderMainGroup.y + (_this.options._height);
			} else if (_this.options._mode === "vertical-from-bottom") {
				finalY = _this.sliderMainGroup.y + (_this.options._height * -1);
			}

			if ((_this.slideIndex >= _this.options._objects.length - 1) && _this.options.autoAnimate === false) {
				_this.stopSlider();
				return false;
			}

			// animate loop
			if (_this.options.autoAnimate === true) {
				if (_this.slideIndex >= _this.options._objects.length - 1) {
					_this.slideIndex = 0;
					_this.sliderMainGroup.y = _this.options._y;
					this.locked = false;
					return true;
				}
			}

			_this.tweenObj = game.add.tween(_this.sliderMainGroup).to({
				y: finalY
			}, _this.options.animationDuration, _this.options.animationEasing, true, 0, 0, false);
			_this.tweenObj.onComplete.add(function () {
				this.locked = false;
				this.slideIndex += 1;

				if (_this.options.autoAnimate === false && this.slideIndex >= _this.options._objects.length - 1) {
					if (_this.options._showHandles === true) {
						this.sliderControlsGroup.children[0].alpha = 0;
					}
				}

				// enable prev
				if (_this.options._showHandles === true) {
					this.sliderControlsGroup.children[1].alpha = 1;
				}
			}, _this);
		}
	};
	_this.goToPrev = function () {
		_this.locked = true;
		if (_this.options._mode === "horizontal") {
			var finalX = _this.sliderMainGroup.x + (_this.options._width);

			if (_this.slideIndex <= 0 && _this.options.autoAnimate === false) {
				_this.stopSlider();
				return false;
			}

			_this.tweenObj = game.add.tween(_this.sliderMainGroup).to({
				x: finalX
			}, _this.options.animationDuration, _this.options.animationEasing, true, 0, 0, false);
			_this.tweenObj.onComplete.add(function () {
				this.locked = false;
				this.slideIndex -= 1;

				if (this.slideIndex < 0) {
					this.slideIndex = 0;
				}

				if (_this.options.infiniteLoop === false && this.slideIndex <= 0) {
					// enable prev
					if (_this.options._showHandles === true) {
						this.sliderControlsGroup.children[1].alpha = 0;
					}
				}

				// enable next
				if (_this.options._showHandles === true) {
					this.sliderControlsGroup.children[0].alpha = 1;
				}

			}, _this);
		} else {
			var finalY;
			if (_this.options._mode === "vertical-from-top") {
				finalY = _this.sliderMainGroup.y + (_this.options._height * -1);
			} else if (_this.options._mode === "vertical-from-bottom") {
				finalY = _this.sliderMainGroup.y + (_this.options._height);
			}
			if (_this.slideIndex <= 0 && _this.options.autoAnimate === false) {
				_this.stopSlider();
				return false;
			}

			_this.tweenObj = game.add.tween(_this.sliderMainGroup).to({
				y: finalY
			}, _this.options.animationDuration, _this.options.animationEasing, true, 0, 0, false);
			_this.tweenObj.onComplete.add(function () {
				this.locked = false;
				this.slideIndex -= 1;

				if (this.slideIndex < 0) {
					this.slideIndex = 0;
				}

				if (_this.options.autoAnimate === false && this.slideIndex <= 0) {
					if (_this.options._showHandles === true) {
						this.sliderControlsGroup.children[1].alpha = 0;
					}
				}

				// enable prev
				if (_this.options._showHandles === true) {
					this.sliderControlsGroup.children[0].alpha = 1;
				}
			}, _this);
		}
	};

	_this.startSlider = function () {
		var _timer = game.time.create(false);
		_timer.start();
		_timer.loop(Phaser.Timer.SECOND * _this.options.animationDelay, _this.goToNext, _this);
		_this.slider_timer = _timer;
	};
	_this.stopSlider = function () {
		if (_this.slider_timer !== null) {
			_this.slider_timer.stop(true);
			_this.slider_timer = null;
		} else {
			return false;
		}
	};

	_this.moveToSlide = function (index, animate) {
		var finalX;
		if (index >= _this.options._objects.length) {
			return false;
		}
		if (_this.options._mode === "horizontal") {
			finalX = (_this.options._x - (_this.options._width * (index)));
			if (animate === true) {

				var tweenObj = game.add.tween(_this.sliderMainGroup).to({
					x: finalX
				}, _this.options.animationDuration, _this.options.animationEasing, true, 0, 0, false);
			} else {
				_this.sliderMainGroup.x = finalX;
			}
		} else if (_this.options._mode === "vertical-from-top") {
			//TODO: ADD VERTICAL-FROM-TOP
		} else if (_this.options._mode === "vertical-from-bottom") {
			//TODO: ADD VERTICAL-FROM-BOTTOM
		}
	};
	/////////////////////////////////////////////////////////////////////////////////////////
	///
	_this.onDragStart = function (sprite, pointer, dragX, dragY) {
		_this.dragInit = pointer.x;
		_this.lastDrag = pointer.x;
	};

	_this.onDragStop = function (e) {

	};
	_this.dragUpdate = function (sprite, pointer, dragX, dragY) {

		var finalX = dragX; // - _this.options._x;
		// going left
		if (pointer.x < _this.dragInit) {
			var diff = Math.abs(pointer.x) - Math.abs(_this.lastDrag);
			// going right
			if (diff < 0) {
				finalX = _this.sliderMainGroup.x - 1;
			} else {
				finalX = _this.sliderMainGroup.x + 1;
			}
		} else {
			var diff = Math.abs(pointer.x) - Math.abs(_this.lastDrag);
			// going right
			if (diff < 0) {
				finalX = _this.sliderMainGroup.x - 1;
			} else {
				finalX = _this.sliderMainGroup.x + 1;
			}
		}

		if (finalX <= (_this.options._x + (_this.options._width * (_this.options._objects.length - 2))) * -1) {
			finalX = (_this.options._x + (_this.options._width * (_this.options._objects.length - 2))) * -1;
		} else if (finalX >= _this.options._x) {
			finalX = _this.options._x;
		}
		_this.sliderMainGroup.x = finalX;
		_this.lastDrag = pointer.x;
	};

	return {
		createSlider: function (options) {
			// initialize index
			_this.slideIndex = 0;

			_this.options = {
				_mode: options.mode || "horizontal", // horizontal, vertical-from-top, vertical-from-bottom
				_width: options.width || 500,
				_height: options.height || 400,
				_animationEffect: options.animationEffect || "slide", // slide, fade, cover
				autoAnimate: options.autoAnimate || false,
				infiniteLoop: options.infiniteLoop || false,
				animationDelay: options.animationDelay || 2,
				animationDuration: options.animationDuration || 600,
				animationEasing: options.animationEasing || Phaser.Easing.Cubic.Out, //Phaser.Easing.Linear.None,
				_x: options.x || 0,
				_y: options.y || 0,
				_objects: options.objects || [], // can take: single-sprite, single-image, group
				sliderBG: options.sliderBG || 0x35d2e0,
				customSliderBG: options.customSliderBG || false,
				sliderBGAlpha: options.sliderBGAlpha || 1,
				_customHandleNext: options.customHandleNext || "",
				_customHandlePrev: options.customHandlePrev || "",
				_showHandles: options.showHandles || true,
				_onNextCallback: options.onNextCallback || false,
				_onPrevCallback: options.onPrevCallback || false,
				_addModal: options.modal || false,
				_modalAlpha: options.modalAlpha || 0.7,
				_staticElements: options.staticElements || []
			};

			//////////////////////////////////////////////////////////////////////////////////////////////

			var bgRect;
			_this._modal = {};
			if(_this.options._addModal ===  true) {
				_this._modal = game.add.graphics(game.width, game.height);
				_this._modal.beginFill(0x000000, _this.options._modalAlpha);
				_this._modal.x = 0;
				_this._modal.y = 0;
				_this._modal.inputEnabled = true;
				_this._modal.drawRect(0, 0, _this.game.width, _this.game.height);
			}
			else {
				_this._modal = false;
			}

			//////// OBJECTS GROUP
			///
			_this.sliderBGGroup = _this.game.add.group();
			_this.sliderMainGroup = _this.game.add.group();
			_this.sliderBGGroup.width = _this.options._width;
			_this.sliderMainGroup.width = _this.options._width;
			if (_this.options._mode === "horizontal") {
				_this.sliderMainGroup.width = _this.options._width * _this.options._objects.length;

				// if used as a placeholder don't make the width = 0
				if (_this.options._objects.length === 0) {
					_this.sliderMainGroup.width = _this.options._width;
				}
			} else {
				_this.sliderMainGroup.height = _this.options._height * _this.options._objects.length;

				// if used as a placeholder don't make the height = 0
				if (_this.options._objects.length === 0) {
					_this.sliderMainGroup.height = _this.options._height;
				}
			}
			_this.sliderMainGroup.height = _this.options._height;
			_this.sliderMainGroup.x = _this.options._x;
			_this.sliderMainGroup.y = _this.options._y;
			//
			_this.sliderBGGroup.height =  _this.options._height;
			_this.sliderBGGroup.x = _this.options._x;
			_this.sliderBGGroup.y = _this.options._y;

			/// DRAG for horizontal
			/*var draggableSprite = _this.game.add.sprite(_this.options._x, _this.options._y);
			 draggableSprite.width = (_this.options._objects.length+5) * _this.options._width;
			 draggableSprite.height = _this.options._height;
			 draggableSprite.y = _this.options._y;
			 draggableSprite.inputEnabled = true;
			 draggableSprite.input.enableDrag();
			 draggableSprite.input.allowVerticalDrag = false;
			 // draggableSprite.input.enableSnap(_this.options._width, _this.options._height, true, true);
			 draggableSprite.events.onDragStart.add(_this.onDragStart, _this);
			 draggableSprite.events.onDragStop.add(_this.onDragStop, _this);
			 draggableSprite.events.onDragUpdate.add(_this.dragUpdate, _this);
			 _this._draggableSprite = draggableSprite;*/

			/////// END OF OBJECTS GROUP

			//////// CONTROLS GROUP
			_this.sliderControlsGroup = _this.game.add.group();
			_this.sliderControlsGroup.width = _this.options._width;
			_this.sliderControlsGroup.height = _this.options._height;
			_this.sliderControlsGroup.x = _this.options._x;
			_this.sliderControlsGroup.y = _this.options._y;

			//////// END OF CONTROLS GROUP

			//MASK
			var maskGraphics = game.add.graphics(0, 0);
			maskGraphics.beginFill(0xffffff);
			maskGraphics.drawRect(_this.options._x, _this.options._y, _this.options._width, _this.options._height);
			_this.sliderMainGroup.mask = maskGraphics;

			/// create main bg
			if (_this.options.customSliderBG === false) {
				
			} else {
				_this.sliderBGGroup.add(_this.options.customSliderBG);
			}
			// add controls
			if (_this.options._showHandles === true) {

				var chevronRight;
				var chevronLeft;

				if (_this.options._customHandleNext === "") {
					chevronRight = game.add.image(0, 0, "slider_chevron_right");
					chevronRight.scale.setTo(0.6, 0.6);
				} else {
					chevronRight = game.add.image(0, 0, _this.options._customHandleNext);
				}
				chevronRight.x = _this.options._width - (chevronRight.width + 10); //_this.options._x+_this.options._width - (chevronRight.width+10);
				chevronRight.y = (_this.options._height / 2) - chevronRight.height / 2;
				chevronRight.inputEnabled = true;
				chevronRight.events.onInputDown.add(function (e, pointer) {
					if (_this.options._onNextCallback) {
						_this.options._onNextCallback();
					}

					if (_this.tweenObj.isRunning !== true) {
						_this.stopSlider();
						_this.goToNext();
					}

				}, _this);


				if (_this.options._customHandlePrev === "") {
					chevronLeft = game.add.image(0, 0, "slider_chevron_left");
					chevronLeft.scale.setTo(0.6, 0.6);
				} else {
					chevronLeft = game.add.image(0, 0, _this.options._customHandlePrev);
				}
				chevronLeft.x = 10;
				chevronLeft.y = (_this.options._height / 2) - chevronLeft.height / 2;
				chevronLeft.inputEnabled = true;
				chevronLeft.events.onInputDown.add(function (e, pointer) {
					if (_this.options._onPrevCallback) {
						_this.options._onPrevCallback();
					}

					if (_this.tweenObj.isRunning !== true) {
						_this.stopSlider();
						_this.goToPrev();
					}

				}, _this);



				// if not infinite initialy hide it
				if (_this.options.infiniteLoop === false) {
					chevronLeft.alpha = 0;
				}
			}


			// ADDING THE BLOCKS
			if (_this.options._objects.length > 0) {
				var objArr = _this.options._objects.slice(0);
				var length = Number(objArr.length);
				for (var i = 0; i < length; i++) {
					var x;
					var y;
					// mode
					if (_this.options._mode === "horizontal") {
						objArr[i].x = (_this.options._width * i);
					} else if (_this.options._mode === "vertical-from-top") {
						objArr[i].y = (_this.options._height * i) * -1;

					} else if (_this.options._mode === "vertical-from-bottom") {
						objArr[i].y = (_this.options._height * i);
					}
					_this.sliderMainGroup.add(objArr[i]);
				}
				_this.options._objects = _this.sliderMainGroup.children;
				//window.console.log(_this.options._objects.length, _this.options._objects,  _this.sliderMainGroup.children.length);
			}


			// ADDING STATIC ELEMENTS
			if(_this.options._staticElements.length > 0) {
				for (var i = 0;i<_this.options._staticElements.length;i++ ) {
					game.world.bringToTop(_this.options._staticElements[i]);
					_this.sliderBGGroup.add(_this.options._staticElements[i]);
				}
			}


			// move the chevrons to top
			if (_this.options._showHandles === true) {
				_this.sliderControlsGroup.add(chevronRight);
				_this.sliderControlsGroup.add(chevronLeft);
			}

			//////////// AUTO ANIMATE
			if (_this.options.autoAnimate === true) {
				_this.startSlider();
			}

		},
		startSlider: function () {
			_this.startSlider();
		},
		stopSlider: function () {
			_this.startSlider();
		},
		moveToSlide: function (index, animate) {

			_this.moveToSlide(index, animate);
		},
		goToNext: function () {
			_this.goToNext();
		},
		goToPrev: function () {
			_this.goToPrev();
		},
		getCurrentIndex: function () {
			return _this.slideIndex;
		},
		hideSlider: function() {
			_this.sliderMainGroup.visible = false;
			_this.sliderControlsGroup.visible = false;
			_this.sliderBGGroup.visible = false;
			if(_this._modal) {
				_this._modal.visible = false;
			}
		},
		showSlider: function() {
			_this.sliderMainGroup.visible = true;
			_this.sliderControlsGroup.visible = true;
			_this.sliderBGGroup.visible = true;
			if(_this._modal) {
				_this._modal.visible = true;
			}
		}
	};
};