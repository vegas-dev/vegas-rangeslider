import BaseModule from "./utils/base-module";
import {Manipulator, mergeDeepObject, removeElementArray, normalizeData} from "./utils/manipulator";
import {data} from "autoprefixer";
import {c} from "vite/dist/node/types.d-aGj9QkWt.js";

class VGRangeSlider extends BaseModule {
	constructor(el, params = {}) {
		super();
		this.paramsDefault = {
			disabled: false,
			type: 'single',
			skin: 'round',
			min: 0,
			max: 0,
			from: 0,
			to: 0,
			step: 0,
			postfix: '',
			grid: false
		};
		this.classes = {
			container: 'vg-rs',
			wrapper: 'vg-rs-wrapper',
			line: 'vg-rs-line',
			min: 'vg-rs-min',
			max: 'vg-rs-max',
			from: 'vg-rs-from',
			to: 'vg-rs-to',
			single: 'vg-rs-single',
			bar: 'vg-rs-bar',
			handle: 'vg-rs-handle',
			grid: 'vg-rs-grid',
			skin: {
				flat: 'vg-rs-skin-flat',
				round: 'vg-rs-skin-round',
			}
		}
		this._id = 'vg-rs-' + Math.round(Math.random() * 100);
		this._container = null;

		this.element = el;
		this.params = mergeDeepObject(params, this.paramsDefault);
		this.build();
		this.init();
	}

	init() {
		const _this = this;
		_this.container = '#' + this._id;
		_this.setData();
		_this.toggle();

		window.addEventListener('resize', function () {
			_this.toggle();
		})
	}

	get container() {
		return this._container;
	}

	set container(el) {
		this._container = Manipulator.find(el);
	}

	build() {
		const _this = this;

		let $container = document.createElement('span');
		$container.classList.add(_this.classes.container);
		$container.id = _this._id;

		switch (_this.params.skin) {
			case 'flat': $container.classList.add(_this.classes.skin.flat); break;
			case 'round': $container.classList.add(_this.classes.skin.round); break;
		}

		drawRSWrapper($container);
		drawRSBar($container);
		drawRSHandle($container);

		_this.element.setAttribute('value', _this.params.from);
		_this.element.before($container);

		function drawRSWrapper(container) {
			let $wrapper = document.createElement('span');
			$wrapper.classList.add(_this.classes.wrapper);

			drawWrapperChild($wrapper);
			container.appendChild($wrapper);

			function drawWrapperChild(wrapper) {
				let classes = [_this.classes.line, _this.classes.to, _this.classes.from, _this.classes.min, _this.classes.max];

				if (_this.params.type === 'single') {
					let $single = document.createElement('span');
					$single.classList.add(_this.classes.single);

					wrapper.prepend($single);
					classes = removeElementArray(classes, [_this.classes.from, _this.classes.to]);
				}

				if (classes.length) {
					classes.forEach((child) => {
						let $span = document.createElement('span');
						$span.classList.add(child);
						wrapper.prepend($span);
					});
				}
			}
		}
		function drawRSBar(container) {
			let $bar = document.createElement('span');
			$bar.classList.add(_this.classes.bar);
			container.appendChild($bar)
		}
		function drawRSHandle(container) {
			let $handle = document.createElement('span');
			$handle.classList.add(_this.classes.handle);
			container.appendChild($handle);
		}
	}

	toggle() {
		const _this = this;

		let $handler = _this.container.querySelector('.' + _this.classes.handle),
			$line = _this.container.querySelector('.' + _this.classes.line),
			containerPosition = _this.getPosition(_this.container);

		if(_this.params.type === 'single') {
			$line.onclick = function (event) {
				let pos = _this.getPosition(event.clientX, containerPosition.left, containerPosition.width),
					data = _this.setPosition(_this.container,'single', {
						left: pos,
						max: _this.params.max,
						min: _this.params.min,
						step: _this.params.step
					});

				_this.setData(data);

				return false;
			}

			$handler.onpointerdown = function(event) {
				$handler.setPointerCapture(event.pointerId);
				$handler.onpointermove = function(event) {
					let pos = _this.getPosition(event.clientX, containerPosition.left, containerPosition.width),
						data = _this.setPosition(_this.container,'single', {
							left: pos,
							max: _this.params.max,
							min: _this.params.min,
							step: _this.params.step
						});

					_this.setData(data)
				};

				$handler.onpointerup = function() {
					$handler.onpointermove = null;
					$handler.onpointerup = null;
				};
			};
		}
	}

	setData(datum = {}) {
		const _this = this;

		datum = mergeDeepObject(_this.params, datum);

		for (let obj in datum) {
			if (typeof obj !== 'object') {
				if (obj === 'min' || obj === 'max') {
					let $_el = _this.container.querySelector('.vg-rs-' + obj);
					if ($_el) {
						$_el.innerHTML = String(datum[obj]);
					}
				}

				if (obj === 'type' && datum[obj] === 'single' ) {
					let position = _this.setPosition(_this.container, datum[obj], datum);

					_this.container.querySelector('.vg-rs-single').style.left = position.left + '%';
					_this.container.querySelector('.vg-rs-single').style.transform = 'translateX(-' + position.left + '%)';
					_this.container.querySelector('.vg-rs-single').innerHTML = position.from;

					_this.container.querySelector('.vg-rs-bar').style.left = 0 + 'px';
					_this.container.querySelector('.vg-rs-bar').style.width = position.left + '%';
					_this.container.querySelector('.vg-rs-handle').style.left = position.left + '%';
					_this.container.querySelector('.vg-rs-handle').style.transform = 'translateX(-' + position.left + '%)';
				}
			}
		}
	}

	setPosition(el, type, datum) {
		let position = {};

		if (type === 'single') {
			let left,
				from = datum.from,
				step = datum.step,
				min = datum.min,
				max = datum.max;

			if ('left' in datum) {
				left = datum.left;
				from = left * max / 100;
			} else {
				if (from > max) left = 100;
				else left = from * 100 / max
				if (from < min) left = 0;
			}

			if (Number.isInteger(step)) {
				from = Math.round(from);
				if (step === 0) {
					left = Math.round(left);
				} else {
					if (from < step ) from = step;
					if (!Number.isInteger(from/step)) {
						from = Math.floor(from / step) * step;
					}
				}
			}

			position = {
				left: left,
				max: max,
				min: min,
				from: from
			}
		}

		return position
	}

	getPosition(x, left, width) {
		let position = (x - left) * 100 / width;

		if (position < 0){
			return 0;
		} else if (position > 100) {
			return 100;
		} else {
			return position;
		}
	}
}

export default VGRangeSlider