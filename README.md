cco il testo pronto da copiare e incollare in un file instructions.md.

# Istruzioni per avviare il progetto – Progetto Piante

Queste istruzioni spiegano come avviare correttamente **frontend** e **backend** del progetto.

---

## Requisiti

- **Node.js** 
- **npm**

---

## 1️⃣ Avvio del Frontend (React + Vite)

1. Aprire un terminale nella **cartella principale del progetto**
2. Avviare il frontend:
`npm run dev`

3. Aprire il browser all’indirizzo indicato dal terminale

⚠️ Lasciare questo terminale aperto.

## 2️⃣ Avvio del Backend
1. Aprire un secondo terminale.
2. Spostarsi nella cartella backend:
`cd backend`
3. Installare i pacchetti necessari (solo la prima volta):
`npm install express node-fetch cors`
4. Avviare il server backend:
`node server.js`
Se tutto è corretto, comparirà il messaggio:

`✅ Backend avviato su http://localhost:3000`
⚠️ Anche questo terminale deve rimanere aperto.

## 3️⃣ Note Importanti
Il frontend comunica con il backend tramite:
http://localhost:3000/plants
Il backend utilizza l’API Trefle per recuperare i dati sulle piante.

Senza il backend attivo, il sito non mostrerà alcun risultato.

La lingua di default del sito è inglese (ENG).

Per via delle policy cors dell'api Trefle, le chiamate sono possibili solo tramite browser, curl o appunto NodeJS; essendo l'unico modo praticabile per un progetto React, è stato (purtroppo) necessario questo approccio al backend

## 4️⃣ Struttura del Progetto (semplificata)
```plaintext
progetto-piante/
│
├── src/
│   │
│   ├── assets/
│   │   ├── bg.jpeg
│   │   └── logo.png
│   │
│   ├── backend/
│   │   └── server.js
│   │
│   ├── components/
│   │   ├── InfoBox.jsx
│   │   ├── LanguageSwitcher.jsx
│   │   ├── PlantCard.jsx
│   │   ├── SearchBar.jsx
│   │   └── SideLogo.jsx
│   │
│   ├── context/
│   │   └── LanguageContext.jsx
│   │
│   ├── i18n/
│   │   └── translations.js
│   │
│   ├── pages/
│   │   └── Home.jsx
│   │
│   ├── styles/
│   │   └── home.css
│   │
│   ├── utils/
│   │   └── translate.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── package-lock.json
├── index.hmtl
├── .gitignore
├── eslint.config.js
├── vite.config.js
└── README.md
```