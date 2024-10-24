import {isEmptyObj, Manipulator, mergeDeepObject} from "./manipulator";

class BaseModule {
	public _element: any;
	protected _params: object = {};

	constructor() {}

	public get element() {
		return this._element
	}

	public set element(el: HTMLElement) {
		if (!el) {
			throw new Error('Товарищ! Первый параметр не должен быть пустым!');
		} else {
			if (typeof el === 'string') {
				let elm: null | HTMLElement = document.querySelector(el);
				if (elm) this._element = elm;
				else throw new Error('Ахпер! Не удалось найти элемент');
			} else if (typeof el === 'object') {
				this._element = el;
			} else {
				throw new Error('КЭП! Какая-то дичь к нам залетела');
			}
		}
	}

	public get params() {
		return this._params
	}

	public set params(params: object) {
		if (!isEmptyObj(params)) {
			let attrs: object = Manipulator.getDataAttributes(this.element);
			this._params = mergeDeepObject(params, attrs);
		}
	}
}

export default BaseModule;