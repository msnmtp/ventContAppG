// requerir el dotenv que guarda els detalls de la connexió
// a l'arxiu .env
require('dotenv').config();
// requeriment de mongoose
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection
	.on('connected', ()=> {
		console.log(`Mongoose connection open on ${ process.env.DATABASE }`);
	})
	.on('error', (err) => {
		console.log(`Connection error: ${err.message}`);
	});


// requerim el Schema de dades a salvar a la base de dades
require('./models/Registrelaboratoris');
// importar l'aplicació app
const app = require('./app');

// crear un servidor que escolti al port 3000
// que presenti un missatge per consola

const server = app.listen(3000, ()=> {
	console.log(`Express is running on port ${server.address().port}`);
});