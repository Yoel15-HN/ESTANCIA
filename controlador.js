const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql'); // Replace with your database driver if needed

const connection = mysql.createConnection({
  // Replace with your database connection details
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database'
});

// Parse incoming request bodies as JSON
app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { usuario, password } = req.body;

  // Validate empty fields
  if (!usuario || !password) {
    return res.status(400).json({ error: 'Los campos "usuario" y "password" son obligatorios.' });
  }

  // Query database for user credentials
  connection.query('SELECT * FROM usuarios WHERE usuario = ? AND password = ?', [usuario, password], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error al acceder a la base de datos.' });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'Usuario o contraseña incorrectos.' });
    }

    // Login successful (replace with session management if needed)
    res.json({ success: true });
  });
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});