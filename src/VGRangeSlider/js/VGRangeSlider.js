import {deepMergeObjects, getDataAttributes} from "./util/functions";

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

let template = {
	base: ''
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

		this.classes = {
			container: 'vg-rs'
		}

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

export default VGRangeSlider
