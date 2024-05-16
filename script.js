document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Verhindert das Standardverhalten des Formulars

    // Benutzername und Passwort aus den Eingabefeldern erhalten
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Hardcoded Benutzername und Passwort überprüfen
    if (username === 'admin' && password === 'adminpw') {
        alert('Anmeldung erfolgreich!');
        // Hier könntest du zur nächsten Seite weiterleiten oder andere Aktionen ausführen
        window.location.href = 'dashboard';
    } else {
        alert('Falscher Benutzername oder Passwort. Bitte versuche es erneut.');
        // Hier könntest du dem Benutzer mitteilen, dass die Anmeldung fehlgeschlagen ist
    }
});
