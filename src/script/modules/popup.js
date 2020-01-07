class Popup {
	constructor(popupWrapID, popupActive, classHide, popupCloseElClNm,popupWin, missed=true) {
		this.missed = missed;//if this value is "true" popup will close by click outside the area popup
		this.show = popupActive;
		this.classHide = classHide;
		this.popupWin = popupWin;
		this.popup = document.getElementById(popupWrapID);
		this.closePopup = popupCloseElClNm;
		document.querySelector("body").addEventListener("mouseup", this.addEvent.bind(this));
	}
	addEvent(event) {
		if (event.target.matches(this.show) || event.target.closest(this.show)) {
			this.popUpShow(event.target.closest(this.show));
			this.popCloseButton(this.closePopup);
		}
	}
	popUpShow(target) {
		this.popup.classList.remove(this.classHide);
		const body = document.querySelector('body');

		body.classList.add('modal-open')
	}
	popUpHide() {
		this.popup.classList.add(this.classHide);
		const body = document.querySelector('body');
		body.classList.remove('modal-open')

	}
	closeByKey(event) {
		if (event.keyCode === 27) {
			this.popUpHide();
		}
	}
	popCloseButton(el) {
		this.popup.addEventListener("mouseup", event => {
			if (event.target.closest(el)||(this.missed && !event.target.closest(`.${this.popupWin}`))) {
				this.popUpHide();
			}
		});
		document.addEventListener("keydown", this.closeByKey.bind(this));
	}
}
