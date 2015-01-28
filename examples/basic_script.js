(function() {
	document.getElementById('plot2d').style.background = 'orange';
	document.getElementById('plot3d').style.background = 'skyblue';

	var problem;
	
	eulerface.select(
		'volume',
		document.getElementById('volumeSelect'),
		problems.map(function(pr) {return eulerface.div(pr.tex)}),
		problems.map(function(pr) {return pr.model.join('&'); }),
		updateProblem
	);
	
	MathJax.Hub.Queue(
		['Typeset', MathJax.Hub],
		[eulerface.bind, updateProblem],
		[updateProblem]
	);
	
	function updateProblem() {
		problem = eulerface.getModelById('volume');
	}
}());