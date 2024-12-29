const express = require('express');
const app = express();
const PORT = 3000;

// Lista de profesiones simuladas
const professions = [
  { id: 1, name: 'Ingeniero de Software' },
  { id: 2, name: 'Doctor' },
  { id: 3, name: 'Profesor' },
  { id: 4, name: 'Arquitecto' },
];

// Endpoint para obtener todas las profesiones
app.get('/api/professions', (req, res) => {
  res.json(professions);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
