$(document).ready(function(){
	// General color code for every Chart
	var colorArray = ["#f56954", "#00a65a", "#f39c12","#00c0ef","#3c8dbc", "#ffc0cb","#e2e5ed","#5c3f1b","#4a4a4a"];
	
	
	// ========================================= Loan Categories Pie Chart ===============================================// 
	$(function () {	
	    var loanCategoriesPieChartData = [];
		$.ajax({
	          type: 'GET',
	          url: "/dash-board/retail/piechart/loan-category",
	          success: function (data) {
	        	  var totalVal=0;
        	  data.forEach(function(element, index) {
        		      totalVal += element.value;
        			});
        	  data.forEach(function(element, index) {
        		    $("#loanCategoriesPieChartDiv ul").append('<li><i class="fa fa-circle-o" style="color:'+colorArray[index]+'"></i> '+ element.label+'</li>');
        		    var pieData = [];
        		    var percentageVal  = ((100*element.value)/totalVal);  
        			    pieData.value = percentageVal.toFixed(2);
        			    pieData.color = colorArray[index];
        			    pieData.highlight = colorArray[index];
        			    pieData.label = element.label;
        			     loanCategoriesPieChartData.push(pieData);
        		    
        			});        		
	    		  if( $("#loanCategoriesPieChart").length){
	    			  varloanCategoriesPieChartCanvas= $("#loanCategoriesPieChart").get(0).getContext("2d");
	    			  var varloanCategoriesPieChartCanvas = new Chart(varloanCategoriesPieChartCanvas);
	    			      varloanCategoriesPieChartCanvas.Doughnut(loanCategoriesPieChartData, pieOptions);
	    		  }        	
	          },
	          error: function (err) {
	              alert(JSON.stringify(err));
	          },

	      });

	});
	
	// ========================================= End Loan Categories Pie Chart ===============================================// 
	
	
	// ========================================= Customer Categories Pie Chart ===============================================// 
	$(function () {	
		var customeCategoriesPieChartData = [];		
		$.ajax({
	          type: 'GET',
	          url: "/dash-board/retail/piechart/customer-category",
	          success: function (data) {
	         	  var totalVal=0;
        	  data.forEach(function(element, index) {
        		      totalVal += element.value;
        			});
      	      data.forEach(function(element, index) {
       		    $("#customerCategoriesPieChartDiv ul").append('<li><i class="fa fa-circle-o" style="color:'+colorArray[index]+'"></i> '+ element.label+'</li>');
		      		    var pieData = [];
		      		    var percentageVal  = ((100*element.value)/totalVal);  
		      			    pieData.value = percentageVal.toFixed(2);
		      			    pieData.color = colorArray[index];
		      			    pieData.highlight = colorArray[index];
		      			    pieData.label = element.label;
		      			     customeCategoriesPieChartData.push(pieData);
		      		    
		      			});        				          
			          if( $("#customerCategoriesPieChart").length){
			       		  var customeCategoriesPieChartCanvas = $("#customerCategoriesPieChart").get(0).getContext("2d");
			       		  var customeCategoriesPieChart = new Chart(customeCategoriesPieChartCanvas);
			       		      customeCategoriesPieChart.Doughnut(customeCategoriesPieChartData, pieOptions);			       		  
			       	  }       	
	          },
	          error: function (err) {
	              alert(JSON.stringify(err));
	          },
	      });
	});
	
	// ========================================= End Customer Loan Categories Pie Chart ===============================================// 

});
