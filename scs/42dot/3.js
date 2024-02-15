// 결과는 나오나 정확성 테스트 x 왜?

function convertToUTCDateString(dateString) {
	const [year, month, day] = dateString.split("/");
	return new Date(Date.UTC(year, month - 1, day));
}

function solution(join_date, resign_date, holidays) {
	const startDate = convertToUTCDateString(join_date.split(" ")[0]);
	const endDate = convertToUTCDateString(resign_date);
	const holidayDates = holidays.map((holiday) => {
		const [month, day] = holiday.split("/").map(Number);
		const holidayYear = month >= startDate.getMonth() + 1 ? startDate.getFullYear() : endDate.getFullYear();
		return new Date(Date.UTC(holidayYear, month - 1, day));
	});
	let workDays = 0;

	for (let currentDate = startDate; currentDate <= endDate; currentDate.setDate(currentDate.getDate() + 1)) {
		if (currentDate.getDay() !== 6 && currentDate.getDay() !== 0) {
			if (!holidayDates.some(holiday => currentDate.getTime() === holiday.getTime())) {
				workDays++;
			}
		}
	}

	return workDays;
}


console.log('solution', solution("2019/12/01 SUN", "2019/12/31", ["12/25"])); // 21
console.log('solution', solution("2019/12/01 SUN", "2020/03/02", ["01/02", "12/24", "03/01"])); // 64
console.log('solution', solution("2019/11/21 THU", "2019/11/21", ["12/23"])); // 1
