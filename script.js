document.addEventListener('DOMContentLoaded', () => {
	let notifications = 7;

	let newNotification = [undefined, true, true, true, false, false, false, false];

	document.querySelector('.header__notifications__number').innerHTML = notifications;

	for (let i = 1; i < 8; i++) {
		if (!newNotification[i]) {
			document.querySelector(`.notif-${i}`).style.backgroundColor = "white";
			document.querySelector(`.notif-${i}__new`).style.visibility = "hidden";
			notifications--;
			document.querySelector('.header__notifications__number').innerHTML = notifications;
		}

		document.querySelector(`.notif-${i}`).addEventListener('click', () => {
			if (newNotification[i]) {
				document.querySelector(`.notif-${i}`).style.backgroundColor = "white";
				document.querySelector(`.notif-${i}__new`).style.visibility = "hidden";
				newNotification[i] = false;
				notifications--;
				document.querySelector('.header__notifications__number').innerHTML = notifications;
			}
		});
	}

	document.querySelector(`.header__readButton`).addEventListener('click', () => {
		for (let i = 1; i < 8; i++) {
			if (newNotification[i]) {
				document.querySelector(`.notif-${i}`).style.backgroundColor = "white";
				document.querySelector(`.notif-${i}__new`).style.visibility = "hidden";
				newNotification[i] = false;
				notifications--;
				document.querySelector('.header__notifications__number').innerHTML = notifications;
			}
		}
	});
});