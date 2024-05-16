function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var content = document.querySelector('.content');
    if (sidebar.style.left === '-250px') {
        sidebar.style.left = '0';
        content.style.marginLeft = '250px';
    } else {
        sidebar.style.left = '-250px';
        content.style.marginLeft = '0';
    }
}

function logout() {
    // Hier könntest du den Logout-Prozess implementieren, z.B. Benutzer ausloggen und zur Login-Seite weiterleiten
    alert('Du wurdest ausgeloggt!');
    // Hier könnte der Code stehen, um zur Login-Seite weiterzuleiten
}
