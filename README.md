# 🇩🇪 Deutsch
[Inhalt auf Deutsch]

# Demoblaze Cypress End-to-End Tests

Dieses Projekt enthält End-to-End (E2E) Tests für die Demo-Website [Demoblaze](https://www.demoblaze.com), die mit [Cypress](https://www.cypress.io/) automatisiert durchgeführt werden.  
Die Tests überprüfen grundlegende Funktionen der Website wie Login, Produktanzeige und Warenkorb-Interaktionen.

---

## Projektstruktur

```
├── README.md               # Diese Datei
├── cypress/
│   ├── e2e/                # End-to-End Tests
│   │   ├── login.spec.js   # Tests für den Login-Prozess
│   │   └── product.spec.js # Tests für Produkte und Warenkorb
│   ├── fixtures/           # Beispiel-Daten (z. B. Benutzerdaten)
│   └── support/            # Hilfsfunktionen und benutzerdefinierte Befehle
├── cypress.config.js       # Cypress Konfiguration
├── node_modules/           # Abhängigkeiten (automatisch generiert)
├── package.json            # Projektabhängigkeiten & Skripte
└── package-lock.json       # Sperrdatei für Abhängigkeiten
```

---

## Installation

Um das Projekt lokal auszuführen:

1. **Repository klonen**  
   ```bash
   git clone https://github.com/dein-benutzername/demoblaze-cypress-tests.git
   ```

2. **In das Projektverzeichnis wechseln**  
   ```bash
   cd demoblaze-cypress-tests
   ```

3. **Abhängigkeiten installieren**  
   ```bash
   npm install
   ```

---

## Cypress Tests ausführen

1. **Mit grafischer Oberfläche (GUI):**  
   ```bash
   npx cypress open
   ```

2. **Im Headless-Modus (z. B. für CI/CD):**  
   ```bash
   npx cypress run
   ```

---

## Testübersicht

### `login.spec.js`
- Testet die Anmeldung mit gültigen Benutzerdaten.
- Überprüft, ob nach dem Login die korrekte Seite angezeigt wird.

### `product.spec.js`
- Durchsuchen der Produktkategorien.
- Hinzufügen eines Produkts zum Warenkorb.
- Verifizierung, dass das Produkt im Warenkorb erscheint.

---

## Konfiguration

Die Konfiguration befindet sich in der Datei `cypress.config.js`. Beispiel:

```js
module.exports = {
  e2e: {
    baseUrl: 'https://www.demoblaze.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    setupNodeEvents(on, config) {
      // Weitere Setup-Optionen für Node-Events
    },
  },
};
```

---

## Beitrag leisten

Wenn du das Projekt erweitern oder Fehler beheben möchtest:

1. Repository forken  
2. Branch erstellen:  
   ```bash
   git checkout -b feature/dein-feature
   ```
3. Änderungen vornehmen und committen  
4. Pushen und Pull Request erstellen

---

## Lizenz

Dieses Projekt steht unter der **MIT-Lizenz**.  
Details findest du in der Datei `LICENSE`.

---

# 🇬🇧 English
[Same content in English]

# Demoblaze Cypress End-to-End Tests

This project contains End-to-End (E2E) tests for the demo website [Demoblaze](https://www.demoblaze.com), automated using [Cypress](https://www.cypress.io/). The tests verify core functionalities of the website, such as login, product display, and cart interactions.

---

## Project Structure

```
├── README.md               # This file
├── cypress/
│   ├── e2e/                # End-to-End tests
│   │   ├── login.spec.js   # Tests for the login process
│   │   └── product.spec.js # Tests for products and the shopping cart
│   ├── fixtures/           # Example data (e.g., user data)
│   └── support/            # Helper functions and custom commands
├── cypress.config.js       # Cypress configuration
├── node_modules/           # Dependencies (auto-generated)
├── package.json            # Project dependencies & scripts
└── package-lock.json       # Locked dependencies
```

## Installation

To run the project locally:

1. Clone the repository:
```bash
git clone https://github.com/your-username/demoblaze-cypress-tests.git
```

2. Navigate to the project directory:
```bash
cd demoblaze-cypress-tests
```

3. Install dependencies:
```bash
npm install
```

## Running Cypress Tests

1. With the graphical user interface (GUI):
```bash
npx cypress open
```

2. In headless mode (e.g., for CI/CD):
```bash
npx cypress run
```

## Test Overview

### login.spec.js
- Tests login with valid user credentials.
- Verifies the correct page is displayed after login.

### product.spec.js
- Browses product categories.
- Adds a product to the cart.
- Verifies the product appears in the cart.

## Configuration

The configuration is defined in the `cypress.config.js` file. Example:

```javascript
module.exports = {
  e2e: {
    baseUrl: 'https://www.demoblaze.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    setupNodeEvents(on, config) {
      // Additional setup options for Node events
    },
  },
};
```

## Contributing

If you want to contribute to the project or fix any issues:

1. Fork the repository
2. Create a new branch:
```bash
git checkout -b feature/your-feature
```
3. Make your changes and commit them
4. Push and create a Pull Request

## License

This project is licensed under the MIT License. See the LICENSE file for details.
