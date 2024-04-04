function transformDateFormat(dates) {
  var transformedDates = [];

  var regex1 = /^\d{4}\/\d{2}\/\d{2}$/;
  var regex2 = /^\d{2}\/\d{2}\/\d{4}$/;
  var regex3 = /^\d{2}-\d{2}-\d{4}$/;

  dates.forEach(date => {
    if (regex1.test(date) || regex2.test(date) || regex3.test(date)) {
      var parts = date.split(/[\/\-]/);
      var year, month, day;

      if (regex1.test(date)) {
        year = parts[0];
        month = parts[1];
        day = parts[2];
      } else if (regex2.test(date)) {
        year = parts[2];
        month = parts[1];
        day = parts[0];
      } else if (regex3.test(date)) {
        year = parts[2];
        month = parts[0];
        day = parts[1];
      }

      month = month.padStart(2, '0');
      day = day.padStart(2, '0');
			
      transformedDates.push(`${year}${month}${day}`);
    }
  });

  return transformedDates;
}

// Test cases
var dates1 = transformDateFormat(["2010/02/20", "19/12/2016", "11-18-2012", "20130720"]);
console.log("Dates with multiple formats:", dates1);

var dates2 = transformDateFormat(["2010/02/20", "11/18/2012", "20130720"]);
console.log("Dates with single format:", dates2);

var dates3 = transformDateFormat(["2010/02/20", "19/12/2016", "11-18-2012", "20130720", "2022-02-15"]);
console.log("Dates with ignored formats:", dates3);


var dates = transformDateFormat(["2010/02/20", "19/12/2016", "11-18-2012", "20130720"]);
for (index = 0; index < dates.length; ++index) {
  console.log(dates[index]);
}
