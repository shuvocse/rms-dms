//All report related script is written here
$(document).ready(function() {
	
	var token = $("meta[name='_csrf']").attr("content");
    var header = $("meta[name='_csrf_header']").attr("content");
	
	// Individual user's activity report for loan case over months
	$("#show-usr-report").click(function(){
		var dateP = $('#datepickerR').val().split('/');
		var date = {'day':dateP[0],'month':dateP[1],'year':dateP[2]};
		
		$.ajax({
			url:"/report/activities/rest/user",
			type: 'POST',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data:JSON.stringify(date),
            beforeSend: function (xhr) {
                xhr.setRequestHeader(header, token);
            },
            success:function(data){
            	$("tbody").empty();
            	$("#datepicker").val("");
            	if(data.length!==0){
            		for(var i=0;i<data.length;i++){
            			$("tbody").append("<tr><td>"+data[i].particulars+"</td><td>"+data[i].today+"</td><td>"+data[i].currentMonth+"</td><td>"+data[i].previousMonth+"</td></tr>");
            		}
            		$("#datepicker").val("");
            	}else
            		alert("No data found");
            },
            error:function(jqXHR, exception){
            	showUnivarsalErrorMsg(jqXHR, exception);
            }
		});
		$("#datepicker").empty();
	});
	$("#datepicker").val("");
	
	
	$("#show-case-report").click(function(){
		var val = $("#caseInput").val();
		
		$.ajax({
			url:"/report/activities/rest/caselife",
			type: 'GET',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data:{'c':val},
            beforeSend: function (xhr) {
                xhr.setRequestHeader(header, token);
            },
            success:function(data){
            	$("tbody").empty();
            	
            	if(data.length!==0){
            		for(var i=0;i<data.length;i++){
            			var completeDate;
            			if(data[i].completedDate==null){
            				completeDate = "Not available"
            			}else
            				completeDate = new Date(data[i].completedDate).toLocaleString();
            			$("tbody").append("<tr>" +
							"<td>"+data[i].userId+"</td>" +
							"<td>"+data[i].userName+"</td>" +
							"<td>"+data[i].taskName+"</td>" +
							"<td>"+new Date(data[i].receivedDate).toLocaleString()+"</td>" +
							"<td>"+completeDate+"</td>" +
							"<td>"+data[i].totalRequiredTime+"</td>" +
							"</tr>");
            		}
            	}else
            		alert("No data found");
            },
            error:function(jqXHR, exception){
            	showUnivarsalErrorMsg(jqXHR, exception);
            }
		});
		
	});
	
	
	// All loan report for given date
	$("#show-allloan-report").click(function(){
		var date = $('#datepicker').val().split('/');
		var date = {'day':date[0],'month':date[1],'year':date[2]};
		
		$.ajax({
			url:"/report/activities/rest/allcase",
			type: 'POST',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            data:JSON.stringify(date),
            beforeSend: function (xhr) {
                xhr.setRequestHeader(header, token);
            },
            success:function(data){
            	$("tbody").empty();
            	
            	if(data!=null){
            		
            		var tableBody = "<tr><td rowspan='2'>Submitted</td><td>Total Number</td>" +
            						"<td><span>"+data.submittedNumber[0]+"</span></td>" +
            						"<td><span>"+data.submittedNumber[1]+"</span></td>" +
            						"<td><span>"+data.submittedNumber[2]+"</span></td>" +
            						"<td><span>"+data.submittedNumber[3]+"</span></td>" +
            						"<td><span>"+data.submittedNumber[4]+"</span></td>" +
            						"</tr><tr><td>Amount(BDT)</td>" +
            						"<td><span>"+data.submittedAmount[0]+"</span></td>" +
            						"<td><span>"+data.submittedAmount[1]+"</span></td>" +
									"<td><span>"+data.submittedAmount[2]+"</span></td>" +
									"<td><span>"+data.submittedAmount[3]+"</span></td>" +
									"<td><span>"+data.submittedAmount[4]+"</span></td>" +
									"</tr>" +
									"<tr>" +
									"<td rowspan='2'>Approved</td><td>Total Number</td>" +
									"<td><span>"+data.approvedNumber[0]+"</span></td>" +
									"<td><span>"+data.approvedNumber[1]+"</span></td>" +
									"<td><span>"+data.approvedNumber[2]+"</span></td>" +
									"<td><span>"+data.approvedNumber[3]+"</span></td>" +
									"<td><span>"+data.approvedNumber[4]+"</span></td>" +
									"</tr>" +
									"<tr>" +
									"<td>Amount(BDT)</td>" +
									"<td><span>"+data.approvedAmount[0]+"</span></td>" +
									"<td><span>"+data.approvedAmount[1]+"</span></td>" +
									"<td><span>"+data.approvedAmount[2]+"</span></td>" +
									"<td><span>"+data.approvedAmount[3]+"</span></td>" +
									"<td><span>"+data.approvedAmount[4]+"</span></td>" +
									"</tr>" +
									"<tr><td rowspan='2'>Disbursed</td><td>Total Number</td>" +
									"<td><span>"+data.disbursedNumber[0]+"</span></td>" +
									"<td><span>"+data.disbursedNumber[1]+"</span></td>" +
									"<td><span>"+data.disbursedNumber[2]+"</span></td>" +
									"<td><span>"+data.disbursedNumber[3]+"</span></td>" +
									"<td><span>"+data.disbursedNumber[4]+"</span></td>" +
									"</tr>" +
									"<tr>" +
									"<td>Amount(BDT)</td>" +
									"<td><span>"+data.disbursedAmount[0]+"</span></td>" +
									"<td><span>"+data.disbursedAmount[1]+"</span></td>" +
									"<td><span>"+data.disbursedAmount[2]+"</span></td>" +
									"<td><span>"+data.disbursedAmount[3]+"</span></td>" +
									"<td><span>"+data.disbursedAmount[4]+"</span></td>" +
									"</tr>" +
									"<tr>" +
									"<td rowspan='2'>Disbursed</td><td>Total Number</td>" +
									"<td><span>"+data.settledNumber[0]+"</span></td>" +
									"<td><span>"+data.settledNumber[1]+"</span></td>" +
									"<td><span>"+data.settledNumber[2]+"</span></td>" +
									"<td><span>"+data.settledNumber[3]+"</span></td>" +
									"<td><span>"+data.settledNumber[4]+"</span></td>" +
									"</tr>" +
									"<tr>" +
									"<td>Amount(BDT)</td>" +
									"<td><span>"+data.settledAmount[0]+"</span></td>" +
									"<td><span>"+data.settledAmount[1]+"</span></td>" +
									"<td><span>"+data.settledAmount[2]+"</span></td>" +
									"<td><span>"+data.settledAmount[3]+"</span></td>" +
									"<td><span>"+data.settledAmount[4]+"</span></td>" +
									"</tr>";
            		
            		$("tbody").append(tableBody);
            		
            		for(var i=0;i<data.length;i++){
            			$("tbody").append("<tr><td>"+data[i].particulars+"</td><td>"+data[i].today+"</td><td>"+data[i].currentMonth+"</td><td>"+data[i].previousMonth+"</td></tr>");
            		}
            	}else
            		alert("No data found");
            },
            error:function(jqXHR, exception){
            	showUnivarsalErrorMsg(jqXHR, exception);
            }
		});
	});
	
	// Individual user's activity report for loan case over months
		$("#show-overdue-report").click(function(){
			var date = $('#datepicker').val().split('/');
			var date = {'day':date[0],'month':date[1],'year':date[2]};
			
			$.ajax({
				url:"/report/collection/notupdate/rest",
				type: 'POST',
	            contentType: 'application/json; charset=utf-8',
	            dataType: 'json',
	            data:JSON.stringify(date),
	            beforeSend: function (xhr) {
	                xhr.setRequestHeader(header, token);
	            },
	            success:function(data){
	            	$("tbody").empty();
	            	
	            	if(data.length!==0){
	            		for(var i=0;i<data.length;i++){
	            			$("tbody").append("<tr>"+
	            					"<td>"+data[i].loanAccNo+"</td>"+
	            					"<td>"+data[i].caseNo+"</td>"+
	            					"<td>"+data[i].customerName+"</td>"+
	            					"<td>"+data[i].customerId+"</td>"+
	            					"<td>"+data[i].casaNumber+"</td>"+
	            					"<td>"+data[i].branchName+"</td>"+
	            					"<td>"+data[i].facilityType+"</td>"+
	            					"<td>"+data[i].productName+"</td>"+
	            					"<td>"+data[i].disbursementDate+"</td>"+
	            					"<td>"+data[i].expiryDate+"</td>"+
	            					"<td>"+data[i].emiAmount+"</td>"+
	            					"<td>"+data[i].emiDate+"</td>"+
	            					"<td>"+data[i].outstandingAmount+"</td>"+
	            					"<td>"+data[i].odAmount+"</td>"+
	            					"<td>"+data[i].noOfOdMonths+"</td>"+
	            					"<td>"+data[i].collectionOfficer+"</td>"+
	            					"<td>"+data[i].assignDate+"</td>"+
	            					"<td>"+data[i].collectionStatus+"</td>"+
	            					"</tr>");
	            		}
	            	}else
	            		alert("No data found");
	            },
	            error:function(jqXHR, exception){
	            	showUnivarsalErrorMsg(jqXHR, exception);
	            }
			});
		});
		
		//Collection officer wise overdue loan status report
		$("#ov-show-report").click(function(){
			var val = $("#caseInput").val();
			
			$.ajax({
				url:"/report/collection/overdue/co-wisw/rest",
				type: 'GET',
	            contentType: 'application/json; charset=utf-8',
	            dataType: 'json',
	            data:{'co':val},
	            beforeSend: function (xhr) {
	                xhr.setRequestHeader(header, token);
	            },
	            success:function(data){
	            	$("tbody").empty();
	            	
	            	if(data.length!==0){
	            		for(var i=0;i<data.length;i++){
	            			$("tbody").append("<tr>"+
	            					"<td>"+data[i].loanAccNo+"</td>"+
	            					"<td>"+data[i].caseNo+"</td>"+
	            					"<td>"+data[i].customerName+"</td>"+
	            					"<td>"+data[i].customerId+"</td>"+
	            					"<td>"+data[i].casaNumber+"</td>"+
	            					"<td>"+data[i].branchName+"</td>"+
	            					"<td>"+data[i].facilityType+"</td>"+
	            					"<td>"+data[i].productName+"</td>"+
	            					"<td>"+data[i].disbursementDate+"</td>"+
	            					"<td>"+data[i].expiryDate+"</td>"+
	            					"<td>"+data[i].emiAmount+"</td>"+
	            					"<td>"+data[i].emiDate+"</td>"+
	            					"<td>"+data[i].outstandingAmount+"</td>"+
	            					"<td>"+data[i].odAmount+"</td>"+
	            					"<td>"+data[i].noOfOdMonths+"</td>"+
	            					"<td>"+data[i].collectionOfficer+"</td>"+
	            					"<td>"+data[i].assignDate+"</td>"+
	            					"<td>"+data[i].collectionStatus+"</td>"+
	            					"</tr>");
	            		}
	            	}else
	            		alert("No data found");
	            },
	            error:function(jqXHR, exception){
	            	showUnivarsalErrorMsg(jqXHR, exception);
	            }
			});
			
		});
		
		//Branch wise collection report
		$("#show-year-coll-report").click(function(){
			var val = $("#yearInput").val();
			
			$.ajax({
				url:"/report/collection/branch/rest",
				type: 'GET',
				contentType: 'application/json; charset=utf-8',
				dataType: 'json',
				data:{'year':val},
				beforeSend: function (xhr) {
					xhr.setRequestHeader(header, token);
				},
				success:function(data){
					$("tbody").empty();
					
					if(data.length!==0){
						for(var i=0;i<data.length;i++){
							$("tbody").append("<tr>"+
									"<td>"+data[i].branchCode+"</td>"+
									"<td>"+data[i].branchName+"</td>"+
									"<td>"+data[i].reportYear+"</td>"+
									"<td>"+data[i].totalAmount+"</td>"+
									"<td>"+data[i].totalCollected+"</td>"+
									"<td>"+(data[i].totalAmount-data[i].totalCollected)+"</td>"+
							"</tr>");
						}
					}else
						alert("No data found");
				},
				error:function(jqXHR, exception){
					showUnivarsalErrorMsg(jqXHR, exception);
				}
			});
			
		});
	
});