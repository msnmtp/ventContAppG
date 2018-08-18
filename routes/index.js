const express = require('express');

const mongoose = require('mongoose');

const router = express.Router();
const Registrelaboratoris = mongoose.model('Registrelaboratoris');

router.get('/', (req, res) => {
  //res.send('It works!');
  res.render('inici', {title: 'Ventula food Controls'});
});

router.get('/laboratoris', (req,res)=>{
	Registrelaboratoris.find(function(err, registreslaboratoris) {
	if(err) return  console.log(err);	
  	res.render('laboratoris', {title: 'Ventula food Controls - laboratoris', registreslaboratoris});
  })
});


router.get('/entradalaboratoris', (req,res)=>{
	res.render('entradalaboratoris', {title: 'Ventula food Controls - formulari laboratoris'})
});

router.post('/entradalaboratoris', (req,res)=>{
	let laboratori = req.body
	const registre = new Registrelaboratoris(req.body);
	registre.save();
	res.render("entradalaboratorisconfirmar", {title: 'Ventula food Controls - confirmacio laboratoris', laboratori});
});

router.post('/borrarlaboratori', (req,res)=>{
	Registrelaboratoris.deleteOne({_id:req.body._id}, function(err){
		if (err) throw err;
		console.log('laboratori borrat satisfactòriament');
			Registrelaboratoris.find(function(err, registreslaboratoris) {
				if(err) return  console.log(err);
				res.render('laboratoris', {title: 'Ventula food Controls - laboratoris', registreslaboratoris});
			});
	});
});

router.post('/modificarlaboratori', (req,res)=>{
	console.log(req.body);
	Registrelaboratoris.findOne({'_id' :req.body.registre_id}, 'nom adreca codipostal poblacio provincia telefon contacte email1 email2', function(err, laboratori){
		if (err) return console.log(err);
		res.render('modificarlaboratori', {title: 'Ventula food Controls - modificar laboratori', laboratori});
	});
});

router.post('/laboratorimodificat', (req, res)=>{
	Registrelaboratoris.findById(req.body.id, function(err, laboratorimodificat){
		laboratorimodificat.nom = req.body.nom;
		laboratorimodificat.adreca = req.body.adreca;
		laboratorimodificat.codipostal = req.body.codipostal;
		laboratorimodificat.poblacio = req.body.poblacio;
		laboratorimodificat.provincia = req.body.provincia;
		laboratorimodificat.telefon = req.body.telefon;
		laboratorimodificat.contacte = req.body.contacte;
		laboratorimodificat.email1 = req.body.email1;
		laboratorimodificat.email2 = req.body.email2;
		laboratorimodificat.save(function(err){
			if (err) throw err;
			console.log('laboratori modificat de forma satisfactòria');
			Registrelaboratoris.find(function(err, registreslaboratoris) {
				if(err) return  console.log(err);
				res.render('laboratoris', {title: 'Ventula food Controls - laboratoris', registreslaboratoris});
			});
		});
		
	});
});

module.exports = router;