// Mapa para una lista negra
const blacklist = new Set();

// Función que agrega a la lista negra
const addToBlacklist = (token) => {
  blacklist.add(token);
};

// Función para validar que este en la lsita negra
const isBlacklisted = (token) => {
  return blacklist.has(token);
};

module.exports = {
  addToBlacklist,
  isBlacklisted
};
