
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
  	'name': 'World',
  });
};

exports.view = function(req, res){
	var nameToShow = req.params.melody;
	console.log("name is " + nameToShow);
	res.render('index', {
		'name' : 'Melody',
	});
};