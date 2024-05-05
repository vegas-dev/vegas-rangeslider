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

			this.classes = {
				container: 'vg-rs'
			};

			// Инициализируем скрипт
			this.init();
		}

		init() {
			const _this = this;

			/** Строим слайдер **/
			VGRangeSlider.build(_this);
		}

		static build(slider) {
			let $container = document.createElement('span');
			$container.classList.add(slider.classes.container);
		}
	}

	exports.VGRangeSlider = VGRangeSlider;

})(this.window = this.window || {});
