/**
 * Удаляем элементы с массива
 * @param arr
 * @param el
 */
function removeElementArray(arr: any[], el: any): any {
	return arr.filter(function (item) {
		return !el.includes(item)
	});
}

/**
 * Глубокое объединение объектов
 * @param objects
 * @returns {*}
 */
function mergeDeepObject (...objects: any): any {
	return objects.reduce((prev: { [x: string]: any; }, obj: { [x: string]: any; }) => {
		Object.keys(obj).forEach(key => {
			const pVal = prev[key];
			const oVal = obj[key];
			
			if (Array.isArray(pVal) && Array.isArray(oVal)) {
				prev[key] = pVal.concat(...oVal);
			}
			else if (isObject(pVal) && isObject(oVal)) {
				prev[key] = mergeDeepObject(pVal, oVal);
			}
			else {
				prev[key] = oVal;
			}
		});
		
		return prev;
	}, {});
}

/**
 * Если что-нибудь в объекте
 * @param obj
 * @returns {boolean}
 */
function isEmptyObj(obj: object): boolean {
	for (let prop in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, prop)) {
			return false;
		}
	}
	
	return true
}

/**
 * isObject
 * @param obj
 * @returns {boolean}
 */
function isObject(obj: object): boolean {
	return obj && typeof obj === 'object'
}

/**
 * Приводим в порядок типы данных
 * @param value
 * @returns {any}
 */
function normalizeData(value: any): any  {
	if (value === 'true') {
		return true
	}
	
	if (value === 'false') {
		return false
	}
	
	if (value === Number(value).toString()) {
		return Number(value)
	}
	
	if (value === '' || value === 'null') {
		return null
	}
	
	if (typeof value !== 'string') {
		return value
	}
	
	try {
		return JSON.parse(decodeURIComponent(value))
	} catch {
		return value
	}
}

/**
 * Манипуляции с элементом
 */
const Manipulator = {
	getDataAttributes(element: HTMLElement, isRemoveDataName: boolean = true): object {
		if (!element) {
			return {}
		}

		const attributes: object = {},
			arr: any = [].filter.call(element.attributes, function (at:any) {
				return /^data-/.test(at.name);
			});

		if (arr.length) {
			arr.forEach(function (v: any) {
				let name = v.name;
				if (isRemoveDataName) name = name.slice(5);
				// @ts-ignore
				attributes[name] = normalizeData(v.value)
			});
		}

		return attributes
	},

	getAttribute: function (element: HTMLElement, nameAttribute: string):any {
		if (!element) {
			return ''
		}
		return element.getAttribute(nameAttribute);
	}
}

export {Manipulator, isEmptyObj, mergeDeepObject, removeElementArray}