const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());
app.use(express.static('public'));

const port = 3000;

app.get('/api/liste', (req, res) => {
  fs.readFile('liste.json', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Erreur de lecture du fichier.' });
    }
    res.json(JSON.parse(data));
  });
});

app.post('/api/liste', (req, res) => {
  const newData = req.body;
  fs.writeFile('liste.json', JSON.stringify(newData, null, 2), (err) => {
    if (err) {
      return res.status(500).json({ message: 'Erreur de sauvegarde des données.' });
    }
    res.status(200).json({ message: 'Données mises à jour avec succès.' });
  });
});

app.listen(port, () => {
  console.log(`Serveur en ligne sur http://localhost:${port}`);
});
