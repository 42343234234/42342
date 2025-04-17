const data = JSON.parse(localStorage.getItem('generatedData'));

if (data) {
    document.getElementById('name').textContent = data.name;
    document.getElementById('surname').textContent = data.surname;
    document.getElementById('nationality').textContent = data.nationality;
    document.getElementById('adress').textContent = data.adress1 + ', ' + data.adress2 + ' ' + data.city;
    document.getElementById('birthPlace').textContent = data.birthPlace;
    document.getElementById('countryOfBirth').textContent = data.countryOfBirth;
    document.getElementById('familyName').textContent = data.familyName;
    document.getElementById('fathersFamilyName').textContent = data.fathersFamilyName;
    document.getElementById('mothersFamilyName').textContent = data.mothersFamilyName;

    const sex = localStorage.getItem('selectedSex') || 'Nieokreślona';
    document.getElementById('sex').textContent = sex;

    const day = localStorage.getItem('birthDay');
    const month = localStorage.getItem('birthMonth');
    const year = localStorage.getItem('birthYear');
    if (day && month && year) {
        document.getElementById('birthday').textContent = `${day}.${month}.${year}`;
    }

    const homeDate = localStorage.getItem('homeDate');
    if (homeDate) {
        const formattedDate = new Date(homeDate).toLocaleDateString('pl-PL');
        document.querySelector('.home_date').textContent = formattedDate;
    }

    document.getElementById('pesel').textContent = localStorage.getItem('pesel');

    const photoUrl = data.image;
    document.querySelector('.id_own_image').style.backgroundImage = `url('${photoUrl}')`;
} else {
    alert("Brak zapisanych danych — wróć do generatora!");
}

function updateDateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const date = now.toLocaleDateString('pl-PL');
    document.getElementById('time').textContent = `Czas: ${time}`;
    document.getElementById('date').textContent = date;
}

setInterval(updateDateTime, 1000);
updateDateTime();
