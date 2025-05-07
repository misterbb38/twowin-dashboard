


// server.js - Point d'entrée de l'application
const express = require('express');
const path = require('path');

// Initialisation de l'application Express
const app = express();
const PORT = 2000;

// Configuration pour servir les fichiers statiques depuis le dossier "public"
app.use(express.static(path.join(__dirname, 'public')));

// Middleware pour analyser les requêtes JSON et les formulaires
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuration des en-têtes CORS pour permettre les téléchargements et intégrations
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
    res.header('Cross-Origin-Embedder-Policy', 'require-corp');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    next();
});

// Route catch-all pour rediriger toutes les requêtes vers index.html (pour le SPA)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Démarrage du serveur
app.listen(PORT, '0.0.0.0', () => {
    console.log(`TWOWIN disponible sur http://0.0.0.0:${PORT}`);
});
