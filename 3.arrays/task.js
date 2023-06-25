function compareArrays(arr1, arr2) {
	// Проверяем, имеют ли массивы одинаковую длину
	if (arr1.length !== arr2.length) {
		return false;
	}

	// Сравниваем значения элементов массивов на соответствующих индексах
	return arr1.every((value, index) => value === arr2[index]);

}

function getUsersNamesInAgeRange(users, gender) {
	const filteredUsers = users.filter(user => user.gender === gender);

	if (filteredUsers.length === 0) {
		return 0;
	}

	const totalAge = filteredUsers.reduce((sum, user) => sum + user.age, 0);
	const averageAge = totalAge / filteredUsers.length;

	return averageAge;
}