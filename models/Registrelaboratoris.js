const mongoose = require('mongoose');

const registreLaboratorisSchema = new mongoose.Schema ({
	nom: {
		type: String,
		trim: true,
	},
	adreca: {
		type: String,
		trim: true,
	},
	codipostal: {
		type: Number,
		trim: true,
	},
	poblacio: {
		type: String,
		trim: true,
	},
	provincia: {
		type: String,
		trim: true,
	},
	telefon: {
		type: String,
		trim: true,
	},
	contacte: {
		type: String,
		trim: true,
	},
	email1: {
		type: String,
		trim: true,
	},
	email2: {
		type: String,
		trim: true,
	},
});

module.exports = mongoose.model('Registrelaboratoris', registreLaboratorisSchema);