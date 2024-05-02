const rangeSliderSettings = {
	type: 'single' // or double
}

class VGRangeSlider {
	constructor(element, arg ={}) {
		this.isInit = false;

		if (typeof element === 'string') {
			element = document.querySelector(element);
			if (!element) return false;
		} else if (!element) {
			return false;
		}

		this.init(element, arg);
	}

	init(element, arg) {
		const _this = this;

		_this.isInit = true;
	}
}

export default VGRangeSlider
