$(document).ready(function() {
	var emiLoanId= $("#LoanId").val();
	var emiLoanAmount = $("#appliedLoanAmount").val();
	var emiInterestRate = $("#interestRate").val();
	
	$(".loanId").val(emiLoanId);
	$(".emiLoanAmount").val(emiLoanAmount);
	$(".emiInterrestRate").val(emiInterestRate);
	
	
	// save and calculation start
	$('.emi-view').hide();
	$('#emi-calculation-save').click(function(){
	        	var id 						= $("#emi_id").val();
	        	var loan 					= $("#emi_loanId").val();
	        	var loanAmount 				= $("#emi_loanAmount").val();
	        	var interestRate 			= $("#emi_intRate").val();
	        	var gestation 				= $("#emi_gestation").val();
	        	var totalNumOfInstallment 	= $("#emi_totalNumOfInstallment").val();
	        	var numOfInstallmentYear	= $("#emi_numOfInstallmentYear").val();
	        	var serviceChargePercen 	= $("#emi_serviceChargePercen").val();
	        	var riskFundPercen 			= $("#emi_riskFundPercen").val();
	        	
	        	 var emiFormData = {
	        			'id' :id,
	        			'loanAmount' :loanAmount,
	        			'interestRate' :interestRate,
	        			'gestation' :gestation,
	        			'totalNumOfInstallment' :totalNumOfInstallment,
	        			'numOfInstallmentYear' :numOfInstallmentYear,
	        			'serviceChargePercen' :serviceChargePercen,
	        			'riskFundPercen' : riskFundPercen,
	        			'loan' : {'loanId':loan}
	          			
	        			
	        	};
	        	var JsonObjectForEmi = JSON.stringify(emiFormData);
	        	var token = $("meta[name='_csrf']").attr("content");
	            var header = $("meta[name='_csrf_header']").attr("content");
	        	
	            $.ajax({
	                url: '/retail/emi/save',
	                type: 'POST',
	                contentType: 'application/json',
	                dataType: 'json',
	                data: JsonObjectForEmi,
	                beforeSend: function (xhr) {
	                    xhr.setRequestHeader(
	                        header, token);
	                },

	                success: function (data) {
	               	if(data.isError!=1){
	                       $("#specialAlert").text("File Successfully save");
	                       $("#exampleModalLong").modal("toggle");
	               	}
	               	$(".emi-footer").hide();
	               	$(".emi-view").show();
	               	
	               	$("#view_emi_risk_fund").val((data.riskFund).toFixed(2));
	               	$("#view_emi_gestation").val((data.interestGesPeriod).toFixed(2));
	               	$("#view_emi_service_charge").val((data.serviceCharge).toFixed(2));
	               	$("#emi_installment_size").val((data.emi).toFixed(2));
	               	$("#view_emi_total_payment").val((data.totalPayment).toFixed(2));
	               	
	               	
	                   
	                    
	                    
	                   
	              
	                },
	                error: function (err) {
	                    alert(err);
	                }
	            }); 
		
	});
	
});