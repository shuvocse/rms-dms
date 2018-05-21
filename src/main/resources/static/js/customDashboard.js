var getUrlParameter = (function(a) {
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i)
    {
        var p=a[i].split('=', 2);
        if (p.length == 1)
            b[p[0]] = "";
        else
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
})(window.location.search.substr(1).split('&'));



/*Start Retail Card Bar Chart*/
 var barChartDataRC ={
    labels: ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"],
    datasets: [
      {
        label: "Initiation",
        fillColor: "rgba(210, 214, 222, 1)",
        strokeColor: "rgba(210, 214, 222, 1)",
        pointColor: "rgba(210, 214, 222, 1)",
        pointStrokeColor: "#c1c7d1",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: []//dataArray1
      },
      {
        label: "Disbursement",
        fillColor: "rgba(60,141,188,0.9)",
        strokeColor: "rgba(60,141,188,0.8)",
        pointColor: "#3b8bba",
        pointStrokeColor: "rgba(60,141,188,1)",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(60,141,188,1)",
        data: []//dataArray2
      }
    ]
  };
 
 barChartDataRC.datasets[1].fillColor = "#00a65a";
 barChartDataRC.datasets[1].strokeColor = "#00a65a";
 barChartDataRC.datasets[1].pointColor = "#00a65a";
 
 
 /*End Retail Card Bar Chart*/
 
 /*Start Collection and Monitoring Bar chart*/
 
 var barChartDataCol ={
		    labels: ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"],
		    datasets: [
		      {
		        label: "Target",
		        fillColor: "rgba(210, 214, 222, 1)",
		        strokeColor: "rgba(210, 214, 222, 1)",
		        pointColor: "rgba(210, 214, 222, 1)",
		        pointStrokeColor: "#c1c7d1",
		        pointHighlightFill: "#fff",
		        pointHighlightStroke: "rgba(220,220,220,1)",
		        data: []//dataArray1
		      },
		      {
		        label: "Collection",
		        fillColor: "rgba(60,141,188,0.9)",
		        strokeColor: "rgba(60,141,188,0.8)",
		        pointColor: "#3b8bba",
		        pointStrokeColor: "rgba(60,141,188,1)",
		        pointHighlightFill: "#fff",
		        pointHighlightStroke: "rgba(60,141,188,1)",
		        data: []//dataArray2
		      }
		    ]
		  };
		 
		 barChartDataCol.datasets[1].fillColor = "#00a65a";
		 barChartDataCol.datasets[1].strokeColor = "#00a65a";
		 barChartDataCol.datasets[1].pointColor = "#00a65a";
 
 /*End Collection and Monitoring Bar chart*/

  var barChartOptions = {
    //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
    scaleBeginAtZero: true,
    //Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines: true,
    //String - Colour of the grid lines
    scaleGridLineColor: "rgba(0,0,0,.05)",
    //Number - Width of the grid lines
    scaleGridLineWidth: 1,
    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,
    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,
    //Boolean - If there is a stroke on each bar
    barShowStroke: true,
    //Number - Pixel width of the bar stroke
    barStrokeWidth: 2,
    //Number - Spacing between each of the X value sets
    barValueSpacing: 5,
    //Number - Spacing between data sets within X values
    barDatasetSpacing: 1,
    //String - A legend template
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
    //Boolean - whether to make the chart responsive
    responsive: true,
    maintainAspectRatio: true
  };
  
  barChartOptions.datasetFill = false;
  
  

$(document).ready(function() {
	var url= getUrlParameter["m"];
	if(url==='retail'){
		$.ajax({
			url: '/dash-board/total-initiation',
			type: 'GET',
			
		})
		.done(function(data) {
			var init = [];
			var dis = [];

			for(var i =0 ;i< data.length;i++){
				init.push(data[i][0]);
				dis.push(data[i][1]);
			}
			barChartDataRC.datasets[0].data = init;
	  		barChartDataRC.datasets[1].data = dis;

			var barChartCanvas=$("#barChart").get(0).getContext("2d");
		  	var barChart = new Chart(barChartCanvas);
		  	barChart.Bar(barChartDataRC, barChartOptions);
			
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
	}
	
	
	
	if(url==='card'){
		$.ajax({
			url: '/dash-board/total-initiation',
			type: 'GET',
			
		})
		.done(function(data) {
			var init = [];
			var dis = [];

			for(var i =0 ;i< data.length;i++){
				init.push(data[i][0]);
				dis.push(data[i][1]);
			}
			barChartDataRC.datasets[0].data = init;
	  		barChartDataRC.datasets[1].data = dis;

			var barChartCanvas=$("#barChart").get(0).getContext("2d");
		  	var barChart = new Chart(barChartCanvas);
		  	barChart.Bar(barChartDataRC, barChartOptions);
			
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
	}
	
	
	if(url==='collectionMonitoring'){
		$.ajax({
			url: '/dash-board/collection-monitoring',
			type: 'GET',
			
		})
		.done(function(data) {
			var totalTer=0;
			var totalCol=0;
			var perYerCol=0;
			var init = [];
			var dis = [];
			
			for(var i =0 ;i< data.length;i++){
				init.push(data[i][0]);
				totalTer=totalTer+data[i][0];
				dis.push(data[i][1]);
				totalCol=totalCol+data[i][1];
				
			}
			 perYerCol=(100*totalCol)/totalTer;
			 
			$("#rec-pers-year").text(parseInt(perYerCol) + '% Done');
			$("#pp-bar-coll").css('width',parseInt(perYerCol)+'%');
			$("#rec-coll-year").text('Collection : '+parseFloat(totalCol).toFixed(2) +' Tk');
			$("#rec-ter-year").text('Target : '+parseFloat(totalTer).toFixed(2) +' Tk');
			
			barChartDataCol.datasets[0].data = init;
	  		barChartDataCol.datasets[1].data = dis;

	  		var barChartCanvas2=$("#barChart2").get(0).getContext("2d");
	  		var barChart2 = new Chart(barChartCanvas2);
	  		barChart2.Bar(barChartDataCol, barChartOptions);
			
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
	}
	
	if(url==='collectionMonitoring'){
		$.ajax({
			url: '/dash-board/collection-monitoring/current-month',
			type: 'GET',
		})
		.done(function(data) {
			var target = [];
			var collection = [];
			target.push(data[0][0]);
			collection.push(data[0][1]);
			if(target!=0){
				perYerCol=(100*collection)/target;
			}else{
				perYerCol=0;
			}
			
			
			
			$("#rec-pers-month").text(parseInt(perYerCol) + '% Done');
			$("#pp-bar-coll-month").css('width',parseInt(perYerCol)+'%');
			$("#rec-coll-month").text('Collection : '+parseFloat(collection).toFixed(2) +' Tk');
			$("#rec-ter-month").text('Target : '+parseFloat(target).toFixed(2) +' Tk');
			
			
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
		
	}
	
	
});

$(document).ready(function() {
	var url= getUrlParameter["m"];
	if(url==='retail' || url==='card'){
		$.ajax({
			url: '/dash-board/initiation/current-month',
			type: 'GET',
		})
		.done(function(data) {
			
			$("#init-month-amount").text('TK. '+parseFloat(data).toFixed(2));
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
	}
		
		
	
});


$(document).ready(function() {
	
	$.ajax({
		url: '/dash-board/disburse/current-month',
		type: 'GET',
	})
	.done(function(data) {
		
		$("#dis-month-amount").text('TK. '+ parseFloat(data).toFixed(2));
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	

});





//pie chart



var pieOptions = {
	    //Boolean - Whether we should show a stroke on each segment
	    segmentShowStroke: true,
	    //String - The colour of each segment stroke
	    segmentStrokeColor: "#fff",
	    //Number - The width of each segment stroke
	    segmentStrokeWidth: 1,
	    //Number - The percentage of the chart that we cut out of the middle
	    percentageInnerCutout: 50, // This is 0 for Pie charts
	    //Number - Amount of animation steps
	    animationSteps: 100,
	    //String - Animation easing effect
	    animationEasing: "easeOutBounce",
	    //Boolean - Whether we animate the rotation of the Doughnut
	    animateRotate: true,
	    //Boolean - Whether we animate scaling the Doughnut from the centre
	    animateScale: false,
	    //Boolean - whether to make the chart responsive to window resizing
	    responsive: true,
	    // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
	    maintainAspectRatio: false,
	    //String - A legend template
	    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>",
	    //String - A tooltip template
	    tooltipTemplate: "<%=value %> % <%=label%> "
	  };



/*$(document).ready(function() {
	
	$.ajax({
		url: '',
		type: 'GET',
	})
	.done(function(data) {
		
		var pc=new PieChart();
		

		var pieChartCanvas1 = $("#pieChart1").get(0).getContext("2d");
		var pieChart1 = new Chart(pieChartCanvas1);
		pieChart1.Doughnut(PieData1, pieOptions);
		
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	

});*/

