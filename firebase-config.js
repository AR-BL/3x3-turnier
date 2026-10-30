// Firebase-Zugangsdaten für die Turnierseite.
// Schritt 4 der Anleitung (README.md): die Werte aus der Firebase-Konsole hier einsetzen.
// Diese Werte sind nicht geheim; geschützt wird über das Passwort und die Firestore-Regeln.
window.TURNIER_CONFIG = {
  firebase: {
    apiKey: "HIER_EINSETZEN",
    authDomain: "HIER_EINSETZEN",
    projectId: "HIER_EINSETZEN",
    storageBucket: "HIER_EINSETZEN",
    messagingSenderId: "HIER_EINSETZEN",
    appId: "HIER_EINSETZEN"
  },
  // Login-Name des Turnierleitungs-Kontos in Firebase (Schritt 3). Muss keine echte Adresse sein.
  adminEmail: "turnierleitung@loewen-3x3.de",
  // Name des Datensatzes in der Datenbank. Für ein neues Turnier einen neuen Namen wählen.
  turnierId: "loewen-3x3-2026"
};
