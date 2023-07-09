//Задание 1

function parseCount(value) {
	const parsedValue = Number.parseFloat(value);
	if (Number.isNaN(parsedValue)) {
		throw new Error('Невалидное значение');
	}
	return parsedValue;
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch (error) {
		return error;
	}
}

//Задание 2

class Triangle {
	constructor(a, b, c) {
		if (a + b <= c || b + c <= a || c + a <= b) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
		this.a = a;
		this.b = b;
		this.c = c;
	}

	get perimeter() {
		return this.a + this.b + this.c;
	}

	get area() {
		const s = this.perimeter / 2;
		const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
		return +area.toFixed(3); //Преобразуем строку в число с помощью унарного плюса
	}
}

function getTriangle(a, b, c) {
	try {
		const triangle = new Triangle(a, b, c);
		return triangle;
	} catch (error) {
		return new TriangleError();
	}
}

class TriangleError {
	get perimeter() {
		return "Ошибка! Треугольник не существует";
	}

	get area() {
		return "Ошибка! Треугольник не существует";
	}
}