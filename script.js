document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Verhindert das Standardverhalten des Formulars

    // Benutzername und Passwort aus den Eingabefeldern erhalten
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Hardcoded Benutzername und Passwort überprüfen
    if (username === 'admin' && password === 'adminpw') {
        alert('Anmeldung erfolgreich!');
        // Speichern, dass der Benutzer eingeloggt ist
        sessionStorage.setItem('loggedIn', 'true');
        // Weiterleitung zum Dashboard
        window.location.href = 'dashboard/index.html'; // Weiterleitung zur Dashboard-Seite
    } else {
        alert('Falscher Benutzername oder Passwort. Bitte versuche es erneut.');
    }
});
