// THANKS, FOLKS! https://plotly.com/javascript/3d-scatter-plots/
// d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/3d-scatter.csv', function(err, rows){

// d3.csv('static/'+N.toString()+'/'+N.toString()+'.csv', function(err, rows){
// 
// function unpack(rows, key) {
// 	return rows.map(function(row)
// 	{ return row[key]; });}
// 
// var trace1 = {
// 	x:unpack(rows, 'x1'), y: unpack(rows, 'y1'), z: unpack(rows, 'z1'),
// 	mode: 'markers',
// 	marker: {
// 		size: 12,
// 		color: 'rgb(136, 8, 8)',
// 		symbol: 'circle'},
// 	type: 'scatter3d'
// };
// 
// var trace2 = {
// 	x:unpack(rows, 'x2'), y: unpack(rows, 'y2'), z: unpack(rows, 'z2'),
// 	mode: 'markers',
// 	marker: {
// 		color: 'rgb(0, 20, 217)',
// 		size: 5,
// 		symbol: 'circle',
// 		opacity: 0.2
// 	},
// 	type: 'scatter3d'};
// 
// var data = [trace1, trace2];
// var layout = {
// 	scene: {
// 		xaxis:{title: 'Folding angle'},
// 		yaxis:{title: 'Folding iteration'},
// 		zaxis:{title: 'Intersections'},
// 	},
// 	margin: {
// 	l: 0,
// 	r: 0,
// 	b: 0,
// 	t: 0
//   }};
// 
// 


axios.get('/plotly_json/'+N.toString())
  .then((response) => {
    console.log(response.data);
    
    fig=response.data.fig;
    clickables=response.data.clickables;
    var data=fig.data;
    var layout=fig.layout;
    Plotly.newPlot('scatterplotdiv', data, layout);
    
    
	var scatterplotdiv = document.getElementById('scatterplotdiv').on('plotly_click', function(data) {
		var p=data.points[0]
		var tracename=p.fullData.name
		var x=p.x.toString()
		var y=p.y.toString()
		var z=p.z.toString()
		x=x.replace("\.","_")
	
		var xyz=['p',N,y,x]
		var scriptname=xyz.join('_')
		if (clickables.includes(scriptname)){
			sketchname=scriptname;
			selected_node=scriptname;
			var savelinks=document.getElementById('selected_node');
			savelinks.innerHTML="abcdefg"
			var innerh=" -- <a href='/"+N+"/"+sketchname+"'>Save this selection</a>"
			savelinks.innerHTML=innerh
			
		}
		
		

	});
    
    
    
  });








