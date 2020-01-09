class SelectShoe {
	constructor(wrapper, btn_l, btn_r, wrapShoeSelect, btnListDesc, color) {
		this.wrapper = document.querySelector(`.${wrapper}`);
		this.btn_l = btn_l;
		this.btn_r = btn_r;
		this.wrapShoe = this.wrapper.querySelector(`.${wrapShoeSelect}`);
		this.btnOrder = btnListDesc;
		this.color = color;
		this.addEventOrder();
		this.addEventSlide();
	}
	actionBG(dir) {
		const elem = this.wrapShoe.querySelector(".front");
		const color = elem.getAttribute('data-colorbg');
		const newColor = this.getColor(`${color}`, dir);
		const list = this.wrapShoe.querySelectorAll('[data-colorbg]');
		for (let i = 0; i < list.length; i++) {
			if (list[i].getAttribute('data-colorbg') == color) {
				list[i].classList.remove('front');
			} else if (list[i].getAttribute('data-colorbg') == newColor) {
				list[i].classList.add('front');
			}
		}
		this.actionElement('data-colorsl',color, newColor,'cardBy__slider-hide');
		this.actionElement('data-colorhd',color, newColor,'cardBy__header-hide');
		this.actionElementOutSlider('data-colorpsl',color, newColor,'popup__list-hide');
	}
	actionElement(data, color, newColor, toggleClass) {
		const list = this.wrapper.querySelectorAll(`[${data}]`)
		for (let i = 0; i < list.length; i++) {
			if (list[i].getAttribute(data) == color) {
				list[i].classList.add(toggleClass);
			} else if (list[i].getAttribute(data) == newColor) {
				list[i].classList.remove(toggleClass);
			}
		}
	}
	actionElementOutSlider(data, color, newColor, toggleClass) {
		const list = document.querySelectorAll(`[${data}]`);

		for (let i = 0; i < list.length; i++) {
			if (list[i].getAttribute(data) == color) {
				list[i].classList.add(toggleClass);
				list[i].classList.remove('popup__list-check');
			} else if (list[i].getAttribute(data) == newColor) {
				list[i].classList.remove(toggleClass);
				list[i].classList.add('popup__list-check');
			}
		}
	}
	addEventSlide() {
		this.wrapper.addEventListener('mouseup', (e) => {
			if (e.target.closest(`.${this.btn_l}`)) {
				this.actionBG('next');
			} else if (e.target.closest(`.${this.btn_r}`)) {
				this.actionBG('prev');
			}
		})
	}
	getColor(color, direct) {
		let res;
		this.color.forEach((element, i) => {
			if (color == element && direct == "next") {
				const index = ((i + 1) >= this.color.length) ? 0 : i + 1;
				res = this.color[index];
			}
			else if (color === element && direct === "prev") {
				const index = (i - 1 < 0) ? this.color.length - 1 : i - 1;
				res = this.color[index];
			}
		});
		return res;
	}

	addEventOrder() {
		this.wrapper.addEventListener('mouseup', (e) => {
			const changeCard = () => {
				const list = this.wrapper.querySelectorAll('.cardBy__wrapper');
				for (let i = 0; i < list.length; i++) {
					list[i].classList.toggle('hide')
				}
			}
			if (e.target.closest(`.${this.btnOrder}`) || e.target.closest('.cardBy__back')) {
				changeCard()
			}
		});
	}
	popupCheck(){

	}
}