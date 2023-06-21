"use strict"

function solveEquation(a, b, c) {
	const discriminant = b ** 2 - 4 * a * c;
	let arr = [];

	if (discriminant < 0) {

		return arr; //корней нет
	} else if (discriminant === 0) {
		const root = -b / (2 * a);
		return [root]; //один корень
	} else {
		const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		return [root1, root2]; // Два корня
	}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	const interestRate = percent / 100 / 12;

	// Расчет тела кредита
	const loanAmount = amount - contribution;

	// Расчет ежемесячного платежа
	const monthlyPayment = loanAmount * (interestRate + interestRate / ((1 + interestRate) ** countMonths - 1));

	// Расчет общей суммы платежа
	const totalPayment = monthlyPayment * countMonths;

	// Округление результата до двух значений после запятой
	const roundedTotalPayment = Number(totalPayment.toFixed(2));

	return roundedTotalPayment;
}