import {deepMergeObjects, getDataAttributes, removeElementArray} from "./util/functions";

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
}

const setParams = function (element, params, arg) {
	let dParams = getDataAttributes(element);
	return deepMergeObjects(params, arg, dParams);
}

class VGRangeSlider {
	constructor(element, arg ={}) {
		// Проверяем элемент
		if (typeof element === 'string') {
			element = document.querySelector(element);
			if (!element) return false;
		} else if (!element) return false;

		if (element.tagName !== 'INPUT') {
			console.error('Основным элементов должен быть тэг INPUT')
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
		}

		// Инициализируем скрипт
		this.init();
	}

	init() {
		const _this = this;

		/** Строим слайдер **/
		VGRangeSlider.build(_this);

		/** **/
		_this.setData();
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
					let position = _this.setPostion('single');
					$mainContainer.querySelector('.vg-rs-single').style.left = position + '%';
					$mainContainer.querySelector('.vg-rs-single').style.transform = 'translateX(-' + position + '%)';

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
					$single.innerHTML = _this.settings.from;

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
			container.appendChild($bar)
		}

		function drawRSHandle(container) {
			let $handle = document.createElement('span');
			$handle.classList.add(_this.classes.handle);
			container.appendChild($handle);
		}
	}

	setPostion(type) {
		const _this = this;

		if (type === 'single') {
			let max = Number(_this.settings.max),
				min = Number(_this.settings.min),
				from = Number(_this.settings.from);

			if (from <= min) from = min;
			if (from >= max) from = max;

				return (from/100) * max;
		}

		return 0;
	}
}

export default VGRangeSlider
