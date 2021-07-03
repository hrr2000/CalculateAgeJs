import Age from './Modules/Age.js';


const submitBtn = document.getElementById('caculateAge'),
    dateInput = document.getElementById('dateOfBirth'),
    resultViewer = document.getElementById('resultViewer');

submitBtn.addEventListener('click', () => {
    let date = new Date(dateInput.value);
    let age = Age(date, {
        unit: 'y'
    });
    resultViewer.innerHTML = `
        years: ${age.years}
        months: ${age.months}
        days: ${age.days}
    `;
});