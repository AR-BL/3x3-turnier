// Firebase-Zugangsdaten für die Turnierseite.
// Schritt 4 der Anleitung (README.md): die Werte aus der Firebase-Konsole hier einsetzen.
// Diese Werte sind nicht geheim; geschützt wird über das Passwort und die Firestore-Regeln.
window.TURNIER_CONFIG = {
  firebase: {
    apiKey: "AIzaSyAsHSWxKLEOd5Ms_aPCYYpACBTLYzQqRg8",
    authDomain: "loewen-3x3.firebaseapp.com",
    projectId: "loewen-3x3",
    storageBucket: "loewen-3x3.firebasestorage.app",
    messagingSenderId: "125804745689",
    appId: "1:125804745689:web:f6133f2ca9feb96ad7ffc8"
  },
  // Login-Name des Turnierleitungs-Kontos in Firebase (Schritt 3). Muss keine echte Adresse sein.
  adminEmail: "turnierleitung@loewen-3x3.de",
  // Name des Datensatzes in der Datenbank. Für ein neues Turnier einen neuen Namen wählen.
  turnierId: "loewen-3x3-2026"
};
