// Importar el módulo http
const http = require('http');

// Crear el servidor
const server = http.createServer((req, res) => {
  // Establecer el estado HTTP y el tipo de contenido
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  // Enviar la respuesta
  res.end('Hello World\n');
});

// Escuchar en el puerto 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
