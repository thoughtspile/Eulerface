(function() {
	var problem;
	
	eulerface.select(
		'volume',
		document.getElementById('volumeSelect'),
		problems.map(function(pr) {return eulerface.div(pr.tex)}),
		problems.map(function(pr) {return pr.model.join('&'); }),
		updateProblem
	);
	
	var customSelect = new eulerface.Select(document.getElementById('testSelect'));
	var div = document.createElement('div');
	var img = document.createElement('img');
	img.setAttribute('src', 'http://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/125px-Flag_of_Romania.svg.png');
	div.appendChild(img);
	customSelect.addOption(div, 'RO');
	document.getElementById('testSelect').addEventListener('change', function() {
		console.log(document.getElementById('testSelect').getAttribute('value'));
	});
	
	MathJax.Hub.Queue(
		['Typeset', MathJax.Hub],
		[eulerface.bind, updateProblem],
		[updateProblem]
	);
	
	function updateProblem() {
		problem = eulerface.getModelById('volume');
	}
}());