class AlarmClock {
	constructor() {
		this.alarmCollection = []; // Коллекция звонков
		this.intervalId = null; // Идентификатор интервала
	}

	// Метод для добавления нового звонка в коллекцию
	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы');
		}

		if (this.alarmCollection.some(alarm => alarm.time === time)) {
			console.warn('Уже присутствует звонок на это же время');
		}

		this.alarmCollection.push({
			time: time,
			callback: callback,
			canCall: true
		});
	}

	// Метод для удаления звонка по времени
	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
	}

	// Метод для получения текущего времени в формате HH:MM
	getCurrentFormattedTime() {
		const currentDate = new Date();
		const hours = currentDate.getHours().toString().padStart(2, '0');
		const minutes = currentDate.getMinutes().toString().padStart(2, '0');
		return `${hours}:${minutes}`;
	}

	// Метод для запуска будильника
	start() {
		if (this.intervalId) {
			return; // Если интервал уже запущен, то выходим из метода
		}

		this.intervalId = setInterval(() => {
			const currentTime = this.getCurrentFormattedTime();

			this.alarmCollection.forEach(alarm => {
				if (alarm.time === currentTime && alarm.canCall) {
					alarm.canCall = false;
					alarm.callback();
				}
			});
		}, 1000);
	}

	// Метод для остановки интервала будильника
	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	// Метод для сброса возможности вызова всех звонков
	resetAllCalls() {
		this.alarmCollection.forEach(alarm => {
			alarm.canCall = true;
		});
	}

	// Метод для удаления всех звонков
	clearAlarms() {
		this.stop(); // Останавливаем интервал
		this.alarmCollection = []; // Очищаем коллекцию звонков
	}
}