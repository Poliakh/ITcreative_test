class InfSlider {
	constructor(wrapBtn, classBtn, classCheckBtn, wrapSlidInf, classCheckSlidInf) {
		this.wrapBtn = document.querySelector(`.${wrapBtn}`);
		this.classCheckBtn = classCheckBtn;
		this.classBtn = classBtn;
		this.wrapSlidInf = document.querySelector(`.${wrapSlidInf}`);
		this.classCheckSlidInf = classCheckSlidInf;
		this.addEvent();
	}
	addEvent() {
		this.wrapBtn.addEventListener('mouseup', (e) => {
			const list = this.wrapBtn.children;
			let elem;
			if (elem = e.target.closest(`.${this.classBtn}`)) {
				for (let i = 0; i < list.length; i++) {
					if (elem == list[i]) {
						this.checkElem(this.wrapBtn, this.classCheckBtn, i);
						this.checkElem(this.wrapSlidInf, this.classCheckSlidInf, i)
						return
					}
				}
			}

		})
	}
	checkElem(wrapList, checkClass, n) {
		const list = wrapList.children;
		const unCheck = wrapList.querySelector(`.${checkClass}`);
		unCheck.classList.remove(checkClass);
		list[n].classList.add(checkClass);
	}
}