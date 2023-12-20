function saveUserData() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    if (name && age) {
        const userData = { name, age };
        localStorage.setItem('userData', JSON.stringify(userData));
        alert('Data saved successfully!');
        document.getElementById('userDataForm').reset();
    } else {
        alert('Please enter both name and age.');
    }
}

function retrieveAndDisplayData() {
    const userDataString = localStorage.getItem('userData');

    if (userDataString) {
        const userData = JSON.parse(userDataString);

        const userDataDisplay = document.getElementById('userDataDisplay');
        userDataDisplay.innerHTML = '';

        const table = document.createElement('table');
        const tbody = document.createElement('tbody');

        for (const key in userData) {
            const row = document.createElement('tr');
            const cell1 = document.createElement('td');
            const cell2 = document.createElement('td');

            cell1.textContent = key.charAt(0).toUpperCase() + key.slice(1);
            cell2.textContent = userData[key];

            row.appendChild(cell1);
            row.appendChild(cell2);
            tbody.appendChild(row);
        }

        table.appendChild(tbody);
        userDataDisplay.appendChild(table);
    } else {
        alert('No data found. Please save data first.');
    }
}
