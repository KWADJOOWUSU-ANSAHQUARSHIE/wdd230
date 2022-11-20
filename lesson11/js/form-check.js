// Form-Check

const cD = new Date();
const fDate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(cD);

const currentHr = cD.getHours() + ':' + cD.getMinutes();
document.getElementById('t_date').value = `${fDate} ${currentHr}`