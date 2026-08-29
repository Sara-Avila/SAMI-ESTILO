require('dotenv').config(); // Esto lee tu archivo .env mágicamente
const express = require('express');
const cors = require('cors');

const app = express();

// 2. Configurar el comportamiento (Buenas Prácticas)
app.use(cors()); // Permitir que el Frontend nos hable
app.use(express.json()); // Entender los datos que lleguen en formato JSON

// 3. Crear el "Oído" del mesero (La Ruta o Endpoint)
app.post('/api/productos', (req, res) => {
  // Recibimos los datos que el Frontend envió en la petición
  const { correo, contraseña } = req.body;

  // ¡BUENA PRÁCTICA: VALIDACIÓN EN EL BACKEND! (Seguridad Real)
  if (!correo || !contraseña) {
    return res.status(400).send({ error: "Datos inválidos, hacker 🕵️‍♂️" });
  }

  console.log(`¡Pedido recibido! Quieren registrar ${correo} con contraseña ${contraseña}`);
  
  // Por ahora, solo respondemos que todo está bien.
  // (En la próxima lección reemplazaremos esto con el INSERT INTO SQL)
  res.status(201).send({ mensaje: "¡Producto validado por el Backend!" });
});

// 4. Despertar al Mesero
const PUERTO = 3000;
app.listen(PUERTO, () => {
  console.log(`inicio sesion chimba ${PUERTO}`);
});