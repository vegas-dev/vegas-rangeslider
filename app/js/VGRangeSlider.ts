import BaseModule from "./utils/base-module";
import {mergeDeepObject, removeElementArray} from "./utils/manipulator";

class VGRangeSlider extends BaseModule {
	private readonly paramsDefault: object;
	private readonly classes: object;
	private readonly id: string;
	constructor(el: any, params = {}) {
		super();

		this.paramsDefault = {
			disabled: false,
			type: 'single',
			skin: 'round',
			min: 0,
			max: 0,
			from: 0,
			to: 0,
			step: 1,
			postfix: '',
			grid: false
		}
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

		this.element = el;
		this.params = mergeDeepObject(params, this.paramsDefault);
		this.id = 'vg-rs-' + Math.round(Math.random() * 100);
		this.build();
		this.setData({});
	}

	setData(datum: object) {
		const _this = this;
		
		datum = mergeDeepObject(_this.params, datum);
		let $mainContainer = document.getElementById(_this.id);
		if (!$mainContainer) return;
		
		for (let obj in datum) {
			if (typeof obj !== 'object') {
				if (obj === 'min' || obj === 'max') {
					let $_el = $mainContainer.querySelector('.vg-rs-' + obj);
					if ($_el) { // @ts-ignore
						$_el.innerHTML = String(datum[obj]);
					}
				}
				
				// @ts-ignore
				if (obj === 'type' && datum[obj] === 'single' ) {
					let position = _this.setPostion('single', datum);
					// @ts-ignore
					$mainContainer.querySelector('.vg-rs-single').style.left = position + '%';
					// @ts-ignore
					$mainContainer.querySelector('.vg-rs-single').style.transform = 'translateX(-' + position + '%)';
					// @ts-ignore
					$mainContainer.querySelector('.vg-rs-single').innerHTML = Math.round(position);
					// @ts-ignore
					$mainContainer.querySelector('.vg-rs-bar').style.left = 0;
					// @ts-ignore
					$mainContainer.querySelector('.vg-rs-bar').style.width = position + '%';
					// @ts-ignore
					$mainContainer.querySelector('.vg-rs-handle').style.left = position + '%';
					// @ts-ignore
					$mainContainer.querySelector('.vg-rs-handle').style.transform = 'translateX(-' + position + '%)';
				}
			}
		}
	}

	build():void {
		const _this = this;

		let $container = document.createElement('span');
		// @ts-ignore
		$container.classList.add(_this.classes.container);
		$container.id = _this.id;

		// @ts-ignore
		switch (_this.params.skin) {
			case 'flat': // @ts-ignore
				$container.classList.add(_this.classes.skin.flat); break;
			case 'round': // @ts-ignore
				$container.classList.add(_this.classes.skin.round); break;
		}
		
		drawRSWrapper($container);
		drawRSBar($container);
		drawRSHandle($container);

		_this.element.before($container);
		_this.toggle();

		function drawRSWrapper(container: HTMLElement) {
			let $wrapper = document.createElement('span');
			// @ts-ignore
			$wrapper.classList.add(_this.classes.wrapper);
			
			drawWrapperChild($wrapper);
			
			container.appendChild($wrapper);
			
			function drawWrapperChild(wrapper: HTMLSpanElement) {
				// @ts-ignore
				let classes: any = [_this.classes.line, _this.classes.to, _this.classes.from, _this.classes.min, _this.classes.max];
				
				// @ts-ignore
				if (_this.params.type === 'single') {
					let $single = document.createElement('span');
					// @ts-ignore
					$single.classList.add(_this.classes.single);
					
					wrapper.prepend($single);
					// @ts-ignore
					classes = removeElementArray(classes, [_this.classes.from, _this.classes.to]);
				}
				
				if (classes.length) {
					classes.forEach((child: string) => {
						let $span = document.createElement('span');
						$span.classList.add(child);
						wrapper.prepend($span);
					});
				}
			}
		}
		
		function drawRSBar(container: HTMLSpanElement) {
			let $bar = document.createElement('span');
			// @ts-ignore
			$bar.classList.add(_this.classes.bar);
			container.appendChild($bar)
		}
		
		function drawRSHandle(container: HTMLSpanElement) {
			let $handle = document.createElement('span');
			// @ts-ignore
			$handle.classList.add(_this.classes.handle);
			container.appendChild($handle);
		}
	}
	
	toggle() {
		const _this = this;
		
		// @ts-ignore
		if(_this.params.type === 'single') {
			// @ts-ignore
			let $mainContainer = document.getElementById(_this.id), mainContainerWidth = $mainContainer.clientWidth, $handler = $mainContainer.querySelector('.' + _this.classes.handle);
			
			// @ts-ignore
			$handler.onpointerdown = function(event: { pointerId: number; }) {
				// @ts-ignore
				$handler.setPointerCapture(event.pointerId);
				// @ts-ignore
				$handler.onpointermove = function(event: { clientX: number; }) {
					// @ts-ignore
					let from = (event.clientX - $mainContainer.getBoundingClientRect().left) * 100 / mainContainerWidth;
					
					_this.setData({
						from: from
					})
				};
				
				// @ts-ignore
				$handler.onpointerup = function() {
					// @ts-ignore
					$handler.onpointermove = null;
					// @ts-ignore
					$handler.onpointerup = null;
				};
			};
		}
	}
	
	setPostion(type: string, data: object) {
		if (type === 'single') {
			// @ts-ignore
			let max = Number(data.max), min = Number(data.min), from = Number(data.from);
			
			if (from <= min) from = min;
			if (from >= max) from = max;
			
			return (from/100) * max;
		}
		
		return 0;
	}
}

export default VGRangeSlider;