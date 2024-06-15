function dateFormatter() {}

function ageCalculator() {
  let dateOfBirth = document.getElementById("inpOne").value;

  let display = document.getElementById("ageDisplay");

  let toDay = new Date();
  let DOB = new Date(dateOfBirth);
  toDay = new Date(toDay);
  console.log(DOB.toString() == "Invalid Date");

  let ageYear = toDay.getFullYear() - DOB.getFullYear();
  let ageMonth = toDay.getMonth() - DOB.getMonth();
  let ageDate = toDay.getDate() - DOB.getDate();

  if (ageDate < 0) {
    ageMonth--;

    let previousMonth = new Date(toDay.getFullYear(), toDay.getMonth(), 0);
    ageDate += previousMonth.getDate();
  }

  if (ageMonth < 0) {
    ageYear--;
    ageMonth = 12 + ageMonth;
  }

  if (ageMonth == 0 && ageDate == 0) {
    let bdayMsg = document.getElementById("bdayMsg");
    bdayMsg.innerHTML = `<h1>HAPPY BIRDTHDAY TO YOU !!!</h1>`;
  } else {
    bdayMsg.innerHTML = ``;
  }

  if (ageYear < 0 || DOB.toString() == "Invalid Date") {
    display.innerHTML = `<h1>⚠ PLEAS ENTER A VALID DATE ⚠</h1>`;
  } else {
    display.innerHTML = `<h1>💡YOU ARE ${ageYear} YEARS ${ageMonth} MONTHS AND ${ageDate} DAYS OLDER NOW`;
  }
}
