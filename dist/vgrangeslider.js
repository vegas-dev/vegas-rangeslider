(function (exports) {
	'use strict';

	function getDataAttributes(el) {
		let data = {};
		[].forEach.call(el.attributes, function(attr) {
			if (/^data-/.test(attr.name)) {
				let camelCaseName = attr.name.substr(5).replace(/-(.)/g, function ($0, $1) {
					return $1.toUpperCase();
				});
				data[camelCaseName] = attr.value;
			}
		});
		return data;
	}

	function deepMergeObjects (...objects) {
		const _this = this;

		const isObject = obj => obj && typeof obj === 'object';

		return objects.reduce((prev, obj) => {
			Object.keys(obj).forEach(key => {
				const pVal = prev[key];
				const oVal = obj[key];

				if (Array.isArray(pVal) && Array.isArray(oVal)) {
					prev[key] = pVal.concat(...oVal);
				}
				else if (isObject(pVal) && isObject(oVal)) {
					prev[key] = _this.merge(pVal, oVal);
				}
				else {
					prev[key] = oVal;
				}
			});

			return prev;
		}, {});
	}

	function removeElementArray(arr, el) {
		let what, a = arguments, L = a.length, ax;
		while (L > 1 && arr.length) {
			what = a[--L];
			while ((ax= arr.indexOf(what)) !== -1) {
				arr.splice(ax, 1);
			}
		}
		return arr;
	}

	/**
	 * Настройки по умолчанию
	 * @type {{type: string}}
	 */
	const rangeSliderSettings = {
		type: 'single',
		skin: 'flat',
		min: 0,
		max: 0,
		from: 0,
		to: 0,
		step: 1,
		postfix: '',
		grid: false
	};

	const setParams = function (element, params, arg) {
		let dParams = getDataAttributes(element);
		return deepMergeObjects(params, arg, dParams);
	};

	class VGRangeSlider {
		constructor(element, arg ={}) {
			// Проверяем элемент
			if (typeof element === 'string') {
				element = document.querySelector(element);
				if (!element) return false;
			} else if (!element) return false;

			if (element.tagName !== 'INPUT') {
				console.error('Основным элементов должен быть тэг INPUT');
			}

			// Проверяем и устанавливаем параметры
			this.settings = setParams(element, rangeSliderSettings, arg);
			this.element = element;
			this.id = 'vg-rs-' + Math.round(Math.random() * 100);
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
			};

			// Инициализируем скрипт
			this.init();
		}

		init() {
			const _this = this;

			/** Строим слайдер **/
			VGRangeSlider.build(_this);

			/** **/
			_this.setData();

			if(_this.settings.type === 'single') {
				let $mainContainer = document.getElementById(_this.id),
					mainContainerWidth = $mainContainer.clientWidth,
					$handler = $mainContainer.querySelector('.' + _this.classes.handle);

				$handler.onpointerdown = function(event) {
					$handler.setPointerCapture(event.pointerId);
					$handler.onpointermove = function(event) {
						let from = (event.clientX - $mainContainer.getBoundingClientRect().left) * 100 / mainContainerWidth;

						_this.setData({
							from: from
						});
					};

					$handler.onpointerup = function(event) {
						$handler.onpointermove = null;
						$handler.onpointerup = null;
					};
				};
			}
		}

		setData(data = {}) {
			const _this = this;

			data = deepMergeObjects(_this.settings, data);
			let $mainContainer = document.getElementById(_this.id);

			for (let obj in data) {
				if (typeof obj !== 'object') {
					if (obj === 'min' || obj === 'max') {
						$mainContainer.querySelector('.vg-rs-' + obj).innerHTML = parseFloat(data[obj]);
					}

					if (obj === 'type' && data[obj] === 'single' ) {
						let position = _this.setPostion('single', data);
						$mainContainer.querySelector('.vg-rs-single').style.left = position + '%';
						$mainContainer.querySelector('.vg-rs-single').style.transform = 'translateX(-' + position + '%)';
						$mainContainer.querySelector('.vg-rs-single').innerHTML = Math.round(position);

						$mainContainer.querySelector('.vg-rs-bar').style.left = 0;
						$mainContainer.querySelector('.vg-rs-bar').style.width = position + '%';

						$mainContainer.querySelector('.vg-rs-handle').style.left = position + '%';
						$mainContainer.querySelector('.vg-rs-handle').style.transform = 'translateX(-' + position + '%)';
					}
				}
			}
		}

		static build(_this) {
			let $container = document.createElement('span');
			$container.classList.add(_this.classes.container);
			$container.id = _this.id;

			switch (_this.settings.skin) {
				case 'flat': $container.classList.add(_this.classes.skin.flat); break;
				case 'round': $container.classList.add(_this.classes.skin.round); break;
			}

			drawRSWrapper($container);
			drawRSBar($container);
			drawRSHandle($container);

			_this.element.before($container);

			function drawRSWrapper(container) {
				let $wrapper = document.createElement('span');
				$wrapper.classList.add(_this.classes.wrapper);

				drawWrapperChild($wrapper);

				container.appendChild($wrapper);

				function drawWrapperChild(wrapper) {
					let classes = [
						_this.classes.line,
						_this.classes.to,
						_this.classes.from,
						_this.classes.min,
						_this.classes.max,
					];

					if (_this.settings.type === 'single') {
						let $single = document.createElement('span');
						$single.classList.add(_this.classes.single);

						wrapper.prepend($single);

						removeElementArray(classes, _this.classes.from);
						removeElementArray(classes, _this.classes.to);
					}

					if (classes.length) {
						classes.forEach(child => {
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
				container.appendChild($bar);
			}

			function drawRSHandle(container) {
				let $handle = document.createElement('span');
				$handle.classList.add(_this.classes.handle);
				container.appendChild($handle);
			}
		}

		setPostion(type, data) {

			if (type === 'single') {
				let max = Number(data.max),
					min = Number(data.min),
					from = Number(data.from);

				if (from <= min) from = min;
				if (from >= max) from = max;

				return (from/100) * max;
			}

			return 0;
		}
	}

	exports.VGRangeSlider = VGRangeSlider;

})(this.window = this.window || {});
